import { Navigate } from "react-router-dom";
import { useSession } from "../hooks/useSession";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { session, loading } = useSession();

  if (loading) return <div>Cargando sesión...</div>;

  if (!session) return <Navigate to="/" replace />;

  return <>{children}</>;
};

export default ProtectedRoute;
