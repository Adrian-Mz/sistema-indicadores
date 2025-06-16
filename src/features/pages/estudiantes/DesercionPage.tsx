import {
  CCard,
  CCardBody,
  CCardText,
  CRow,
  CCol,
  CButton,
  CAlert
} from '@coreui/react';
import { useState } from 'react';

const DesercionPage = () => {
  const [faq1, setFaq1] = useState(false);
  const [faq2, setFaq2] = useState(false);

  return (
    <div className="p-3">
      <h4 className="mb-3 fw-semibold">Tasa de Deserción y Retención</h4>

      <CCard className="mb-4">
        <CCardBody>
          <CCardText style={{ fontSize: '0.95rem' }}>
            Estos indicadores permiten conocer el porcentaje de estudiantes que abandonan sus estudios y, por el contrario, aquellos que continúan dentro del sistema educativo institucional.
          </CCardText>

          <div className="d-flex flex-wrap gap-2 mt-3">
            <CButton
              color="dark"
              variant="outline"
              onClick={() =>
                window.open(
                  'https://www.espoch.edu.ec/wp-content/uploads/2025/05/Manual-de-Indicadores-Institucionales.pdf',
                  '_blank'
                )
              }
            >
              Ver Manual de Indicadores
            </CButton>
          </div>
        </CCardBody>
      </CCard>

      {/* Estándar Deserción */}
      <h5 className="fw-bold mb-3 text-muted">Indicador: Deserción</h5>
      <CRow className="mb-4">
        <CCol md={4}>
          <CCard className="h-100 text-center">
            <CCardBody className="d-flex flex-column justify-content-center">
              <h5 className="fw-bold">Meta Deserción</h5>
              <h6 className="text-success">Entre 14% y 18% en 2 años</h6>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol md={4}>
          <CCard className="h-100 text-center">
            <CCardBody>
              <h5 className="fw-bold mb-3">Estándar de Deserción</h5>
              <CRow className="g-2">
                <CCol xs={12}>
                  <div className="p-2 bg-success text-white rounded">Satisfactorio: ≤ 14%</div>
                </CCol>
                <CCol xs={12}>
                  <div className="p-2 bg-primary text-white rounded">Cuasi satisfactorio: &gt; 14% y ≤ 18%</div>
                </CCol>
                <CCol xs={12}>
                  <div className="p-2 bg-warning text-dark rounded">Poco satisfactorio: &gt; 18% y ≤ 23%</div>
                </CCol>
                <CCol xs={12}>
                  <div className="p-2 bg-danger text-white rounded">Deficiente: &gt; 23%</div>
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol md={4}>
          <CCard className="h-100 text-center">
            <CCardBody className="d-flex flex-column justify-content-center">
              <h5 className="fw-bold">Periodicidad del indicador</h5>
              <h6 className="text-warning">Semestral</h6>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

      <hr className="mb-4" />

      {/* Estándar Retención */}
      <h5 className="fw-bold mb-3 text-muted">Indicador: Retención</h5>
      <CRow className="mb-4">
        <CCol md={6}>
          <CCard className="h-100 text-center">
            <CCardBody className="d-flex flex-column justify-content-center">
              <h5 className="fw-bold">Meta Retención</h5>
              <h6 className="text-success">Igual o superior al 86%</h6>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol md={6}>
          <CCard className="h-100 text-center">
            <CCardBody className="d-flex flex-column justify-content-center">
              <h5 className="fw-bold">Periodicidad del indicador</h5>
              <h6 className="text-warning">Semestral</h6>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

      {/* Mini dashboard */}
      <CCard className="mb-4">
        <CCardBody>
          <h6 className="mb-3 text-muted">Resumen gráfico</h6>
          <iframe
            src="https://lookerstudio.google.com/embed/reporting/37ff9579-c3ca-4b5f-849c-9f85c75d09ab/page/p_h3lb8xc8hd"
            width="100%"
            height="1100"
            style={{ border: 0 }}
            allowFullScreen
          ></iframe>
        </CCardBody>
      </CCard>

      {/* Documentación */}
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
            ¿Cómo se calcula la deserción en el segundo año?
          </CButton>
          <CAlert color="light" className={`py-2 ${faq1 ? "d-block" : "d-none"}`}>
            Se considera a los estudiantes que no se encuentran matriculados al segundo año de su cohorte de ingreso.
          </CAlert>

          <CButton color="link" className="px-0" onClick={() => setFaq2(!faq2)}>
            ¿Por qué es importante la retención estudiantil?
          </CButton>
          <CAlert color="light" className={`py-2 ${faq2 ? "d-block" : "d-none"}`}>
            Una alta tasa de retención refleja la permanencia del estudiante y la efectividad de los programas de acompañamiento institucional.
          </CAlert>
        </CCardBody>
      </CCard>
    </div>
  );
};

export default DesercionPage;
