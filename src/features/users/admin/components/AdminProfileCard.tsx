import { useEffect, useState } from "react";
import {
  CCard,
  CCardBody,
  CCardTitle,
  CCardText,
  CForm,
  CFormLabel,
  CFormInput,
  CButton,
  CCollapse,
  CAlert
} from "@coreui/react";
import { Eye, EyeOff } from "lucide-react";
import { supabase } from "../../../../utils/supabaseClient";
import { registrarAuditoria } from "../../../../utils/auditoriaServices";

type UserProfile = {
  id: string;
  full_name: string;
  email: string;
};

const AdminProfileCard = () => {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [collapseVisible, setCollapseVisible] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      const { data: session } = await supabase.auth.getSession();
      const user = session?.session?.user;
      if (user) {
        const { data } = await supabase
          .from("profiles")
          .select("id, full_name, email")
          .eq("id", user.id)
          .single();
        setProfile(data);
      }
    };

    fetchProfile();
  }, []);

  const handleChangePassword = async () => {
    setMessage("");
    setError("");

    if (newPassword.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    const { error } = await supabase.auth.updateUser({ password: newPassword });
    if (error) {
      setError("Ocurrió un error al cambiar la contraseña.");
    } else {
      setMessage("✅ Contraseña actualizada correctamente.");
      setNewPassword("");
      setConfirmPassword("");
      setCollapseVisible(false);

      await registrarAuditoria({
        accion: "cambio_clave",
        modulo: "perfil",
        descripcion: "El usuario actualizó su contraseña desde el perfil.",
      });
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h4 className="mb-4 fw-semibold text-center text-lg">Mi Perfil</h4>

      {profile && (
        <CCard className="mb-4">
          <CCardBody>
            <CCardTitle className="text-xl mb-2">{profile.full_name}</CCardTitle>
            <CCardText>
              <strong>Correo:</strong> {profile.email}
            </CCardText>
          </CCardBody>
        </CCard>
      )}

      <CButton
        color="secondary"
        variant="outline"
        className="w-full mb-3"
        onClick={() => setCollapseVisible(!collapseVisible)}
      >
        {collapseVisible ? "Cancelar cambio de contraseña" : "Cambiar contraseña"}
      </CButton>

      <CCollapse visible={collapseVisible}>
        <CCard>
          <CCardBody>
            <CForm
              onSubmit={(e) => {
                e.preventDefault();
                handleChangePassword();
              }}
            >
              <div className="mb-3">
                <CFormLabel>Nueva contraseña</CFormLabel>
                <div className="relative">
                  <CFormInput
                    type={showPassword ? "text" : "password"}
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="********"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <div className="mb-3">
                <CFormLabel>Confirmar contraseña</CFormLabel>
                <CFormInput
                  type={showPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="********"
                />
              </div>

              <CButton type="submit" color="primary" className="w-full">
                Actualizar contraseña
              </CButton>
            </CForm>

            {message && (
              <CAlert color="success" className="mt-3 text-center">
                {message}
              </CAlert>
            )}
            {error && (
              <CAlert color="danger" className="mt-3 text-center">
                {error}
              </CAlert>
            )}
          </CCardBody>
        </CCard>
      </CCollapse>
    </div>
  );
};

export default AdminProfileCard;
