import {
  CCard,
  CCardBody,
  CCardText,
  CRow,
  CCol,
  CButton,
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
  const [showFormula, setShowFormula] = useState(false);
  const [faq1, setFaq1] = useState(false);
  const [faq2, setFaq2] = useState(false);

  return (
    <div className="p-3">
      {/* Dashboard */}
      <CCard className="mb-4">
        <CCardBody>
          <iframe
            src="https://lookerstudio.google.com/embed/reporting/8a001c22-6d69-420b-9bf0-a5c04089dabc/page/p_h3lb8xc8hd"
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
              <div className="d-flex justify-content-between gap-4" style={{ fontSize: '0.9rem' }}>
                <div className="flex-fill pe-3 border-end">
                  <strong>Tasa de personal académico con formación doctoral</strong>
                  <br />
                  <span>TPAFD = 100 × (TPhD / TP)</span>
                  <br />
                  <strong>Donde:</strong>
                  <ul className="mt-2">
                    <li><strong>TPAFD</strong>: Tasa de personal académico con formación doctoral.</li>
                    <li><strong>TPhD</strong>: Total de docentes con formación doctoral.</li>
                    <li><strong>TP</strong>: Total de docentes vinculados en el periodo.</li>
                  </ul>
                </div>
                <div className="flex-fill px-3 border-end">
                  <strong>Tasa de personal académico con dedicación a tiempo completo</strong>
                  <br />
                  <span>TPTC = 100 × (PTC / TP)</span>
                  <br />
                  <strong>Donde:</strong>
                  <ul className="mt-2">
                    <li><strong>TPTC</strong>: Tasa de docentes con dedicación a tiempo completo.</li>
                    <li><strong>PTC</strong>: Total de docentes a tiempo completo.</li>
                    <li><strong>TP</strong>: Total de docentes vinculados en el periodo.</li>
                  </ul>
                </div>
                <div className="flex-fill ps-3">
                  <strong>Tasa de personal académico titular (permanente)</strong>
                  <br />
                  <span>TPP = 100 × (PP / TPA)</span>
                  <br />
                  <strong>Donde:</strong>
                  <ul className="mt-2">
                    <li><strong>TPP</strong>: Tasa de permanencia del personal académico titular.</li>
                    <li><strong>PP</strong>: Total de docentes titulares permanentes durante el periodo.</li>
                    <li><strong>TPA</strong>: Total de docentes que dictaron clases en el periodo.</li>
                  </ul>
                </div>
              </div>
            </CCardText> 
          </CCollapse>

          <CCollapse visible={visible} className="mt-3">
            <hr className="mb-4" />
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
            <hr className="mb-4" />

            {/* Estandares clave */}
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
          </CCollapse>
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
