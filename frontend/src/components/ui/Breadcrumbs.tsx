
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface Crumb {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: Crumb[];
  className?: string;
  showHomeIcon?: boolean;
}

const SITE_URL = "https://heroy.dev";

function createSafeJsonLd(data: unknown): string {
  return JSON.stringify(data)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026");
}

function getAbsoluteUrl(href: string): string {
  if (href.startsWith("http://") || href.startsWith("https://")) {
    return href;
  }

  return `${SITE_URL}${href.startsWith("/") ? href : `/${href}`}`;
}

export default function Breadcrumbs({
  items,
  className = "",
  showHomeIcon = true,
}: BreadcrumbsProps) {
  if (!items.length) {
    return null;
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href
        ? {
            item: getAbsoluteUrl(item.href),
          }
        : {}),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: createSafeJsonLd(schema),
        }}
      />

      <nav
        aria-label="Breadcrumb"
        className={`mb-6 w-full ${className}`}
      >
        <ol
          className="
            flex
            w-full
            flex-wrap
            items-center
            gap-x-1.5
            gap-y-1
            text-xs
            text-muted
          "
        >
          {items.map((item, index) => {
            const isFirst = index === 0;
            const isLast = index === items.length - 1;

            return (
              <li
                key={`${item.label}-${index}`}
                className="flex min-w-0 items-center gap-1.5"
              >
                {index > 0 && (
                  <ChevronRight
                    size={12}
                    aria-hidden="true"
                    className="shrink-0 text-muted/40"
                  />
                )}

                {item.href && !isLast ? (
                  <Link
                    href={item.href}
                    className="
                      group
                      inline-flex
                      min-w-0
                      items-center
                      gap-1.5
                      rounded-md
                      px-1.5
                      py-1
                      text-muted
                      transition-all
                      duration-200
                      hover:bg-white/[0.04]
                      hover:text-white
                      focus-visible:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-primary/60
                    "
                  >
                    {isFirst && showHomeIcon && (
                      <Home
                        size={12}
                        aria-hidden="true"
                        className="
                          shrink-0
                          text-muted/70
                          transition-colors
                          group-hover:text-accent
                        "
                      />
                    )}

                    <span className="truncate">
                      {item.label}
                    </span>
                  </Link>
                ) : (
                  <span
                    aria-current={isLast ? "page" : undefined}
                    className={`
                      inline-flex
                      min-w-0
                      items-center
                      gap-1.5
                      rounded-md
                      px-1.5
                      py-1
                      ${
                        isLast
                          ? "font-medium text-white/90"
                          : "text-muted"
                      }
                    `}
                  >
                    {isFirst && showHomeIcon && (
                      <Home
                        size={12}
                        aria-hidden="true"
                        className="shrink-0 text-accent/80"
                      />
                    )}

                    <span className="truncate">
                      {item.label}
                    </span>
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}