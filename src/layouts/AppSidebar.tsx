import {
  CSidebar,
  CSidebarHeader,
  CSidebarBrand,
  CSidebarNav,
  CNavGroup,
  CNavItem,
  CNavTitle,
  CSidebarFooter
} from "@coreui/react";
import { NavLink } from "react-router-dom";
import CIcon from "@coreui/icons-react";
import { cilUser, cilEducation, cilPuzzle, cilGraph } from "@coreui/icons";
import { routes } from "../routes/AppRoutes";
import logoIcon from "../assets/logo-icon-espoch.png";

const groupedRoutes = routes.reduce((acc, route) => {
  if ( !route.hidden && route.section && route.title && route.path !== "/dashboard") {
    if (route.section === "Desarrollo") {
      acc["Desarrollo"] = acc["Desarrollo"] || [];
      acc["Desarrollo"].push(route);
    } else {
      acc["Inicio"] = acc["Inicio"] || {};
      acc["Inicio"][route.section] = acc["Inicio"][route.section] || [];
      acc["Inicio"][route.section].push(route);
    }
  }
  return acc;
}, {} as {
  Inicio: Record<string, typeof routes>;
  Desarrollo: typeof routes;
});

const iconMap: Record<string, typeof cilUser> = {
  "Personal Académico": cilUser,
  Estudiantes: cilEducation,
  "Funciones de Soporte": cilPuzzle,
  "Dashboard": cilGraph,
};

const AppSidebar = () => {
  return (
    <CSidebar
      className="border-end"
      style={{
        height: "100vh",
        position: "sticky",
        top: 0,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CSidebarHeader className="border-bottom">
        <CSidebarBrand
          className="d-flex justify-content-center align-items-center w-100"
        >
          <img
            src={logoIcon}
            alt="Logo ESPOCH"
            style={{ height: "45px", width: "auto" }}
          />
        </CSidebarBrand>
      </CSidebarHeader>
      <CSidebarNav >
        <CNavTitle>INICIO</CNavTitle>

        {Object.entries(groupedRoutes.Inicio).map(([section, items]) => (
          <CNavGroup key={section} toggler={<><CIcon icon={iconMap[section]} /> {section}</>}>
            {items.map((route) => (
              <CNavItem key={route.path}>
                <NavLink to={route.path} className="nav-link">
                  {route.title}
                </NavLink>
              </CNavItem>
            ))}
          </CNavGroup>
        ))}

        <CNavTitle>DESARROLLO</CNavTitle>

        {groupedRoutes.Desarrollo.map((route) => (
          <CNavItem key={route.path}>
            <NavLink to={route.path} className="nav-link">
              {route.title}
            </NavLink>
          </CNavItem>
        ))}
      </CSidebarNav>
      <CSidebarFooter className="border-top">
        <div className="sidebar-footer-content">
          <span>© 2025 ESPOCH</span>
        </div>
      </CSidebarFooter>
    </CSidebar>
  );
};

export default AppSidebar;
