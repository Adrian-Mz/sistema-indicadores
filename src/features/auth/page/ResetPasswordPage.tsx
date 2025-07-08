import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../../utils/supabaseClient";
import {
  CForm,
  CFormLabel,
  CFormInput,
  CButton,
  CAlert,
} from "@coreui/react";
import { Eye, EyeOff } from "lucide-react";
import AuthLayout from "../../../layouts/AuthLayout";

const ResetPasswordPage = () => {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setMessage("");

    if (password !== confirm) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    const { error } = await supabase.auth.updateUser({ password });
    if (error) {
      setError("Error al actualizar la contraseña.");
    } else {
      setMessage("Contraseña actualizada correctamente.");
      setTimeout(() => navigate("/"), 2000);
    }
  };

  return (
    <AuthLayout>
      <div className="space-y-6">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Restablecer contraseña</h2>
          <p className="text-sm text-gray-500">Ingresa tu nueva contraseña y confírmala</p>
        </div>

        <CForm onSubmit={handleSubmit} className="space-y-4">
          <div>
            <CFormLabel>Nueva contraseña</CFormLabel>
            <div className="relative">
              <CFormInput
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="********"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <div>
            <CFormLabel>Confirmar contraseña</CFormLabel>
            <CFormInput
              type={showPassword ? "text" : "password"}
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              placeholder="********"
            />
          </div>

          <CButton
            type="submit"
            color="primary"
            className="w-full mt-3"
            disabled={!password || !confirm}
          >
            Actualizar contraseña
          </CButton>
        </CForm>

        {message && (
          <CAlert color="success" className="text-center">
            {message}
          </CAlert>
        )}
        {error && (
          <CAlert color="danger" className="text-center">
            {error}
          </CAlert>
        )}
      </div>
    </AuthLayout>
  );
};

export default ResetPasswordPage;
