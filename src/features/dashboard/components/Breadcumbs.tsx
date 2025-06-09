import { useBreadcrumbs } from "../../../hooks/useBreadcumbs"
import { CBreadcrumb, CBreadcrumbItem } from "@coreui/react"

export const Breadcrumbs = () => {
  const crumbs = useBreadcrumbs()

  return (
    <CBreadcrumb>
      <CBreadcrumbItem href="/">Inicio</CBreadcrumbItem>
      {crumbs.map((c, idx) =>
        c ? (
          <CBreadcrumbItem
            key={idx}
            active={idx === crumbs.length - 1}
            {...(idx !== crumbs.length - 1 ? { href: c.path } : {})}
          >
            {c.label}
          </CBreadcrumbItem>
        ) : null
      )}
    </CBreadcrumb>
  )
}
