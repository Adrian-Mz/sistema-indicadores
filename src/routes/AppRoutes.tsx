// src/routes/AppRoutes.tsx
import DashboardPage from "../features/dashboard/page/DashboardPage";
import AfinidadPage from "../features/pages/personal/AfinidadPage";
import TitularidadPage from "../features/pages/personal/TitularidadPage";
import TitulacionPage from "../features/pages/estudiantes/TitulacionPage";
import DesercionPage from "../features/pages/estudiantes/DesercionPage";
import HerramientasPage from "../features/pages/soporte/HerramientasPage";
import AmbientesPage from "../features/pages/soporte/AmbientesPage";
import FuentesPage from "../features/pages/desarrollo/FuentesPage";
import NosotrosPage from "../features/pages/desarrollo/NostrosPage";
import PoliticasPage from "../features/pages/desarrollo/PoliticasPage";
import AdminDashboardPage from "../features/users/admin/page/AdminDashboardPage";

//Dashboards de facultades
import DashboardFacultadPage from "../features/dashboard/page/DashboardTitulacionPage";


export const routes = [
  {
    path: "",
    element: DashboardPage,
    title: "Inicio",
    breadcrumb: "Inicio",
    section: "Dashboard",
  },
  {
    path: "personal/afinidad",
    element: AfinidadPage,
    title: "Afinidad",
    breadcrumb: "Afinidad del personal académico",
    section: "Personal Académico",
  },
  {
    path: "personal/titularidad",
    element: TitularidadPage,
    title: "Titularidad",
    breadcrumb: "Personal académico titular permanente",
    section: "Personal Académico",
  },
  {
    path: "estudiantes/titulacion",
    element: TitulacionPage,
    title: "Titulación",
    breadcrumb: "Tasa de titulación",
    section: "Estudiantes",
  },
  {
    path: "estudiantes/desercion",
    element: DesercionPage,
    title: "Deserción",
    breadcrumb: "Tasa de deserción",
    section: "Estudiantes",
  },
  {
    path: "soporte/herramientas",
    element: HerramientasPage,
    title: "Herramientas",
    breadcrumb: "Herramientas pedagógicas",
    section: "Funciones de Soporte",
  },
  {
    path: "soporte/ambientes",
    element: AmbientesPage,
    title: "Ambientes",
    breadcrumb: "Ambientes de aprendizaje",
    section: "Funciones de Soporte",
  },
  {
    path: "desarrollo/fuentes",
    element: FuentesPage,
    title: "Fuentes",
    breadcrumb: "Fuentes Usadas",
    section: "Desarrollo",
  },
  {
    path: "desarrollo/nosotros",
    element: NosotrosPage,
    title: "Nosotros",
    breadcrumb: "Nosotros",
    section: "Desarrollo",
  },
  {
    path: "desarrollo/politicas",
    element: PoliticasPage,
    title: "Politicas",
    breadcrumb: "Políticas de Uso",
    section: "Desarrollo",
  },
  {
    path: "/dashboard/admin",
    element: AdminDashboardPage,
    title: "Admin Panel",
    breadcrumb: "Administrador",
    section: "Administración",
    hidden: true,
  },
  {
    path: "estudiantes/titulacion/facultad/:slug",
    element: DashboardFacultadPage,
    title: "Dashboard Facultad",
    breadcrumb: "Detalle por facultad",
    section: "Estudiantes",
    hidden: true,
  }

];
