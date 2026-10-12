import { useEffect } from 'react';

type SEOProps = {
  title: string;
  description: string;
  image?: string;
  path?: string;
};

export function SEO({ title, description, image, path }: SEOProps) {
  useEffect(() => {
    document.title = title;

    const setMeta = (selector: string, attr: string, value: string) => {
      let el = document.querySelector(selector) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        const [name, content] = selector.replace(/[\[\]"]/g, '').split('=');
        el.setAttribute(name, content);
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };

    setMeta('meta[name="description"]', 'content', description);
    setMeta('meta[property="og:title"]', 'content', title);
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[property="og:type"]', 'content', 'website');
    setMeta('meta[name="twitter:title"]', 'content', title);
    setMeta('meta[name="twitter:description"]', 'content', description);
    setMeta('meta[name="twitter:card"]', 'content', 'summary_large_image');

    if (image) {
      setMeta('meta[property="og:image"]', 'content', image);
      setMeta('meta[name="twitter:image"]', 'content', image);
    }

    if (path) {
      const link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
      if (link) link.href = `https://ayoentity.com${path}`;
    }
  }, [title, description, image, path]);

  return null;
}
