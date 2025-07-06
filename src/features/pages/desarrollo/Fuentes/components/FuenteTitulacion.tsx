import { useState, useEffect } from 'react';
import {
  CCard, CCardBody, CCardTitle, CCollapse, CButton,
  CFormSelect, CRow, CCol
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilCloudDownload, cilFilter } from '@coreui/icons';
import Papa from 'papaparse';
import { saveAs } from 'file-saver';

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
  const [data, setData] = useState<FilaTitulacion[]>([]);
  const [filtered, setFiltered] = useState<FilaTitulacion[]>([]);
  const [options, setOptions] = useState<Record<string, string[]>>({});
  const [filters, setFilters] = useState<Record<keyof FilaTitulacion, string>>({
    nombre_facultad: '',
    nombre_sede: '',
    carrera_unica: '',
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
      // Elimina la primera línea ("vista_titulacion")
      return lines.slice(0).join('\n');
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
  },);

  const aplicarFiltros = () => {
    const filtrado = data.filter((row) => {
      return Object.keys(filters).every((key) => {
        return filters[key as keyof FilaTitulacion] === '' || row[key] === filters[key as keyof FilaTitulacion];
      });
    });
    setFiltered(filtrado);
  };

  const descargarCSV = () => {
    const csv = Papa.unparse(filtered);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    saveAs(blob, 'titulacion.csv');
  };

  return (
    <CCard className="shadow-sm border-0 mt-4">
      <CCardBody>
        <div className="d-flex align-items-center mb-3 gap-2">
          <CIcon icon={cilFilter} style={{ fontSize: '1.4rem', color: '#6610f2' }} />
          <CCardTitle className="m-0">Filtrar y Descargar Titulación</CCardTitle>
        </div>

        <CButton color="secondary" className="mb-3" onClick={() => setShowFilters((s) => !s)}>
          {showFilters ? 'Ocultar Filtros' : 'Mostrar Filtros'}
        </CButton>

        <CCollapse visible={showFilters}>
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
        </CCollapse>

        <div className="mt-4 d-flex justify-content-end">
          <CButton
            color="success"
            onClick={descargarCSV}
            disabled={filtered.length === 0}
          >
            <CIcon icon={cilCloudDownload} className="me-2" />
            Descargar CSV
          </CButton>
        </div>
      </CCardBody>
    </CCard>
  );
};

export default FuenteTitulacion;
