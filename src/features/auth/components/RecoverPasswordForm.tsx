import { useState } from "react";
import { supabase } from "../../../utils/supabaseClient";
import { useNavigate } from "react-router-dom";
import {
  CForm,
  CFormLabel,
  CFormInput,
  CButton,
  CAlert,
} from "@coreui/react";
import { cilArrowLeft } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import { Mail } from "lucide-react";
import AuthLayout from "../../../layouts/AuthLayout";


export const RecoverPasswordForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
    setError("");

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: "http://localhost:5173/reset-password",
    });

    if (error) {
      setError("Error al enviar el correo. Verifica el email.");
    } else {
      setMessage("Se ha enviado un enlace de recuperación a tu correo.");
    }
  };

  return (
    <AuthLayout>
      <div className="space-y-6">

        <CButton
          color="primary"
          variant="ghost"
          className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
          onClick={() => navigate(-1)}
        >
          <CIcon icon={cilArrowLeft} />
          Regresar
        </CButton>

        <div className="text-center mb-6">
          
          <h2 className="text-2xl font-bold text-gray-800">Recuperar contraseña</h2>
          <p className="text-sm text-gray-500">Ingresa tu correo institucional para recibir el enlace</p>
        </div>

        <CForm onSubmit={handleSubmit} className="space-y-4">
          <div>
            <CFormLabel>Correo institucional</CFormLabel>
            <div className="relative">
              <CFormInput
                type="email"
                placeholder="correo@espoch.edu.ec"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Mail className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
            </div>
          </div>

          <CButton type="submit" color="primary" className="w-full" disabled={!email}>
            Enviar enlace de recuperación
          </CButton>
        </CForm>

        {message && <CAlert color="success" className="text-center">{message}</CAlert>}
        {error && <CAlert color="danger" className="text-center">{error}</CAlert>}
      </div>
    </AuthLayout>
  );
};

export default RecoverPasswordForm;
