import { useState } from 'react'
import {
  CButton,
  CCollapse,
  CContainer,
  CDropdown,
  CDropdownItem,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownDivider,
  CNavbar,
  CNavbarBrand,
  CNavbarNav,
  CNavbarToggler,
  CNavItem,
  CNavLink,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilUser } from '@coreui/icons'
import { useSession } from "../hooks/useSession";
import { supabase } from "../utils/supabaseClient";
import { useNavigate } from "react-router-dom";


export const AppHeader = () => {
  const [visible, setVisible] = useState(false)
  const { session } = useSession();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/"); // Redirige a login
  };

  return (
    <CNavbar expand="lg" className="bg-gray-100 border-b border-gray-300 shadow-sm">
      <CContainer fluid>
        <CNavbarBrand href="/dashboard">Sistema Indicadores</CNavbarBrand>
        <CNavbarToggler onClick={() => setVisible(!visible)} />
        <CCollapse className="navbar-collapse" visible={visible}>
          <CNavbarNav className="me-auto">
            <CNavItem>
              <CNavLink href="/dashboard" className="nav-link">
                Inicio
              </CNavLink>
            </CNavItem>
          </CNavbarNav>
          {session?.user ? (
            <CDropdown alignment="end">
              <CDropdownToggle color="secondary">
                <CIcon icon={cilUser} className="me-2" />
                {session.user.email}
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem onClick={() => navigate("/dashboard/admin")} >
                  Perfil
                </CDropdownItem>
                <CDropdownDivider />
                <CDropdownItem onClick={handleLogout}>Cerrar sesión</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
          ) : (
            <CButton color="primary" onClick={() => navigate("/")}>
              Iniciar sesión
            </CButton>
          )}
        </CCollapse>
      </CContainer>
    </CNavbar>
  )
}

export default AppHeader