import {
  CSidebar,
  CSidebarHeader,
  CSidebarBrand,
  CSidebarNav,
  CNavGroup,
  CNavItem,
  CNavTitle,
  CSidebarFooter,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilUser, cilEducation, cilPuzzle, cilHome, cilCloudDownload, cilLightbulb, cilShieldAlt } from '@coreui/icons'
import { NavLink } from 'react-router-dom'
import { routes } from '../routes/AppRoutes'
import { useSidebar } from '../context/SidebarContext'
import logoIcon from '../assets/logo-icon-espoch.png'

const groupedRoutes = routes.reduce((acc, route) => {
  if (!route.hidden && route.section && route.title && route.path !== '/dashboard') {
    if (route.section === 'Desarrollo') {
      acc['Desarrollo'] = acc['Desarrollo'] || []
      acc['Desarrollo'].push(route)
    } else {
      acc['Inicio'] = acc['Inicio'] || {}
      acc['Inicio'][route.section] = acc['Inicio'][route.section] || []
      acc['Inicio'][route.section].push(route)
    }
  }
  return acc
}, {} as {
  Inicio: Record<string, typeof routes>
  Desarrollo: typeof routes
})

const iconMap: Record<string, typeof cilUser> = {
  'Personal Académico': cilUser,
  Estudiantes: cilEducation,
  'Funciones de Soporte': cilPuzzle,
}

const desarrolloIconMap: Record<string, typeof cilCloudDownload> = {
  Fuentes: cilCloudDownload,
  Nosotros: cilLightbulb,
  Politicas: cilShieldAlt,
}

const AppSidebar = () => {
  const {setSidebarUnfoldable } = useSidebar()

  return (
    <CSidebar
      className="border-end"
      unfoldable
      onMouseEnter={() => setSidebarUnfoldable(true)}
      onMouseLeave={() => setSidebarUnfoldable(false)}
    >
      <CSidebarHeader className="border-bottom">
        <CSidebarBrand>
          <img src={logoIcon} alt="Logo ESPOCH" style={{ height: '45px', width: 'auto' }} />
        </CSidebarBrand>
      </CSidebarHeader>

      <CSidebarNav>
        {/* Inicio */}
        <CNavItem>
          <NavLink to="/dashboard" className="nav-link">
            <CIcon icon={cilHome} customClassName="nav-icon" />
            <span className="nav-text">Inicio</span>
          </NavLink>
        </CNavItem>

        <CNavTitle>INDICADORES</CNavTitle>

        {Object.entries(groupedRoutes.Inicio).map(([section, items]) => (
          <CNavGroup
            key={section}
            toggler={
              <>
                <CIcon icon={iconMap[section]} customClassName="nav-icon" />
                <span className="nav-text">{section}</span>
              </>
            }
          >
            {items.map((route) => (
              <CNavItem key={route.path}>
                <NavLink to={route.path} className="nav-link">
                  <span className="nav-text">{route.title}</span>
                </NavLink>
              </CNavItem>
            ))}
          </CNavGroup>
        ))}

        <CNavTitle>DESARROLLO</CNavTitle>

        {groupedRoutes.Desarrollo.map((route) => (
          <CNavItem key={route.path}>
            <NavLink to={route.path} className="nav-link">
              <CIcon icon={desarrolloIconMap[route.title] || cilCloudDownload} customClassName="nav-icon" />
              <span className="nav-text">{route.title}</span>
            </NavLink>
          </CNavItem>
        ))}
      </CSidebarNav>

      <CSidebarFooter className="border-top">
        <div className="sidebar-footer-content text-center small">
          <strong>©</strong>
        </div>
      </CSidebarFooter>
    </CSidebar>
  )
}

export default AppSidebar
