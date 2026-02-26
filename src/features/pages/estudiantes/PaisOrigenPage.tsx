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
import EmbedRenderer from '../../embeds/EmbedRenderer';

const PaisOrigenPage = () => {
  const [visible, setVisible] = useState(false);
  const [faq1, setFaq1] = useState(false);
  const [faq2, setFaq2] = useState(false);

  return (
    <div className="p-3">
      {/* Mini dashboard - Visualización principal */}
      <CCard className="mb-4">
        <CCardBody>
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '1600px', // Ajusta esto según el tamaño de tu dashboard real
              overflow: 'hidden',
              background: '#fff'
            }}
          >
            {/* Se asume que en el EmbedRenderer configuras el ID/Link correspondiente a Pais Origen */}
            <EmbedRenderer page="origen" />
            
            {/* Tapa footer Looker (Estético) */}
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                height: '30px',
                background: '#fff'
              }}
            />
          </div>
        </CCardBody>
      </CCard>

      {/* Tarjeta de Información Contextual */}
      <CCard className="mb-4">
        <CCardBody>
          <CCardText style={{ fontSize: '0.95rem' }}>
            Este panel visualiza la distribución geográfica y demográfica de la población estudiantil de la ESPOCH, clasificando a los estudiantes según su país de nacionalidad y residencia permanente.
          </CCardText>
          
          <div className="d-flex flex-wrap gap-2 mt-3">
            <CButton
              color="dark"
              variant="outline"
              onClick={() => window.open("https://www.espoch.edu.ec/", "_blank")}
            >
              Ver Portal Institucional
            </CButton>
            <CButton color="secondary" variant="outline" onClick={() => setVisible(!visible)}>
              Más información
            </CButton>
            {/* Se eliminó el botón de "Ver fórmula" ya que no aplica */}
          </div>

          <CCollapse visible={visible} className="mt-3">
            <hr className="mb-4" />
            <CRow>
              <CCol>
                <CCardText style={{ fontSize: '0.9rem' }}>
                  <strong>Contexto del Dashboard:</strong> Este reporte es fundamental para analizar la diversidad cultural dentro de la politécnica y medir el alcance de la institución a nivel internacional. Los datos permiten identificar patrones migratorios estudiantiles y apoyar estrategias de internacionalización y convenios.
                </CCardText>
              </CCol>
            </CRow>
            
            <hr className="mb-4" />
            
            {/* Sección Informativa (Reemplaza a los Estándares de Calidad) */}
            <CRow className="mb-5">
              <CCol md={4}>
                <CCard className="h-100 text-center">
                  <CCardBody className="d-flex flex-column justify-content-center">
                    <h5 className="fw-bold">Fuente de Datos</h5>
                    <h5 className="text-info">Sistema Académico YANKAY</h5>
                  </CCardBody>
                </CCard>
              </CCol>
              
              <CCol md={4}>
                <CCard className="h-100 text-center">
                  <CCardBody>
                    <h5 className="fw-bold mb-3">Dimensiones de Análisis</h5>
                    <CRow className="g-2">
                      <CCol xs={12}>
                        <div className="p-2 bg-light text-dark border rounded">
                          Nacionalidad
                        </div>
                      </CCol>
                      <CCol xs={12}>
                        <div className="p-2 bg-light text-dark border rounded">
                          Provincia
                        </div>
                      </CCol>
                      <CCol xs={12}>
                        <div className="p-2 bg-light text-dark border rounded">
                          País de Residencia
                        </div>
                      </CCol>
                    </CRow>
                  </CCardBody>
                </CCard>
              </CCol>

              <CCol md={4}>
                <CCard className="h-100 text-center">
                  <CCardBody className="d-flex flex-column justify-content-center">
                    <h5 className="fw-bold">Periodicidad de actualización</h5>
                    <h5 className="text-warning">Semestral</h5>
                  </CCardBody>
                </CCard>
              </CCol>
            </CRow>
          </CCollapse>
        </CCardBody>
      </CCard>

      {/* Enlaces de Interés */}
      <CCard className="mb-4">
        <CCardBody>
          <h6 className="mb-2">Documentación Relacionada</h6>
          <ul style={{ fontSize: '0.9rem' }}>
            <li>
              <a href="https://www.espoch.edu.ec/i-i/" target="_blank" rel="noreferrer">
                Dirección de Relaciones Nacionales e Internacionales (DRNI)
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
            ¿Por qué es importante este indicador?
          </CButton>
          <CCollapse visible={faq1} className="mb-2">
            <CAlert color="light" className="py-2">
              Permite a la ESPOCH conocer su alcance global y la diversidad de su comunidad, 
              facilitando la creación de programas de integración y soporte para estudiantes extranjeros.
            </CAlert>
          </CCollapse>

          <CButton color="link" className="px-0" onClick={() => setFaq2(!faq2)}>
            ¿Que estudiantes se incluyen en el indicador?
          </CButton>
          <CCollapse visible={faq2} className="mb-2">
            <CAlert color="light" className="py-2">
             El dashboard contempla tanto a estudiantes regulares matriculados en carreras de grado.
            </CAlert>
          </CCollapse>
        </CCardBody>
      </CCard>
    </div>
  );
};

export default PaisOrigenPage;