import { useParams } from "react-router-dom";
import { CCard, CCardBody, CCardTitle, CAlert } from "@coreui/react";

const dashboardsPorFacultad: Record<string, { nombre: string; url: string }> = {
  "administracion-de-empresas": {
    nombre: "ADMINISTRACIÓN DE EMPRESAS",
    url: "https://lookerstudio.google.com/embed/reporting/d44cbefb-bfe7-44c2-bf82-e14932dc206f/page/p_h3lb8xc8hd",
  },
  "ciencias": {
    nombre: "CIENCIAS",
    url: "https://lookerstudio.google.com/embed/reporting/bb894f0c-e073-4ec4-b58f-3472ae673c1e/page/p_h3lb8xc8hd",
  },
  "ciencias-pecuarias": {
    nombre: "CIENCIAS PECUARIAS",
    url: "https://lookerstudio.google.com/embed/reporting/c212c75b-0170-4a8f-ad5a-c829dce01838/page/p_h3lb8xc8hd",
  },
  "informatica-y-electronica": {
    nombre: "INFORMÁTICA Y ELECTRÓNICA",
    url: "https://lookerstudio.google.com/embed/reporting/2ebc02b2-ac07-4d8a-ab13-0923a5942528/page/p_h3lb8xc8hd",
  },
  "mecanica": {
    nombre: "MECÁNICA",
    url: "https://lookerstudio.google.com/embed/reporting/ef256761-d15e-460c-9b7f-62c77af797ff/page/p_h3lb8xc8hd",
  },
  "recursos-naturales": {
    nombre: "RECURSOS NATURALES",
    url: "https://lookerstudio.google.com/embed/reporting/e2e0b830-e141-4641-bf0d-8610a048b0db/page/p_h3lb8xc8hd",
  },
  "salud-publica": {
    nombre: "SALUD PÚBLICA",
    url: "https://lookerstudio.google.com/embed/reporting/7aaaf1c5-305f-41af-9fbb-0ed1a42376bf/page/p_h3lb8xc8hd",
  },
};

// ✅ Elimina acentos/tildes y pone en minúsculas
const normalizarSlug = (slug: string) =>
  slug.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

const DashboardFacultadPage = () => {
  const { slug } = useParams();
  const dashboard = dashboardsPorFacultad[normalizarSlug(slug || "")];

  return (
    <div>
      <CCard className="mb-4">
        <CCardBody>
          <CCardTitle className="h5">
            Dashboard: {dashboard ? dashboard.nombre : "Facultad no encontrada"}
          </CCardTitle>

          {dashboard ? (
            <div style={{ overflow: "auto" }}>
              <iframe
                width="100%"
                height="720"
                src={dashboard.url}
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen
                sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
              ></iframe>
            </div>
          ) : (
            <CAlert color="warning" className="mt-4">
              No se ha configurado un dashboard para esta facultad.
            </CAlert>
          )}
        </CCardBody>
      </CCard>
    </div>
  );
};

export default DashboardFacultadPage;
