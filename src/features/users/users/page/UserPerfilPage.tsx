import { useEffect, useState } from "react";
import { supabase } from "../../../../utils/supabaseClient";
import {
  CCard,
  CCardBody,
  CCardTitle,
  CCardText,
  CForm,
  CFormLabel,
  CFormInput,
  CButton,
  CAlert,
} from "@coreui/react";

type UserProfile = {
  id: string;
  full_name: string;
  email: string;
  role: string;
};


const UserPerfilPage = () => {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      const { data: session } = await supabase.auth.getSession();
      const user = session?.session?.user;
      if (user) {
        const { data } = await supabase.from("profiles").select("*").eq("id", user.id).single();
        setProfile(data);
      }
    };

    fetchProfile();
  }, []);

  const handleChangePassword = async () => {
    const { error } = await supabase.auth.updateUser({ password });
    setMessage(error ? "Error al cambiar la contraseña." : "Contraseña actualizada con éxito.");
  };

  return (
    <div className="p-3">
      <h4 className="mb-3 fw-semibold">Mi Perfil</h4>
      {profile && (
        <CCard>
          <CCardBody>
            <CCardTitle>{profile.full_name}</CCardTitle>
            <CCardText className="mb-1"><strong>Email:</strong> {profile.email}</CCardText>
            <CCardText><strong>Rol:</strong> {profile.role}</CCardText>
          </CCardBody>
        </CCard>
      )}

      <CCard className="mt-4">
        <CCardBody>
          <h6 className="mb-3">Cambiar Contraseña</h6>
          <CForm onSubmit={(e) => {
            e.preventDefault();
            handleChangePassword();
          }}>
            <CFormLabel>Nueva contraseña</CFormLabel>
            <CFormInput
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
            />
            <CButton color="primary" type="submit" className="mt-3">Actualizar</CButton>
          </CForm>
          {message && <CAlert color="info" className="mt-3">{message}</CAlert>}
        </CCardBody>
      </CCard>
    </div>
  );
};

export default UserPerfilPage;
