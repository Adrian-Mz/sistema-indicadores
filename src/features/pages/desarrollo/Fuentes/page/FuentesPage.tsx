import {
  CCard,
  CCardBody,
  CCardText,
  CRow,
  CCol,
  CButton,
  CContainer
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilCloudDownload, cilGraph } from "@coreui/icons";

import FuenteTitulacion from "../components/FuenteTitulacion";
import FuenteRetencion from "../components/FuenteRetencion";

// Diccionario de componentes disponibles
const componentesFuentes: Record<string, React.FC> = {
  "Titulación": FuenteTitulacion,
  "Deserción y Retención": FuenteRetencion,
};

const fuentes = [
  {
    nombre: "Fuente Titulación",
    descripcion:
      "Contiene los datos utilizados para calcular la tasa de titulación por cohorte.",
    indicador: "Titulación",
    disponible: true,
  },
  {
    nombre: "Fuente Deserción",
    descripcion:
      "Datos relacionados a la permanencia, abandono y retención estudiantil.",
    indicador: "Deserción y Retención",
    disponible: true,
  },
  {
    nombre: "Fuente Personal Académico",
    descripcion:
      "Datos relacionados con la calidad, estabilidad y dedicación del personal académico.",
    indicador: "Personal Académico",
    disponible: false,
  },
  {
    nombre: "Fuente Herramientas",
    descripcion:
      "Evaluación de funcionalidad, disponibilidad y accesibilidad de herramientas pedagógicas.",
    indicador: "Herramientas Pedagógicas",
    disponible: false,
  },
  {
    nombre: "Fuente Ambientes",
    descripcion:
      "Información sobre el estado de aulas, laboratorios, talleres y otros ambientes educativos.",
    indicador: "Ambientes de Aprendizaje",
    disponible: false,
  },
];

const FuentesPage = () => {
  return (
    <CContainer className="py-4">
      <h4 className="fw-semibold mb-3">Fuentes de Datos de Indicadores</h4>
      <p className="text-muted" style={{ maxWidth: 800 }}>
        A continuación se listan las fuentes de datos asociadas a los indicadores institucionales. Estas contienen los datos utilizados en los dashboards. Puedes descargar las disponibles y filtrar según tu necesidad.
      </p>

      <div className="mt-4">
        {fuentes.map((fuente, index) => {
          const ComponenteFuente = componentesFuentes[fuente.indicador];

          if (ComponenteFuente && fuente.disponible) {
            return (
              <div key={index} className="mb-5">
                <ComponenteFuente />
              </div>
            );
          }

          return (
            <CCard key={index} className="mb-4 shadow-sm border-0">
              <CCardBody>
                <CRow className="align-items-center">
                  <CCol xs={12} md={2} className="text-md-start text-center mb-3 mb-md-0">
                    <CIcon icon={cilGraph} style={{ fontSize: "2rem", color: "#6610f2" }} />
                    <h6 className="fw-bold mt-2">{fuente.indicador}</h6>
                  </CCol>

                  <CCol xs={12} md={8}>
                    <CCardText className="text-muted" style={{ fontSize: "0.95rem" }}>
                      {fuente.descripcion}
                    </CCardText>
                  </CCol>

                  <CCol xs={12} md={2} className="text-md-end text-center mt-3 mt-md-0">
                    <CButton
                      color="primary"
                      variant="outline"
                      disabled={!fuente.disponible}
                      title={fuente.disponible ? "Descargar fuente" : "Próximamente"}
                    >
                      <CIcon icon={cilCloudDownload} className="me-2" />
                      Descargar
                    </CButton>
                  </CCol>
                </CRow>
              </CCardBody>
            </CCard>
          );
        })}
      </div>
    </CContainer>
  );
};

export default FuentesPage;
