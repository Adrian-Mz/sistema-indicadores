import { useState, useEffect } from 'react';
import {
  CCard, CCardBody, CCollapse, CButton,
  CFormSelect, CRow, CCol, CCardText, CAlert
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilCloudDownload, cilFilter } from '@coreui/icons';
import Papa from 'papaparse';
import { saveAs } from 'file-saver';
import { registrarAuditoria } from '../../../../../utils/auditoriaServices';

type FilaTitulacion = {
  nombre_facultad: string;
  nombre_sede: string;
  carrera_unica: string;
  cod_periodo_evaluacion: string;
  sexo: string;
  [key: string]: string;
};

const FuenteTitulacion = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);
  const [data, setData] = useState<FilaTitulacion[]>([]);
  const [filtered, setFiltered] = useState<FilaTitulacion[]>([]);
  const [options, setOptions] = useState<Record<string, string[]>>({});
  const [filters, setFilters] = useState<Record<keyof FilaTitulacion, string>>({
    nombre_facultad: '',
    nombre_sede: '',
    nombre_carrera: '',
    cod_periodo_evaluacion: '',
    sexo: ''
  });

  const SHEET_CSV_URL =
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vRU-4Bg6dQm3SZeDxic6ack80LI5eKJs8vjPSrcK71CgP4KKsu6YXZI8eegt8y2cj2IWj7lHBgah9IM/pub?gid=0&single=true&output=csv';

  useEffect(() => {
    Papa.parse(SHEET_CSV_URL, {
      download: true,
      header: true,
      skipEmptyLines: true,
      beforeFirstChunk: (chunk) => {
        const lines = chunk.split('\n');
        return lines.slice(0).join('\n'); // Elimina cabecera innecesaria
      },
      complete: (result) => {
        const parsedData = result.data as FilaTitulacion[];
        setData(parsedData);
        setFiltered(parsedData);

        const opciones: Record<string, string[]> = {};
        Object.keys(filters).forEach((campo) => {
          opciones[campo] = Array.from(
            new Set(parsedData.map((row) => row[campo]).filter(Boolean))
          ).sort();
        });
        setOptions(opciones);
      }
    });
  }, []);

  const aplicarFiltros = () => {
    const filtrado = data.filter((row) => {
      return Object.keys(filters).every((key) => {
        return filters[key as keyof FilaTitulacion] === '' || row[key] === filters[key as keyof FilaTitulacion];
      });
    });
    setFiltered(filtrado);
    setAlertVisible(true);

  // Oculta el mensaje después de 3 segundos
  setTimeout(() => setAlertVisible(false), 3000);
  };

  const descargarCSV = async () => {
    const csv = Papa.unparse(filtered);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    saveAs(blob, 'titulacion.csv');

    await registrarAuditoria({
      accion: "descarga_fuente",
      modulo: "titulacion",
      descripcion: "El usuario descargó los datos de titulación en CSV",
    });
  };

  return (
    <CCard className="border-0 shadow-sm">
      <CCardBody>
        <CRow className="align-items-center">
          <CCol xs={12} md={2} className="text-md-start text-center mb-3 mb-md-0">
            <CIcon icon={cilFilter} style={{ fontSize: '2rem', color: '#6610f2' }} />
            <h6 className="fw-bold mt-2">Titulación</h6>
          </CCol>

          <CCol xs={12} md={7}>
            <CCardText className="text-muted" style={{ fontSize: '0.95rem' }}>
              Contiene los datos utilizados para calcular la tasa de titulación por cohorte. Puedes aplicar filtros para personalizar tu descarga.
            </CCardText>
          </CCol>

          <CCol xs={12} md={3} className="text-md-end text-center mt-3 mt-md-0 d-flex flex-column gap-2">
            <CButton color="dark" variant="outline" onClick={() => setShowFilters(!showFilters)}>
              {showFilters ? 'Ocultar Filtros' : 'Mostrar Filtros'}
            </CButton>
            <CButton
              color="success"
              onClick={descargarCSV}
              disabled={filtered.length === 0}
            >
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
                <CButton color="primary" onClick={aplicarFiltros}>
                  Aplicar Filtros
                </CButton>
              </CCol>
            </CRow>
          </div>
        </CCollapse>
        {alertVisible && (
          <CAlert color="info" className="mt-3">
            Filtros aplicados correctamente. Se encontraron {filtered.length} registros.
          </CAlert>
        )}
      </CCardBody>
    </CCard>
  );
};

export default FuenteTitulacion;
