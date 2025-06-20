import { CCard, CCardBody, CCardTitle, CCardText, CRow, CCol } from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilUser, cilCode } from "@coreui/icons";

const developers = [
  {
    nombre: "Luis Adrián Méndez",
    rol: "Desarrollador Full Stack",
    descripcion:
      "Encargado del diseño de interfaz, integración con dashboards.",
  },
  {
    nombre: "Kevin Saeteros",
    rol: "Desarrollador Full Stack",
    descripcion:
      "Responsable de la arquitectura de datos académicos, manejo de flujos de ETL.",
  },
];

const NosotrosPage = () => {
  return (
    <div className="p-3">
      <h4 className="mb-3 fw-semibold">Nosotros</h4>
      <p className="text-muted" style={{ maxWidth: 750 }}>
        Esta plataforma fue desarrollada por estudiantes de la carrera de Ingeniería en Software de la Escuela Superior Politécnica de Chimborazo (ESPOCH), como parte de su trabajo de titulación orientado a la gestión académica institucional.
      </p>

      <CRow className="g-4 mt-2">
        {developers.map((dev, index) => (
          <CCol key={index} xs={12} md={6}>
            <CCard className="h-100 shadow-sm border-0">
              <CCardBody>
                <div className="d-flex align-items-center gap-3 mb-3">
                  <CIcon icon={cilUser} size="xl" style={{ color: "#6610f2" }} />
                  <div>
                    <CCardTitle className="mb-0">{dev.nombre}</CCardTitle>
                    <small className="text-muted">{dev.rol}</small>
                  </div>
                </div>
                <CCardText style={{ fontSize: "0.9rem" }}>
                  {dev.descripcion}
                </CCardText>
              </CCardBody>
            </CCard>
          </CCol>
        ))}
      </CRow>

      <div className="text-center text-muted mt-5" style={{ fontSize: "0.9rem" }}>
        <CIcon icon={cilCode} className="me-2" />
        Proyecto académico desarrollado en la ESPOCH — Carrera de Ingeniería en Software
      </div>
    </div>
  );
};

export default NosotrosPage;
