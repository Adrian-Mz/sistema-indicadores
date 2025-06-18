import {
  CCard,
  CCardBody,
  CCardTitle,
  CCardText,
  CRow,
  CCol,
} from "@coreui/react";
import { motion } from "framer-motion";
import CIcon from "@coreui/icons-react";
import {
  cilChartLine,
  cilSearch,
  cilLightbulb,
  cilCursor,
  cilUser,
  cilEducation,
  cilPuzzle,
} from "@coreui/icons";

const acciones = [
  {
    titulo: "Explorar Indicadores",
    descripcion: "Accede a métricas clave sobre titulados, deserción, afinidad docente y más.",
    icon: cilChartLine,
  },
  {
    titulo: "Analizar Tendencias",
    descripcion: "Observa la evolución temporal del desempeño académico e institucional.",
    icon: cilSearch,
  },
  {
    titulo: "Apoyar Decisiones",
    descripcion: "Consulta datos objetivos para respaldar decisiones administrativas.",
    icon: cilLightbulb,
  },
  {
    titulo: "Navegación Intuitiva",
    descripcion: "Interactúa con un entorno amigable y claro para todo tipo de usuario.",
    icon: cilCursor,
  },
];

const indicadores = [
  { nombre: "Afinidad del Personal", icon: cilUser },
  { nombre: "Titularidad del Personal", icon: cilUser },
  { nombre: "Titulación", icon: cilEducation },
  { nombre: "Deserción y Retención", icon: cilEducation },
  { nombre: "Herramientas Pedagógicas", icon: cilPuzzle },
  { nombre: "Ambientes de Aprendizaje", icon: cilPuzzle },
];

const DashboardPage = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
      <h2 className="mb-4 text-center">Bienvenido al Sistema de Indicadores Académicos</h2>
      <p className="text-muted text-center mb-4" style={{ maxWidth: 800, margin: "0 auto" }}>
        Este sistema permite visualizar, analizar y respaldar decisiones con base en datos académicos e institucionales de la ESPOCH.
        Descubre sus funcionalidades principales a continuación.
      </p>

      <CRow className="g-4 mb-5">
        {acciones.map((item, index) => (
          <CCol key={item.titulo} xs={12} md={6} xl={3}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
            >
              <CCard className="h-100 shadow-sm border-0 text-center">
                <CCardBody>
                  <div className="mb-3">
                    <CIcon icon={item.icon} size="xxl" style={{ color: "#6610f2" }} />
                  </div>
                  <CCardTitle style={{ fontSize: "1.1rem" }}>{item.titulo}</CCardTitle>
                  <CCardText style={{ fontSize: "0.9rem" }}>{item.descripcion}</CCardText>
                </CCardBody>
              </CCard>
            </motion.div>
          </CCol>
        ))}
      </CRow>

      <p className="text-muted text-center mb-3">
        Puedes acceder a los indicadores desde el menú lateral. A continuación se listan los indicadores disponibles:
      </p>

      <CRow className="justify-content-center g-4 mb-4">
        {indicadores.map((item, index) => (
          <CCol key={index} xs={12} sm={6} md={4} lg={3}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <CCard className="h-100 border-0 shadow-sm text-center">
                <CCardBody>
                  <div className="mb-2">
                    <CIcon icon={item.icon} size="xl" style={{ color: "#6f42c1" }} />
                  </div>
                  <CCardText style={{ fontWeight: 500 }}>{item.nombre}</CCardText>
                </CCardBody>
              </CCard>
            </motion.div>
          </CCol>
        ))}
      </CRow>
      <hr className="mb-4" />
      
      <div className="text-center text-muted mt-3 mb-4" style={{ fontSize: "0.9rem" }}>
        Escuela Superior Politécnica de Chimborazo — Carrera de Ingeniería en Software
      </div>
    </motion.div>
  );
};

export default DashboardPage;
