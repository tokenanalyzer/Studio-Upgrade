import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  author?: string;
  tags?: string[];
  schema?: object | object[];
}

const DEFAULT_TITLE = "MD Studio — Full Stack & AI Development Agency by Adil Hussain";
const DEFAULT_DESC  = "MD Studio is a boutique software agency by Adil Hussain — Full Stack Developer & AI Engineer. We build scalable web apps, AI agents, SaaS platforms, and mobile products that create real business impact.";
const DEFAULT_IMAGE = "https://mdstudio.dev/opengraph.jpg";
const BASE_URL      = "https://mdstudio.dev";

function setMeta(selector: string, attr: string, value: string) {
  let el = document.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    const [attrName, attrVal] = selector.replace(/\[|\]/g, " ").trim().split(/\s+/);
    el.setAttribute(attrName, attrVal ?? "");
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
}

function setLink(rel: string, href: string) {
  let el = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) { el = document.createElement("link"); el.rel = rel; document.head.appendChild(el); }
  el.href = href;
}

function injectSchema(id: string, data: object | object[]) {
  const schemas = Array.isArray(data) ? data : [data];
  let el = document.getElementById(id);
  if (!el) { el = document.createElement("script"); el.id = id; el.setAttribute("type", "application/ld+json"); document.head.appendChild(el); }
  el.textContent = JSON.stringify(schemas.length === 1 ? schemas[0] : schemas, null, 0);
}

function removeSchema(id: string) {
  document.getElementById(id)?.remove();
}

export function usePageSEO({ title, description, canonical, image, type = "website", publishedTime, author, tags, schema }: SEOProps) {
  useEffect(() => {
    const fullTitle = title === DEFAULT_TITLE ? title : `${title} | MD Studio`;
    const img = image ?? DEFAULT_IMAGE;
    const url = canonical ? `${BASE_URL}${canonical}` : window.location.href;

    // Title
    document.title = fullTitle;

    // Primary meta
    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[name="robots"]', "content", "index, follow");

    // Canonical
    setLink("canonical", url);

    // OG
    setMeta('meta[property="og:title"]',       "content", fullTitle);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:url"]',         "content", url);
    setMeta('meta[property="og:image"]',       "content", img);
    setMeta('meta[property="og:type"]',        "content", type);
    if (publishedTime) setMeta('meta[property="article:published_time"]', "content", publishedTime);
    if (author)        setMeta('meta[property="article:author"]',          "content", author);
    if (tags?.length)  setMeta('meta[property="article:tag"]',             "content", tags.join(", "));

    // Twitter
    setMeta('meta[name="twitter:title"]',       "content", fullTitle);
    setMeta('meta[name="twitter:description"]', "content", description);
    setMeta('meta[name="twitter:image"]',       "content", img);

    // Extra JSON-LD from caller
    if (schema) injectSchema("page-schema", schema);

    return () => {
      // Reset to defaults on unmount
      document.title = DEFAULT_TITLE;
      setMeta('meta[name="description"]', "content", DEFAULT_DESC);
      setLink("canonical", `${BASE_URL}/`);
      setMeta('meta[property="og:title"]',       "content", "MD Studio — Full Stack & AI Development Agency");
      setMeta('meta[property="og:description"]', "content", DEFAULT_DESC);
      setMeta('meta[property="og:url"]',         "content", BASE_URL);
      setMeta('meta[property="og:type"]',        "content", "website");
      setMeta('meta[name="twitter:title"]',      "content", "MD Studio — Full Stack & AI Development Agency");
      setMeta('meta[name="twitter:description"]',"content", DEFAULT_DESC);
      removeSchema("page-schema");
    };
  }, [title, description, canonical, image, type, publishedTime, author, JSON.stringify(tags), JSON.stringify(schema)]);
}
