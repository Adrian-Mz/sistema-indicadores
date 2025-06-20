import { CCard, CCardBody, CCardTitle, CCardText, CRow, CCol, CButton } from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilCloudDownload, cilGraph } from "@coreui/icons";

const fuentes = [
  {
    nombre: "Fuente Titulación",
    descripcion: "Contendrá los datos brutos utilizados para calcular la tasa de titulación por cohorte.",
    indicador: "Titulación",
    disponible: false,
  },
  {
    nombre: "Fuente Deserción",
    descripcion: "Datos relacionados a la permanencia, abandono y retención estudiantil.",
    indicador: "Deserción y Retención",
    disponible: false,
  },
  {
    nombre: "Fuente Personal Académico",
    descripcion: "Datos relacionados con la calidad, estabilidad y dedicación del personal académico.",
    indicador: "Afinidad del Personal",
    disponible: false,
  },
  {
    nombre: "Fuente Herramientas",
    descripcion: "Evaluación de funcionalidad, disponibilidad y accesibilidad de herramientas pedagógicas.",
    indicador: "Herramientas Pedagógicas",
    disponible: false,
  },
  {
    nombre: "Fuente Ambientes",
    descripcion: "Información sobre el estado de aulas, laboratorios, talleres y otros ambientes educativos.",
    indicador: "Ambientes de Aprendizaje",
    disponible: false,
  },
];

const FuentesPage = () => {
  return (
    <div className="p-3">
      <h4 className="mb-3 fw-semibold">Fuentes de Datos de Indicadores</h4>
      <p className="text-muted" style={{ maxWidth: 750 }}>
        A continuación se listan las fuentes de datos asociadas a los indicadores institucionales. Estas contienen los datos utilizados en los dashboards. Actualmente, no están disponibles para descarga, pero podrás acceder a ellas próximamente.
      </p>

      <CRow className="g-4 mt-2">
        {fuentes.map((fuente, index) => (
          <CCol key={index} xs={12} md={6} xl={4}>
            <CCard className="h-100 shadow-sm border-0">
              <CCardBody>
                <div className="d-flex align-items-center mb-3 gap-2">
                  <CIcon icon={cilGraph} style={{ fontSize: "1.4rem", color: "#6610f2" }} />
                  <CCardTitle className="m-0">{fuente.indicador}</CCardTitle>
                </div>
                <CCardText style={{ fontSize: "0.9rem" }}>{fuente.descripcion}</CCardText>

                <div className="mt-3 d-flex justify-content-end">
                  <CButton
                    color="primary"
                    variant="ghost"
                    disabled={!fuente.disponible}
                    title={fuente.disponible ? "Descargar fuente" : "Próximamente"}
                  >
                    <CIcon icon={cilCloudDownload} className="me-2" />
                    Descargar
                  </CButton>
                </div>
              </CCardBody>
            </CCard>
          </CCol>
        ))}
      </CRow>
    </div>
  );
};

export default FuentesPage;
