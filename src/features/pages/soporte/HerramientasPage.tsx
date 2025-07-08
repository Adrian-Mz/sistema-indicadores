import {
  CCard,
  CCardBody,
  CCardText,
  CRow,
  CCol,
  CButton,
  CCollapse,
  CAlert,
} from '@coreui/react'
import { useState } from 'react'

const HerramientasPage = () => {
  const [visible, setVisible] = useState(false)
  const [showFormula, setShowFormula] = useState(false);
  const [faq1, setFaq1] = useState(false)
  const [faq2, setFaq2] = useState(false)

  return (
    <div className="p-3">
      <h4 className="mb-3 fw-semibold">Herramientas Pedagógicas</h4>

      <CCard className="mb-4">
        <CCardBody>
          <CCardText style={{ fontSize: '0.95rem' }}>
            Este indicador evalúa las condiciones de funcionalidad, disponibilidad y accesibilidad de las herramientas pedagógicas necesarias para el desarrollo de las actividades académicas planificadas.
          </CCardText>

          <div className="d-flex flex-wrap gap-2 mt-3">
            <CButton
              color="dark"
              variant="outline"
              onClick={() =>
                window.open(
                  'https://www.espoch.edu.ec/wp-content/uploads/2025/05/Manual-de-Indicadores-Institucionales.pdf',
                  '_blank',
                )
              }
            >
              Ver Manual de Indicadores
            </CButton>

            <CButton color="secondary" variant="outline" onClick={() => setVisible(!visible)}>
              Más información
            </CButton>

            <CButton
              color="info"
              variant="outline"
              onClick={() => setShowFormula(!showFormula)}
            >
              {showFormula ? "Ocultar fórmula" : "Ver fórmula"}
            </CButton>
          </div>

          <CCollapse visible={showFormula} className="mt-3">
            <CCardText className="p-3">
              <strong>Fórmula:</strong>
              <br />
              <div style={{ fontSize: '0.9rem' }}>
                {`HEP = (1 / NHP) * Σ [α₁×FHPᵢ + α₂×DHPᵢ + α₃×AHPᵢ]`}<br />
                <strong>Donde:</strong><br />
                <ul className="mb-0">
                  <li><strong>HEP</strong>: Herramientas pedagógicas con condiciones de funcionalidad,disponibilidad y accesibilidad</li>
                  <li><strong>NHP</strong>: Número de herramientas pedagógicas</li>
                  <li><strong>FHPᵢ</strong>: Funcionalidad valorada en una escala entre [0, 1] de la 𝑖 − é𝑠𝑖𝑚𝑎 herramienta pedagógica</li>
                  <li><strong>DHPᵢ</strong>: Disponibilidad valorada en una escala entre [0, 1] de la 𝑖 − é𝑠𝑖𝑚𝑎 herramienta pedagógica.</li>
                  <li><strong>AHPᵢ</strong>: Accesibilidad valorada en una escala entre [0, 1] de la 𝑖 − é𝑠𝑖𝑚𝑎 herramientapedagógica.</li>
                  <li><strong>αⱼ</strong>: Peso asignado conforme al modelo específico por campo de conocimiento</li>
                </ul>
              </div>
            </CCardText>
          </CCollapse>

          <CCollapse visible={visible} className="mt-3">
            <hr className="mb-4" />
            <CRow>
              <CCol>
                <CCardText style={{ fontSize: '0.9rem' }}>
                  <strong>Definición extendida:</strong> El indicador permite verificar que las herramientas pedagógicas empleadas por las carreras (físicas o virtuales) estén en condiciones óptimas de uso. Evalúa la funcionalidad, disponibilidad y accesibilidad de estas herramientas como soporte al proceso de enseñanza-aprendizaje planificado institucionalmente.
                </CCardText>
              </CCol>
            </CRow>

            <hr className="mb-4" />
            {/* Estándares clave */}
            <CRow className="mb-5">
              <CCol md={4}>
                <CCard className="h-100 text-center">
                  <CCardBody className="d-flex flex-column justify-content-center">
                    <h5 className="fw-bold">Meta Institucional</h5>
                    <h5 className="text-success">70% hasta el año 2026</h5>
                  </CCardBody>
                </CCard>
              </CCol>

              <CCol md={4}>
                <CCard className="h-100 text-center">
                  <CCardBody>
                    <h5 className="fw-bold mb-3">Estándar del Indicador</h5>

                    <CRow className="g-2">
                      <CCol xs={12}>
                        <div className="p-2 bg-success text-white rounded">Satisfactorio: ≥ 70%</div>
                      </CCol>
                      <CCol xs={12}>
                        <div className="p-2 bg-primary text-white rounded">Cuasi satisfactorio: ≥ 50% y &lt; 70%</div>
                      </CCol>
                      <CCol xs={12}>
                        <div className="p-2 bg-warning text-dark rounded">Poco satisfactorio: ≥ 30% y &lt; 50%</div>
                      </CCol>
                      <CCol xs={12}>
                        <div className="p-2 bg-danger text-white rounded">Deficiente: &lt; 30%</div>
                      </CCol>
                    </CRow>
                  </CCardBody>
                </CCard>
              </CCol>

              <CCol md={4}>
                <CCard className="h-100 text-center">
                  <CCardBody className="d-flex flex-column justify-content-center">
                    <h5 className="fw-bold">Periodicidad del indicador</h5>
                    <h5 className="text-warning">Semestral</h5>
                  </CCardBody>
                </CCard>
              </CCol>
            </CRow>
          </CCollapse>
        </CCardBody>
      </CCard>

      {/* Mini dashboard */}
      <CCard className="mb-4">
        <CCardBody>
          <h6 className="mb-3 text-muted">Resumen gráfico</h6>
          <iframe
            src="https://lookerstudio.google.com/embed/reporting/9ae6f4e9-9742-404f-b630-246c4e0fffc4/page/p_h3lb8xc8hd"
            width="100%"
            height="1100"
            style={{ border: 0 }}
            allowFullScreen
            title="Indicador Herramientas Pedagógicas"
          ></iframe>
        </CCardBody>
      </CCard>

      {/* Documentos relacionados */}
      <CCard className="mb-4">
        <CCardBody>
          <h6 className="mb-2">Documentación útil</h6>
          <ul style={{ fontSize: '0.9rem' }}>
            <li>
              <a href="https://www.caces.gob.ec/wp-content/uploads/2023/12/Modelo-de-Evaluacio%CC%81n-Externa-UEP-2023-1.pdf" target="_blank" rel="noreferrer">
                Modelo de Evaluación Externa UEP 2023
              </a>
            </li>
            <li>
              <a href="https://www.espoch.edu.ec/wp-content/uploads/2025/05/Normativa-de-Gestion-de-Indicadores.pdf" target="_blank" rel="noreferrer">
                Normativa de Gestión de Indicadores Institucionales
              </a>
            </li>
          </ul>
        </CCardBody>
      </CCard>

      {/* Preguntas frecuentes */}
      <CCard>
        <CCardBody>
          <h6 className="mb-3">Preguntas frecuentes</h6>

          <CButton color="link" className="px-0" onClick={() => setFaq1(!faq1)}>
            ¿Qué se entiende por herramienta pedagógica?
          </CButton>
          <CCollapse visible={faq1} className="mb-2">
            <CAlert color="light" className="py-2">
              Se refiere a cualquier recurso (físico o digital) que apoya el proceso educativo: simuladores, software, laboratorios, plataformas virtuales, entre otros.
            </CAlert>
          </CCollapse>

          <CButton color="link" className="px-0" onClick={() => setFaq2(!faq2)}>
            ¿Qué criterios se usan para evaluar las herramientas?
          </CButton>
          <CCollapse visible={faq2} className="mb-2">
            <CAlert color="light" className="py-2">
              Se considera su funcionalidad (si cumple su propósito), disponibilidad (si está accesible para docentes y estudiantes) y accesibilidad (facilidad de uso y acceso).
            </CAlert>
          </CCollapse>
        </CCardBody>
      </CCard>
    </div>
  )
}

export default HerramientasPage
