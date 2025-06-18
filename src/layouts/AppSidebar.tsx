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
import { cilUser, cilEducation, cilPuzzle, cilHome } from "@coreui/icons";
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
};

const AppSidebar = () => {
  return (
    <CSidebar
      className="border-end"
    >
      <CSidebarHeader className="border-bottom">
        <CSidebarBrand
          className="d-flex justify-content-center align-items-center"
        >
          <img
            src={logoIcon}
            alt="Logo ESPOCH"
            style={{ height: "45px", width: "auto" }}
          />
          <span className="ms-2 text-black">ESPOCH ANALYTICS</span>
        </CSidebarBrand>
      </CSidebarHeader>
      <CSidebarNav >
        <CNavItem>
          <NavLink to="/dashboard" className="nav-link">
            <CIcon icon={cilHome} className="me-2" />
            Inicio
          </NavLink>
        </CNavItem>
        <CNavTitle>INDICADORES</CNavTitle>

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
