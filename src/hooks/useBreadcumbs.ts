// src/features/dashboard/hooks/useBreadcrumbs.ts
import { useLocation } from "react-router-dom";
import { routes } from "../routes/AppRoutes";

export function useBreadcrumbs() {
  const location = useLocation();
  const segments = location.pathname.split("/").filter(Boolean);

  let path = "";
  const breadcrumbs = segments.map((segment) => {
    path += `/${segment}`;
    const match = routes.find((r) => r.path === path);
    return match ? { label: match.breadcrumb, path } : null;
  });

  return breadcrumbs.filter(Boolean);
}

export default useBreadcrumbs;
