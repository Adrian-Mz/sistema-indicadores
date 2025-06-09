import { ReactNode } from "react";
import loginImage from "../assets/Login.png";

interface Props {
  children: ReactNode;
}

const AuthLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      {/* FORMULARIO */}
      <div className="flex items-center justify-center bg-white px-6 py-12 dark:bg-white">
        <div className="w-full max-w-md">
          <div className="mb-6">
          </div>
          {children}
        </div>
      </div>

      {/* PANEL DERECHO */}
      <div className="hidden md:block relative">
        <img
          src={loginImage}
          alt="Fondo institucional"
          className="absolute inset-0 object-cover object-left w-full h-full"
        />
      </div>
    </div>
  );
};

export default AuthLayout;
