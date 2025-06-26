import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  CForm,
  CFormInput,
  CFormLabel,
  CButton,
} from "@coreui/react";
import { Eye, EyeOff } from "lucide-react"; // ✅ íconos de ojo
import { login } from "../services/authService";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();
  

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setEmailError("");
    setPasswordError("");

    let valid = true;
    if (!email.includes("@")) {
      setEmailError("Tu correo debe ser válido.");
      valid = false;
    }
    if (!password) {
      setPasswordError("La contraseña es obligatoria.");
      valid = false;
    }

    if (!valid) return;

    setLoading(true);
    try {
      console.log("Intentando login...");
      const data = await login(email, password);
      console.log("Login exitoso:", data);
      navigate("/dashboard");
    } catch (e) {
      console.error("Error en login:", e);
      setError("Correo o contraseña incorrectos.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <CForm onSubmit={handleLogin} className="space-y-6">
      <div className="text-center mb-5">
        <h2 className="text-2xl font-semibold text-gray-800">Inicia Sesión</h2>
        <p className="text-sm text-gray-500">Ingresa tu correo y contraseña!</p>
      </div>

      <div>
        <CFormLabel>Correo</CFormLabel>
        <CFormInput
          type="email"
          placeholder="email@espoch.edu.ec"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`w-full h-[48px] border rounded-lg px-4 text-sm focus:outline-none focus:ring-2 ${
            emailError ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
          }`}
        />
        {emailError && <p className="text-sm text-red-500 mt-1">{emailError}</p>}
      </div>

      <div>
        <CFormLabel>Contraseña</CFormLabel>
          <div className="relative">
            <CFormInput
              type={showPassword ? "text" : "password"}
              placeholder="Ingresa tu contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full h-[48px] border rounded-lg px-4 pr-10 text-sm focus:outline-none focus:ring-2 ${
                passwordError
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-blue-500"
              }`}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
        {passwordError && <p className="text-sm text-red-500 mt-1">{passwordError}</p>}
      </div>

      {error && <p className="text-sm text-red-500 text-center">{error}</p>}

      <div className="flex justify-between items-center text-sm">
        <Link to="/reset-password" className="text-blue-500 hover:underline">
          ¿Olvidaste tu contraseña?
        </Link>
      </div>

      <CButton
        color="primary"
        variant="outline"
        type="submit"
        className="w-full h-[48px] font-semibold rounded-lg transition"
        disabled={loading}
      >
        {loading ? "Ingresando..." : "Inicar sesión"}
      </CButton>
    </CForm>
  );
};

export default LoginForm;
