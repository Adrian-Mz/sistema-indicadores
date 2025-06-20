import {
  CCard,
  CCardBody,
  CCardText,
  CRow,
  CCol,
  CButton,
  CPopover,
  CAlert,
  CCollapse,
  CTable,
  CTableHead,
  CTableBody,
  CTableRow,
  CTableHeaderCell,
  CTableDataCell
} from '@coreui/react';
import { useState } from 'react';

const DocenciaPage = () => {
  const [visible, setVisible] = useState(false);
  const [faq1, setFaq1] = useState(false);
  const [faq2, setFaq2] = useState(false);

  return (
    <div className="p-3">
      <h4 className="mb-3 fw-semibold">Indicadores de Docencia del Personal Académico</h4>

      <CCard className="mb-4">
        <CCardBody>
          <CCardText style={{ fontSize: '0.95rem' }}>
            Este conjunto de indicadores permite evaluar la calidad, estabilidad y dedicación del personal académico en la institución, abordando tres ejes: formación doctoral, tiempo completo y nombramiento permanente.
          </CCardText>

          <div className="d-flex flex-wrap gap-2 mt-3">
            <CButton
              color="dark"
              variant="outline"
              onClick={() =>
                window.open("https://www.espoch.edu.ec/wp-content/uploads/2025/05/Manual-de-Indicadores-Institucionales.pdf", "_blank")
              }
            >
              Ver Manual de Indicadores
            </CButton>

            <CButton color="secondary" variant="outline" onClick={() => setVisible(!visible)}>
              Más información
            </CButton>

            <CPopover
              content={
                <div>
                  <strong>Fórmula: Formación Doctoral</strong><br />
                  (N° docentes con PhD / Total de docentes) × 100

                  <hr className="mb-4" />

                  <strong>Fórmula: Dedicación a Tiempo Completo</strong><br />
                  (N° docentes con dedicación TC en todos los periodos / Total de docentes) × 100

                  <hr className="mb-4" />

                  <strong>Fórmula: Titularidad (Permanente)</strong><br />
                  (N° docentes con nombramiento titular / Total de docentes) × 100
                </div>
              }
              placement="right"
              trigger={['hover', 'focus']}
            >
              <CButton color="info" variant="outline">Ver fórmulas</CButton>
            </CPopover>
          </div>

          <CCollapse visible={visible} className="mt-3">
            <CRow>
              <CCol>
                <CCardText style={{ fontSize: '0.9rem' }}>
                  <strong>Formación Doctoral: </strong>
                    Expresa la relación del número de profesores
                    con formación doctoral, con el número
                    del total del personal académico
                    vinculado en el período de evaluación.
                  <hr className="mb-4" />
                  <strong>Dedicación a Tiempo Completo: </strong>
                    Expresa la
                    relación del número de profesores con
                    dedicación a tiempo completo, con el
                    número del total del personal académico
                    vinculado en la institución en el período de
                    evaluación
                  <hr className="mb-4" />
                  <strong>Titularidad (Permanente): </strong>
                    Expresa la
                    relación entre el Total del personal
                    académico titular que dictó clases
                    permanentemente; y, el Total del personal
                    académico que dictó clases en el período
                    de evaluación.
                </CCardText>
              </CCol>
            </CRow>
          </CCollapse>
        </CCardBody>
      </CCard>

      {/* Indicadores metas, estándares y periodicidad */}
      <h5 className="mt-4 mb-2 text-muted">Indicador: Formación Doctoral</h5>
      <CCard className="mb-4">
        <CCardBody>
          <CTable hover bordered >
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell scope="col">Indicador</CTableHeaderCell>
                <CTableHeaderCell scope="col">Meta</CTableHeaderCell>
                <CTableHeaderCell scope="col">Estandar</CTableHeaderCell>
                <CTableHeaderCell scope="col">Periodicidad</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              <CTableRow>
                <CTableHeaderCell scope="row">Formación Doctoral</CTableHeaderCell>
                <CTableDataCell>≥ 20%</CTableDataCell>
                <CTableDataCell>
                  <ul className="mb-0 ps-3">
                    <li><strong>Satisfactorio:</strong> ≥ 20%</li>
                    <li><strong>Cuasi satisfactorio:</strong> ≥ 13% y &lt; 20%</li>
                    <li><strong>Poco satisfactorio:</strong> ≥ 7% y &lt; 13%</li>
                    <li><strong>Deficiente:</strong> &lt; 7% o sin doctorado</li>
                  </ul>
                </CTableDataCell>
                <CTableDataCell>Semestral</CTableDataCell>
              </CTableRow>

              <CTableRow>
                <CTableHeaderCell scope="row">Dedicación a Tiempo Completo</CTableHeaderCell>
                <CTableDataCell>≥ 50%</CTableDataCell>
                <CTableDataCell>
                  <ul className="mb-0 ps-3">
                    <li><strong>Satisfactorio:</strong> ≥ 50% en todos los periodos</li>
                    <li><strong>Deficiente:</strong> &lt; 50% en algún periodo</li>
                  </ul>
                </CTableDataCell>
                <CTableDataCell>Semestral</CTableDataCell>
              </CTableRow>

              <CTableRow>
                <CTableHeaderCell scope="row">Titularidad (Permanente)</CTableHeaderCell>
                <CTableDataCell>≥ 35%</CTableDataCell>
                <CTableDataCell>
                  <ul className="mb-0 ps-3">
                    <li><strong>Aceptable:</strong> 25%–39%</li>
                    <li><strong>Alto:</strong> ≥ 40%</li>
                    <li><strong>Bajo:</strong> &lt; 25%</li>
                  </ul>
                </CTableDataCell>
                <CTableDataCell>Semestral</CTableDataCell>
              </CTableRow>
            </CTableBody>
          </CTable>
        </CCardBody>
      </CCard>

      {/* Dashboard */}
      <CCard className="mb-4">
        <CCardBody>
          <h6 className="mb-3 text-muted">Resumen gráfico</h6>
          <iframe
            src="https://lookerstudio.google.com/embed/reporting/88797ffa-370b-4ec4-bf16-ede0d626d3d2/page/p_h3lb8xc8hd"
            width="100%"
            height="1100"
            style={{ border: 0 }}
            allowFullScreen
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

      {/* FAQ */}
      <CCard>
        <CCardBody>
          <h6 className="mb-3">Preguntas frecuentes</h6>

          <CButton color="link" className="px-0" onClick={() => setFaq1(!faq1)}>
            ¿Cuáles son los beneficios de tener docentes con PhD?
          </CButton>
          <CAlert color="light" className={`py-2 ${faq1 ? "d-block" : "d-none"}`}>
            Aportan con investigación avanzada, redes académicas y elevan la calidad educativa institucional.
          </CAlert>

          <CButton color="link" className="px-0" onClick={() => setFaq2(!faq2)}>
            ¿Por qué es clave el nombramiento permanente?
          </CButton>
          <CAlert color="light" className={`py-2 ${faq2 ? "d-block" : "d-none"}`}>
            Permite planificación sostenida, mejora la continuidad institucional y fortalece las funciones docentes.
          </CAlert>
        </CCardBody>
      </CCard>
    </div>
  );
};

export default DocenciaPage;
