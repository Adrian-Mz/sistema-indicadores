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

const AmbientesPage = () => {
  const [visible, setVisible] = useState(false)
  const [showFormula, setShowFormula] = useState(false)
  const [faq1, setFaq1] = useState(false)
  const [faq2, setFaq2] = useState(false)

  return (
    <div className="p-3">
      <h4 className="mb-3 fw-semibold">Ambientes de Aprendizaje</h4>

      <CCard className="mb-4">
        <CCardBody>
          <CCardText style={{ fontSize: '0.95rem' }}>
            Este indicador evalúa las condiciones de los ambientes de aprendizaje donde la carrera desarrolla sus actividades, tales como aulas, laboratorios, centros de simulación y talleres. Se busca que estén en condiciones adecuadas para garantizar el cumplimiento de los objetivos académicos.
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
                {`AP = (1 / NAP) * Σ [FUNᵢ + EQIᵢ + DISᵢ + ACCᵢ]`}<br />
                <strong>Donde:</strong>
                <ul>
                  <li><strong>AP</strong>: Ambientes de aprendizaje que utiliza la carrera.</li>
                  <li><strong>NAP</strong>: Número de ambientes de aprendizaje.</li>
                  <li><strong>FUNᵢ</strong>: Valoración obtenida en una escala de [0,1] sobre la <em>funcionalidad</em> del <em>i–ésimo</em> ambiente de aprendizaje.</li>
                  <li><strong>EQIᵢ</strong>: Valoración obtenida en una escala de [0,1] sobre el <em>equipamiento</em> del <em>i–ésimo</em> ambiente de aprendizaje.</li>
                  <li><strong>DISᵢ</strong>: Valoración obtenida en una escala de [0,1] sobre la <em>disponibilidad</em> del <em>i–ésimo</em> ambiente de aprendizaje.</li>
                  <li><strong>ACCᵢ</strong>: Valoración obtenida en una escala de [0,1] sobre la <em>accesibilidad</em> del <em>i–ésimo</em> ambiente de aprendizaje.</li>
                </ul>
              </div>
            </CCardText> 
          </CCollapse>

          <CCollapse visible={visible} className="mt-3">
            <hr className="mb-4" />
            <CRow>
              <CCol>
                <CCardText style={{ fontSize: '0.9rem' }}>
                  <strong>Definición extendida:</strong> El indicador refleja el grado de adecuación de los espacios físicos o virtuales utilizados por las carreras para actividades de enseñanza-aprendizaje. Evalúa la funcionalidad, equipamiento, disponibilidad y accesibilidad de dichos ambientes.
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
                    <h5 className="text-success">70% de ambientes físicos hasta el 2026</h5>
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
            src="https://lookerstudio.google.com/embed/reporting/41c61f4a-7bba-4841-ba10-36afe294ed82/page/p_h3lb8xc8hd"
            width="100%"
            height="1000"
            style={{ border: 0 }}
            allowFullScreen
            title="Indicador Ambientes de Aprendizaje"
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
            ¿Qué se considera un ambiente de aprendizaje?
          </CButton>
          <CCollapse visible={faq1} className="mb-2">
            <CAlert color="light" className="py-2">
              Se refiere a espacios como aulas, laboratorios, talleres, simuladores, etc., donde se llevan a cabo actividades académicas y pedagógicas.
            </CAlert>
          </CCollapse>

          <CButton color="link" className="px-0" onClick={() => setFaq2(!faq2)}>
            ¿Cuáles son los criterios de evaluación?
          </CButton>
          <CCollapse visible={faq2} className="mb-2">
            <CAlert color="light" className="py-2">
              Se mide la funcionalidad, el nivel de equipamiento, la disponibilidad real para su uso y la accesibilidad de cada ambiente.
            </CAlert>
          </CCollapse>
        </CCardBody>
      </CCard>
    </div>
  )
}

export default AmbientesPage
