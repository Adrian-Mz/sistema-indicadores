import { useState, useEffect } from 'react';
import {
  CCard,
  CCardBody,
  CCardText,
  CRow,
  CCol,
  CButton,
  CCollapse,
  CFormSelect,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilCloudDownload, cilFilter } from '@coreui/icons';
import Papa from 'papaparse';
import { saveAs } from 'file-saver';
import { registrarAuditoria } from '../../../../../utils/auditoriaServices';

/* =========================
   TIPADO DE FILA
========================= */
type FilaDocente = {
  nombre_periodo: string;
  sede: string;
  facultad: string;
  carrera: string;
  genero: string;
  tiempo_dedicacion: string;
  es_phd: string;
  tiene_nombramiento: string;
  [key: string]: string;
};

/* =========================
   COMPONENTE
========================= */
const FuentePersonalAcademico = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [data, setData] = useState<FilaDocente[]>([]);
  const [filtered, setFiltered] = useState<FilaDocente[]>([]);
  const [options, setOptions] = useState<Record<string, string[]>>({});
  const [filters, setFilters] = useState<Record<string, string>>({
    nombre_periodo: '',
    sede: '',
    facultad: '',
    carrera: '',
    genero: '',
    tiempo_dedicacion: '',
    es_phd: '',
    tiene_nombramiento: '',
  });

  /* =========================
     CSV PUBLICADO
  ========================= */
  const SHEET_CSV_URL =
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vQfFMiqlD7XE4d-8VegPRemWyoFdS27slg1gY9efYOzn7utSyEK32Qgy25OavAf1OLVfigehkqrb_R9/pub?gid=1628078700&single=true&output=csv';

  /* =========================
     CARGA DE DATOS
  ========================= */
  useEffect(() => {
    Papa.parse(SHEET_CSV_URL, {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: (result) => {
        const rawData = result.data as FilaDocente[];

        // Limpieza de claves (Google Sheets suele meter espacios)
        const parsedData = rawData.map((row) => {
          const cleanedRow: Record<string, string> = {};
          Object.keys(row).forEach((key) => {
            cleanedRow[key.trim()] = row[key];
          });
          return cleanedRow as FilaDocente;
        });

        setData(parsedData);
        setFiltered(parsedData);

        // Opciones dinámicas de filtros
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

  /* =========================
     APLICAR FILTROS
  ========================= */
  const aplicarFiltros = () => {
    const filtrado = data.filter((row) =>
      Object.entries(filters).every(([key, value]) =>
        value === '' || row[key]?.toLowerCase() === value.toLowerCase()
      )
    );
    setFiltered(filtrado);
  };

  /* =========================
     DESCARGA CSV
  ========================= */
  const descargarCSV = async () => {
    const csv = Papa.unparse(filtered);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });

    saveAs(
      blob,
      `fuente_personal_academico_${new Date()
        .toISOString()
        .slice(0, 10)}.csv`
    );

    await registrarAuditoria({
      accion: 'descarga_fuente',
      modulo: 'personal_academico',
      descripcion:
        'El usuario descargó la fuente de datos de personal académico en formato CSV',
    });
  };

  /* =========================
     RENDER
  ========================= */
  return (
    <CCard className="border-0 shadow-sm mt-4">
      <CCardBody>
        <CRow className="align-items-center">
          <CCol xs={12} md={2} className="text-center text-md-start">
            <CIcon icon={cilFilter} style={{ fontSize: '2rem' }} />
            <h6 className="fw-bold mt-2">Personal Académico</h6>
          </CCol>

          <CCol xs={12} md={7}>
            <CCardText className="text-muted">
              Información del personal académico por período, sede, facultad,
              carrera, género, dedicación, PhD y tipo de nombramiento.
            </CCardText>
          </CCol>

          <CCol xs={12} md={3} className="d-flex flex-column gap-2">
            <CButton
              color="dark"
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
            >
              {showFilters ? 'Ocultar Filtros' : 'Mostrar Filtros'}
            </CButton>

            <CButton
              color="primary"
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

export default FuentePersonalAcademico;
