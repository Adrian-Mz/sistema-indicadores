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
    <CNavbar expand="lg" className="bg-red-700 border-b border-gray-300 shadow-sm ">
      <CContainer fluid className="p-2 ">
        <CNavbarBrand href="/dashboard" className='text-white'>Sistema Indicadores</CNavbarBrand>
        <CNavbarToggler onClick={() => setVisible(!visible)} />
        <CCollapse className="navbar-collapse" visible={visible}>
          <CNavbarNav className="me-auto">
          </CNavbarNav>
          {session?.user ? (
            <CDropdown alignment="end">
              <CDropdownToggle color="primary">
                <CIcon icon={cilUser} className="me-2" />
                {session.user.user_metadata.name || session.user.email}
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