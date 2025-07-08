import { useState, useEffect } from 'react';
import {
  CCard, CCardBody, CCardText, CRow, CCol, CButton, CCollapse, CFormSelect
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilCloudDownload, cilFilter } from '@coreui/icons';
import Papa from 'papaparse';
import { saveAs } from 'file-saver';
import { registrarAuditoria } from '../../../../../utils/auditoriaServices';

type FilaRetencion = {
  nombre_facultad: string;
  nombre_sede: string;
  nombre_carrera: string;
  s_genero_retenidos: string;
  [key: string]: string;
};

const FuenteRetencion = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [data, setData] = useState<FilaRetencion[]>([]);
  const [filtered, setFiltered] = useState<FilaRetencion[]>([]);
  const [options, setOptions] = useState<Record<string, string[]>>({});
  const [filters, setFilters] = useState<Record<string, string>>({
    nombre_facultad: '',
    nombre_sede: '',
    nombre_carrera: '',
    s_genero_retenidos: ''
  });

  const SHEET_CSV_URL =
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vTxP44yTwon5st1QWP6rKm1pd_Fu9o49sZal_9lhpz-4-uaWWLHGcwDZLckvNDBxyahC1-LNWdNUyRW/pub?gid=0&single=true&output=csv';

  useEffect(() => {
    Papa.parse(SHEET_CSV_URL, {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: (result) => {
        const rawData = result.data as FilaRetencion[];

        // Limpia los campos eliminando espacios en las claves
        const parsedData = rawData.map((row) => {
            const cleanedRow: Record<string, string> = {};
            Object.keys(row).forEach((key) => {
            cleanedRow[key.trim()] = row[key];
            });
            return cleanedRow as FilaRetencion;
        });

        setData(parsedData);
        setFiltered(parsedData);

        const opciones: Record<string, string[]> = {};
        Object.keys(filters).forEach((campo) => {
            opciones[campo] = Array.from(
            new Set(parsedData.map((row) => row[campo]).filter(Boolean))
            ).sort();
        });
        setOptions(opciones);
     },
    });
  }, []);

  const aplicarFiltros = () => {
    const filtrado = data.filter((row) => {
        return Object.entries(filters).every(([key, value]) => {
        return value === '' || row[key]?.toLowerCase() === value.toLowerCase();
        });
    });
    setFiltered(filtrado);
  };

  const descargarCSV = async () => {
    const csv = Papa.unparse(filtered);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    saveAs(blob, 'retencion_desercion.csv');

      await registrarAuditoria({
      accion: "descarga_fuente",
      modulo: "retencion_desercion",
      descripcion: "El usuario descargó los datos de deserción y retención en CSV",
    });
  };

  return (
    <CCard className="border-0 shadow-sm mt-4">
      <CCardBody>
        <CRow className="align-items-center">
          <CCol xs={12} md={2} className="text-md-start text-center mb-3 mb-md-0">
            <CIcon icon={cilFilter} style={{ fontSize: '2rem', color: '#6f42c1' }} />
            <h6 className="fw-bold mt-2">Deserción y Retención</h6>
          </CCol>

          <CCol xs={12} md={7}>
            <CCardText className="text-muted" style={{ fontSize: '0.95rem' }}>
              Datos relacionados con la permanencia, abandono y retención estudiantil. Filtra por facultad, sede, carrera y género.
            </CCardText>
          </CCol>

          <CCol xs={12} md={3} className="text-md-end text-center mt-3 mt-md-0 d-flex flex-column gap-2">
            <CButton color="dark" variant="outline" onClick={() => setShowFilters(!showFilters)}>
              {showFilters ? 'Ocultar Filtros' : 'Mostrar Filtros'}
            </CButton>
            <CButton color="primary" onClick={descargarCSV} disabled={filtered.length === 0}>
              <CIcon icon={cilCloudDownload} className="me-2" />
              Descargar CSV
            </CButton>
          </CCol>
        </CRow>

        <CCollapse visible={showFilters}>
          <div className="mt-4">
            <CRow className="g-3">
              {Object.keys(filters).map((campo) => (
                <CCol key={campo} xs={12} md={6} lg={4}>
                  <CFormSelect
                    label={campo.replace(/_/g, ' ').toUpperCase()}
                    value={filters[campo]}
                    onChange={(e) =>
                      setFilters({ ...filters, [campo]: e.target.value })
                    }
                  >
                    <option value="">-- Todos --</option>
                    {options[campo]?.map((valor, i) => (
                      <option key={i} value={valor}>
                        {valor}
                      </option>
                    ))}
                  </CFormSelect>
                </CCol>
              ))}
              <CCol xs={12} className="d-flex justify-content-end">
                <CButton color="success" onClick={aplicarFiltros}>
                  Aplicar Filtros
                </CButton>
              </CCol>
            </CRow>
          </div>
        </CCollapse>
      </CCardBody>
    </CCard>
  );
};

export default FuenteRetencion;
