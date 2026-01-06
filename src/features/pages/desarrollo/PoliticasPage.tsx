import { CCard, CCardBody, CCardText } from "@coreui/react";

const PoliticasPage = () => {
  return (
    <div className="p-3">
      <h4 className="mb-3 fw-semibold">Políticas de Uso y Protección de Datos</h4>

      <CCard className="mb-4">
        <CCardBody>
          <CCardText style={{ fontSize: "0.95rem" }}>
            Este sistema ha sido desarrollado con el objetivo de apoyar la gestión académica institucional de la ESPOCH, utilizando información sensible de estudiantes, personal docente y administrativo. Por ello, se establecen las siguientes políticas de uso:
          </CCardText>

          <ol style={{ fontSize: "0.9rem", lineHeight: "1.6" }}>
            <li>
              <strong>Confidencialidad de la información:</strong> El acceso a los datos está restringido a usuarios autorizados según su rol (administrador, usuario o invitado). Ninguna información personal debe ser divulgada o compartida sin autorización expresa.
            </li>
            <li>
              <strong>Propósito del uso de datos:</strong> Toda la información tratada en este sistema debe ser utilizada exclusivamente para fines de análisis, evaluación y mejora institucional.
            </li>
            <li>
              <strong>Seguridad de la plataforma:</strong> Se implementan mecanismos de autenticación y control de acceso a través de Supabase para proteger los datos almacenados y prevenir accesos no autorizados.
            </li>
            <li>
              <strong>Responsabilidad del usuario:</strong> Cada usuario es responsable de mantener la seguridad de sus credenciales y del uso adecuado de los datos a los que accede.
            </li>
            <li>
              <strong>Normativa institucional:</strong> El uso de este sistema se rige por la <a href="https://www.espoch.edu.ec/normativas" target="_blank" rel="noreferrer">Normativa de Gestión de la Información y Seguridad Institucional de la ESPOCH</a>, así como por el Modelo de Evaluación de la Calidad aprobado por el CACES.
            </li>
            <li>
              <strong>Protección de datos personales:</strong> Se observa el principio de minimización de datos, evitando el tratamiento de información personal no relevante para los indicadores académicos presentados.
            </li>
            <li>
              <strong>Registro de actividad:</strong> El sistema puede registrar acciones relevantes (modificación de perfiles, descargas, accesos) con fines de auditoría y trazabilidad.
            </li>
            <li>
              <strong>Prohibiciones:</strong> Está prohibido utilizar los datos con fines comerciales, de discriminación, manipulación o difusión no autorizada.
            </li>
          </ol>

          <CCardText className="mt-4" style={{ fontSize: "0.9rem" }}>
            Al hacer uso de esta plataforma, el usuario acepta estas condiciones y se compromete a cumplirlas conforme a las regulaciones institucionales y legales vigentes.
          </CCardText>
        </CCardBody>
      </CCard>

      <div className="text-center text-muted" style={{ fontSize: "0.85rem" }}>
        Última actualización: Enero 2026
      </div>
    </div>
  );
};

export default PoliticasPage;
