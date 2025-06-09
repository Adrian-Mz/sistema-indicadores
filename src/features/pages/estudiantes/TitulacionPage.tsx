import {
  CCard,
  CCardBody,
  CCardTitle,
  CCardText,
  CRow,
  CCol,
  CButton,
} from '@coreui/react';
import { useNavigate } from 'react-router-dom';

const facultades = [
  "ADMINISTRACIÓN DE EMPRESAS",
  "CIENCIAS",
  "CIENCIAS PECUARIAS",
  "INFORMÁTICA Y ELECTRÓNICA",
  "MECÁNICA",
  "RECURSOS NATURALES",
  "SALUD PÚBLICA",
];

const TitulacionPage = () => {
  const navigate = useNavigate();

  const handleNavigate = (facultad: string) => {
    const path = `/dashboard/estudiantes/titulacion/facultad/${facultad.toLowerCase().replace(/\s+/g, "-")}`;
    navigate(path);
  };

  return (
    <div className="p-3">
      <h4 className="mb-3 fw-semibold">Tasa de titulación</h4>

      <CCard className="mb-4">
        <CCardBody className="py-2">
          <CCardText style={{ fontSize: '0.95rem' }}>
            El indicador de titulación mide el porcentaje de estudiantes que culminan su formación académica obteniendo un título profesional, 
            en relación con el total de estudiantes que ingresaron a la institución en una cohorte determinada, 
            considerando el tiempo estipulado para completar la carrera más un margen de gracia.
          </CCardText>
        </CCardBody>
      </CCard>

      <h6 className="mb-3 text-muted">Dashboards por Facultad</h6>
      <CRow className="g-3">
        {facultades.map((facultad) => (
          <CCol key={facultad} xs={12} sm={6} md={4} xl={3}>
            <CCard className="h-100 shadow-sm small">
              <CCardBody className="d-flex flex-column justify-content-between">
                <div>
                  <CCardTitle style={{ fontSize: '1rem' }}>{facultad}</CCardTitle>
                  <CCardText style={{ fontSize: '0.85rem' }}>
                    Ver análisis detallado de titulaciones en esta facultad.
                  </CCardText>
                </div>
                <CButton
                  color="primary"
                  size="sm"
                  className="mt-2"
                  onClick={() => handleNavigate(facultad)}
                >
                  Ver Dashboard
                </CButton>
              </CCardBody>
            </CCard>
          </CCol>
        ))}
      </CRow>
    </div>
  );
};

export default TitulacionPage;
