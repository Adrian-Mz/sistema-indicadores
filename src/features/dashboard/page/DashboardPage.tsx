import { CCard, CCardBody, CCardTitle, CCardText, CRow, CCol, CButton, CPopover } from "@coreui/react";
import { useNavigate } from "react-router-dom";

const indicadores = [
  {
    titulo: "Titulación",
    descripcion: "Porcentaje de estudiantes que se titularon en el tiempo esperado.",
    ruta: "/estudiantes/titulacion",
    formula: (
      <div>
        <strong>Tasa de Titulación = (NET / TE) × 100</strong><br />
        NET: Nº estudiantes que se titularon en el tiempo esperado<br />
        TE: Total estudiantes en primer nivel de la cohorte
      </div>
    ),
  },
  {
    titulo: "Deserción",
    descripcion: "Tasa de abandono estudiantil por cohorte.",
    ruta: "/estudiantes/desercion",
    formula: (
      <div>
        <strong>Deserción = (NEAi+δ / NEAi) × 100</strong><br />
        NEAi: Estudiantes que iniciaron en la cohorte i<br />
        NEAi+δ: Estudiantes que no continuaron en δ
      </div>
    ),
  },
  {
    titulo: "Afinidad del Personal",
    descripcion: "Relación entre formación y asignaturas dictadas.",
    ruta: "/personal/afinidad",
    formula: (
      <div>
        <strong>APA = (TAAF / TA) × 100</strong><br />
        TAAF: Asignaturas con docentes afines<br />
        TA: Total de asignaturas ofertadas
      </div>
    ),
  },
  {
    titulo: "Titularidad del Personal",
    descripcion: "Proporción de personal titular que dictó clases.",
    ruta: "/personal/titularidad",
    formula: (
      <div>
        <strong>TPP = (PP / TPA) × 100</strong><br />
        PP: Personal académico titular permanente<br />
        TPA: Total de personal académico
      </div>
    ),
  },
  {
    titulo: "Herramientas Pedagógicas",
    descripcion: "Evaluación del acceso y funcionalidad de herramientas.",
    ruta: "/soporte/herramientas",
    formula: (
      <div>
        <strong>HEP = [Σ(α1×FHP + α2×DHP + α3×AHP)] / NHP</strong><br />
        FHP: Funcionalidad<br />
        DHP: Disponibilidad<br />
        AHP: Accesibilidad<br />
        NHP: Nº total de herramientas
      </div>
    ),
  },
  {
    titulo: "Ambientes de Aprendizaje",
    descripcion: "Calidad de los ambientes educativos disponibles.",
    ruta: "/soporte/ambientes",
    formula: (
      <div>
        <strong>AP = Σ(FUN + EQI + DIS + ACC) / NAP</strong><br />
        FUN: Funcionalidad<br />
        EQI: Equipamiento<br />
        DIS: Disponibilidad<br />
        ACC: Accesibilidad<br />
        NAP: Nº ambientes
      </div>
    ),
  },
];

const DashboardPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2 className="mb-4">Panel de Indicadores Académicos</h2>
      <p className="text-muted mb-4" style={{ fontSize: "0.95rem" }}>
        Explora los indicadores clave relacionados con la formación académica, el personal docente y el soporte institucional.
        Pasa el cursor sobre <strong>"Ver fórmula"</strong> para conocer cómo se calcula cada indicador.
      </p>

      <CRow className="g-4">
        {indicadores.map((item) => (
          <CCol key={item.titulo} xs={12} md={6} xl={4}>
            <CCard className="h-100 shadow-sm">
              <CCardBody className="d-flex flex-column justify-content-between">
                <div>
                  <CCardTitle className="mb-2" style={{ fontSize: "1.1rem" }}>{item.titulo}</CCardTitle>
                  <CCardText style={{ fontSize: "0.9rem" }}>{item.descripcion}</CCardText>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <CButton color="primary" onClick={() => navigate(item.ruta)}>
                    Ver Indicador
                  </CButton>
                  <CPopover
                    content={item.formula}
                    placement="top"
                    trigger={['hover', 'focus']}
                  >
                    <CButton color="secondary" variant="outline" size="sm">
                      Ver fórmula
                    </CButton>
                  </CPopover>
                </div>
              </CCardBody>
            </CCard>
          </CCol>
        ))}
      </CRow>
    </div>
  );
};

export default DashboardPage;
