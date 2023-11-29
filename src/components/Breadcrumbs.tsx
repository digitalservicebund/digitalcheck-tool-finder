import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { z } from "zod";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

export const BreadcrumbPropsSchema = z.object({
  url: z.string(),
  title: z.string(),
  parent: z.string().optional(),
});

export type BreadcrumbProps = z.infer<typeof BreadcrumbPropsSchema>;

export const BreadcrumbsPropsSchema = z.object({
  breadcrumbs: z.array(BreadcrumbPropsSchema),
});

export type BreadcrumbsProps = z.infer<typeof BreadcrumbsPropsSchema>;

function filterBreadcrumbs(
  list: BreadcrumbProps[],
  currentPath: string,
): BreadcrumbProps[] {
  const filteredList: BreadcrumbProps[] = [];

  let currentElement = list.find((item) => item.url === currentPath);

  while (currentElement) {
    filteredList.unshift(currentElement);
    currentElement = list.find((item) => item.url === currentElement!.parent);
  }

  return filteredList;
}

export default function Breadcrumbs({ breadcrumbs }: BreadcrumbsProps) {
  const location = useLocation();
  const filteredBreadcrumbs = filterBreadcrumbs(breadcrumbs, location.pathname);

  return (
    filteredBreadcrumbs.length > 0 && (
      <nav className="py-8 px-16 bg-blue-100 flex flex-wrap items-center text-base">
        <Link
          to="/"
          aria-label="Startseite"
          className="focus:outline ds-link-01-bold"
        >
          <HomeOutlinedIcon className="!h-[1.6rem] !w-[1.6rem]" />
        </Link>
        {filteredBreadcrumbs.map((breadcrumb, idx, arr) => (
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
