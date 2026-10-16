import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogImage?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description = "Global Disciples Alliance Ethiopia partners with local churches to equip, train, and send disciple-makers and leaders to communities with little or no access to the Gospel.",
  canonicalUrl,
}) => {
  useEffect(() => {
    const baseTitle = "Global Disciples Alliance Ethiopia";
    document.title = title ? `${title} | ${baseTitle}` : `${baseTitle} — Equipping Churches, Reaching the Least-Reached`;

    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    }

    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [title, description, canonicalUrl]);

  return null;
};
