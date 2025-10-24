import { BreadcrumbStructuredData as BreadcrumbData } from '@/utils/breadcrumbs';

interface BreadcrumbStructuredDataProps {
  breadcrumbs: BreadcrumbData | null;
}

/**
 * Component to render breadcrumb structured data as JSON-LD
 */
export default function BreadcrumbStructuredData({ breadcrumbs }: BreadcrumbStructuredDataProps) {
  if (!breadcrumbs) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(breadcrumbs).replace(/</g, '\\u003c'),
      }}
    />
  );
}
