import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export type Breadcrumb = {
  url: string;
  title?: string;
};

export type BreadcrumbsProps = {
  breadcrumbs: Breadcrumb[];
};

export default function Breadcrumbs({ breadcrumbs }: BreadcrumbsProps) {
  const validBreadcrumbs = breadcrumbs?.filter(
    (breadcrumb) => breadcrumb.title !== undefined,
  );
  const location = useLocation();
  const indexOfCurrentPageBreadcrump = validBreadcrumbs.findIndex(
    (breadcrump) => breadcrump.url === location.pathname,
  );
  if (indexOfCurrentPageBreadcrump == -1) {
    return <></>;
  }
  validBreadcrumbs.splice(indexOfCurrentPageBreadcrump + 1);

  return (
    validBreadcrumbs.length > 0 && (
      <nav className="py-8 px-16 bg-blue-100 flex flex-wrap items-center text-base">
        {/* Note: can't use <Link> or <NavLink> as we require fresh data from the root loader */}
        <Link
          to="/"
          aria-label="Startseite"
          className="focus:outline ds-link-01-bold"
        >
          Home
        </Link>
        {validBreadcrumbs.map((breadcrumb, idx, arr) => (
          <div key={breadcrumb.title}>
            <span className="mx-8">/</span>
            <span>
              {idx === arr.length - 1 ? (
                <span>{breadcrumb.title}</span>
              ) : (
                <Link
                  to={breadcrumb.url}
                  className="text-link increase-tap-area"
                >
                  {breadcrumb.title}
                </Link>
              )}
            </span>
          </div>
        ))}
      </nav>
    )
  );
}
