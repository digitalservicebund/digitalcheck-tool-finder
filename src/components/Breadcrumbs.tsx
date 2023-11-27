import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { z } from "zod";

export const BreadcrumbPropsSchema = z.object({
  url: z.string(),
  title: z.string(),
});

export const BreadcrumbsPropsSchema = z.object({
  breadcrumbs: z.array(BreadcrumbPropsSchema),
});

export type BreadcrumbsProps = z.infer<typeof BreadcrumbsPropsSchema>;

export default function Breadcrumbs({ breadcrumbs }: BreadcrumbsProps) {
  const validBreadcrumbs = breadcrumbs?.filter(
    (breadcrumb) => breadcrumb.title !== undefined,
  );
  const location = useLocation();
  const indexOfCurrentPageBreadcrumb = validBreadcrumbs.findIndex(
    (breadcrumb) => breadcrumb.url === location.pathname,
  );
  if (indexOfCurrentPageBreadcrumb == -1) {
    return <></>;
  }
  validBreadcrumbs.splice(indexOfCurrentPageBreadcrumb + 1);

  return (
    validBreadcrumbs.length > 0 && (
      <nav className="py-8 px-16 bg-blue-100 flex flex-wrap items-center text-base">
        {validBreadcrumbs.map((breadcrumb, idx, arr) => (
          <div key={breadcrumb.title}>
            {idx !== 0 ? <span className="mx-8">/</span> : ""}
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
