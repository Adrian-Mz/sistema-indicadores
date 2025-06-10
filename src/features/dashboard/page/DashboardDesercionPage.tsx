import { useParams } from "react-router-dom";
import { CCard, CCardBody, CCardTitle, CAlert } from "@coreui/react";

// 🔁 Aquí defines los dashboards de deserción por facultad
const dashboardsPorFacultad: Record<string, { nombre: string; url: string }> = {
  "administracion-de-empresas": {
    nombre: "ADMINISTRACIÓN DE EMPRESAS",
    url: "https://lookerstudio.google.com/reporting/847ccd46-acbb-47f7-90f1-672fb1c39fac", 
  },
  "ciencias": {
    nombre: "CIENCIAS",
    url: "https://lookerstudio.google.com/reporting/8545aa92-8745-48c5-8cf1-6536a24ee767", 
  },
  "ciencias-pecuarias": {
    nombre: "CIENCIAS PECUARIAS",
    url: "https://lookerstudio.google.com/reporting/0694259d-5103-449c-bd3e-5e40550399e7", 
  },
  "informatica-y-electronica": {
    nombre: "INFORMÁTICA Y ELECTRÓNICA",
    url: "https://lookerstudio.google.com/reporting/3045c114-5729-486e-b021-809594860b77", 
  },
  "mecanica": {
    nombre: "MECÁNICA",
    url: "https://lookerstudio.google.com/reporting/11dddbd2-caa5-404b-9aab-93b3509a01b1", 
  },
  "recursos-naturales": {
    nombre: "RECURSOS NATURALES",
    url: "https://lookerstudio.google.com/reporting/edb8c03b-37a8-4ee9-8841-161b1aaa51d7", 
  },
  "salud-publica": {
    nombre: "SALUD PÚBLICA",
    url: "https://lookerstudio.google.com/reporting/b31c8b31-ba36-47e6-a976-543a8a920eb2", 
  },
};

// ✅ Elimina tildes y pone en minúsculas
const normalizarSlug = (slug: string) =>
  slug.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

const DashboardDesercionPage = () => {
  const { slug } = useParams();
  const dashboard = dashboardsPorFacultad[normalizarSlug(slug || "")];

  return (
    <div>
      <CCard className="mb-4">
        <CCardBody>
          <CCardTitle className="h5">
            Dashboard de Deserción: {dashboard ? dashboard.nombre : "Facultad no encontrada"}
          </CCardTitle>

          {dashboard ? (
            <div style={{ overflow: "auto", height: "68vh" }}>
              <iframe
                width="100%"
                height="100%"
                src={dashboard.url}
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen
                sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
              ></iframe>
            </div>
          ) : (
            <CAlert color="warning" className="mt-4">
              No se ha configurado un dashboard de deserción para esta facultad.
            </CAlert>
          )}
        </CCardBody>
      </CCard>
    </div>
  );
};

export default DashboardDesercionPage;
