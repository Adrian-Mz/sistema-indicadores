import {
  CCard,
  CCardBody,
  CCardText,
  CRow,
  CCol,
  CButton,
  CCollapse,
  CAlert,
} from '@coreui/react';
import { useState } from 'react';

const TitulacionPage = () => {
  const [visible, setVisible] = useState(false);
  const [showFormula, setShowFormula] = useState(false);
  const [faq1, setFaq1] = useState(false);
  const [faq2, setFaq2] = useState(false);

  return (
    <div className="p-3">
      {/* Mini dashboard */}
      <CCard className="mb-4">
        <CCardBody>
          <iframe
            src="https://lookerstudio.google.com/embed/reporting/f0b37fd1-e8d9-43de-a6b7-4c84b13b07cc/page/p_h3lb8xc8hd"
            width="100%"
            height="1400"
            style={{ border: 0 }}
            allowFullScreen
          ></iframe>
        </CCardBody>
      </CCard>

      <CCard className="mb-4">
        <CCardBody>
          <CCardText style={{ fontSize: '0.95rem' }}>
            Este indicador mide el porcentaje de estudiantes que culminan su formación académica obteniendo un título profesional.
          </CCardText>

          <div className="d-flex flex-wrap gap-2 mt-3">
            <CButton
              color="dark"
              variant="outline"
              onClick={() => window.open("https://www.espoch.edu.ec/wp-content/uploads/2025/05/Manual-de-Indicadores-Institucionales.pdf", "_blank")}
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
                  {`TTI = 100 × (1 / n) × Σ (NEGTᵢ / TEGᵢ)`}
                  <br />
                  <strong>Donde:</strong>
                  <ul>
                    <li><strong>TTI</strong>: Tasa promedio de titulación institucional.</li>
                    <li><strong>n</strong>: Número de cohortes del periodo evaluado.</li>
                    <li><strong>NEGTᵢ</strong>: Estudiantes que se titularon en tiempo + 1 periodo de gracia en la <i>i-ésima</i> cohorte.</li>
                    <li><strong>TEGᵢ</strong>: Total de estudiantes admitidos en la <i>i-ésima</i> cohorte.</li>
                  </ul>
                </div>
              </CCardText>
            </CCollapse>

          <CCollapse visible={visible} className="mt-3">
            <hr className="mb-4" />
            <CRow>
              <CCol>
                <CCardText style={{ fontSize: '0.9rem' }}>
                  <strong>Definición extendida:</strong> Este indicador permite evaluar la eficiencia terminal de los programas académicos. Se calcula considerando el número de estudiantes que culminan su carrera con titulación, en comparación con el total de estudiantes ingresados en un periodo determinado, dentro del tiempo teórico de duración más dos periodos de gracia.
                </CCardText>
              </CCol>
            </CRow>

            <hr className="mb-4" />
            {/* Estandares clave */}
            <CRow className="mb-5">
              <CCol md={4}>
                <CCard className="h-100 text-center">
                  <CCardBody className="d-flex flex-column justify-content-center">
                    <h5 className="fw-bold">Meta Institucional</h5>
                    <h5 className="text-success">Entre 33% y 50% en los próximos años</h5>
                  </CCardBody>
                </CCard>
              </CCol>

              <CCol md={4}>
                <CCard className="h-100 text-center">
                  <CCardBody>
                    <h5 className="fw-bold mb-3">Estándar de Titulación</h5>

                    <CRow className="g-2">
                      <CCol xs={12}>
                        <div className="p-2 bg-success text-white rounded">
                          Satisfactorio: ≥ 50%
                        </div>
                      </CCol>
                      <CCol xs={12}>
                        <div className="p-2 bg-primary text-white rounded">
                          Cuasi satisfactorio: ≥ 33% y &lt; 50%
                        </div>
                      </CCol>
                      <CCol xs={12}>
                        <div className="p-2 bg-warning text-dark rounded">
                          Poco satisfactorio: ≥ 16% y &lt; 33%
                        </div>
                      </CCol>
                      <CCol xs={12}>
                        <div className="p-2 bg-danger text-white rounded">
                          Deficiente: &lt; 16%
                        </div>
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

      {/* Enlaces a reglamentos */}
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
                Normativa de Indicadores Institucionales
              </a>
            </li>
          </ul>
        </CCardBody>
      </CCard>

      {/* FAQ */}
      <CCard>
        <CCardBody>
          <h6 className="mb-3">Preguntas frecuentes</h6>

          <CButton color="link" className="px-0" onClick={() => setFaq1(!faq1)}>
            ¿Qué es una cohorte académica?
          </CButton>
          <CCollapse visible={faq1} className="mb-2">
            <CAlert color="light" className="py-2">
              Grupo de estudiantes que ingresan en el mismo período 
              académico y avanzan juntos en su malla curricular. 
              Se identifican por su año de admisión
            </CAlert>
          </CCollapse>

          <CButton color="link" className="px-0" onClick={() => setFaq2(!faq2)}>
            ¿Qué es el periodo de gracia?
          </CButton>
          <CCollapse visible={faq2} className="mb-2">
            <CAlert color="light" className="py-2">
              Tiempo adicional concedido después de finalizar los estudios para realizar trámites de 
              titulación sin pagar matrícula. En la ESPOCH, 
              suele ser de 6 meses a 1 año (varía por carrera).
            </CAlert>
          </CCollapse>
        </CCardBody>
      </CCard>
    </div>
  );
};

export default TitulacionPage;
