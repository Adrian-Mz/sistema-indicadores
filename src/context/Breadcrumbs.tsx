import { CBreadcrumb, CBreadcrumbItem } from "@coreui/react";
import { useBreadcrumbs } from "../hooks/useBreadcumbs";

const Breadcrumbs = () => {
  const crumbs = useBreadcrumbs();

  return (
    <CBreadcrumb className="mb-4">
        {crumbs.map((crumb, idx) => {
            if (!crumb) return null; // 

            return (
            <CBreadcrumbItem
                key={idx}
                href={idx < crumbs.length - 1 ? crumb.path : undefined}
                active={idx === crumbs.length - 1}
            >
                {crumb.label}
            </CBreadcrumbItem>
            );
        })}
        </CBreadcrumb>
  );
};

export default Breadcrumbs;