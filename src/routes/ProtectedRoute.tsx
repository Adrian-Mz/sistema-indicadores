import { Navigate } from "react-router-dom";
import { useSession } from "../hooks/useSession";
import { useUserProfile } from "../hooks/useUserProfiles";


type Role = "admin" | "user";
interface Props {
  allowedRoles: Role[];
  children: React.ReactNode;
}

const ProtectedRouteByRole = ({ allowedRoles, children }: Props) => {
  const { session, loading: sessionLoading } = useSession();
  const { profile, loading: profileLoading } = useUserProfile();

  if (sessionLoading || profileLoading) return <div>Cargando sesión...</div>;

  if (!session) return <Navigate to="/" replace />;

  if (!profile || !allowedRoles.includes(profile.role)) {
    return <Navigate to="/dashboard" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRouteByRole;
