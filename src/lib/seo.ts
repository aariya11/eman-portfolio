import { siteConfig } from "@/config/site";
import { JournalArticle } from "@/data/journal";

/**
 * Generate Person JSON-LD schema for Eman Trades
 */
export function generatePersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteConfig.url}/#person`,
    name: siteConfig.author.name,
    alternateName: siteConfig.shortName,
    jobTitle: siteConfig.author.role,
    url: siteConfig.url,
    image: `${siteConfig.url}/images/trades/eman_trade_01.jpg`,
    description: siteConfig.description,
    sameAs: [
      siteConfig.social.twitter,
      siteConfig.social.instagram,
      siteConfig.social.telegram,
      siteConfig.social.youtube,
      siteConfig.social.tradingView,
    ],
    knowsAbout: [
      "Institutional Order Flow",
      "Foreign Exchange (Forex)",
      "Equity Index Futures (ES, NQ)",
      "Precious Metals Speculation (Gold, Silver)",
      "Auction Market Theory",
      "Macro Yield Dynamics",
      "Probabilistic Risk Management",
      "Trading Psychology",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Eman Trades Desk",
      url: siteConfig.url,
    },
  };
}

/**
 * Generate WebSite JSON-LD schema with potential SearchAction
 */
export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    description: siteConfig.description,
    publisher: {
      "@id": `${siteConfig.url}/#person`,
    },
    inLanguage: "en-US",
  };
}

/**
 * Generate BreadcrumbList JSON-LD schema
 */
export function generateBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${siteConfig.url}${item.url}`,
    })),
  };
}

/**
 * Generate Article JSON-LD schema for Journal posts
 */
export function generateArticleSchema(article: JournalArticle) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${siteConfig.url}/journal/${article.slug}#article`,
    isPartOf: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/journal/${article.slug}`,
    },
    headline: article.title,
    description: article.excerpt,
    datePublished: new Date(article.date).toISOString(),
    dateModified: new Date(article.date).toISOString(),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/journal/${article.slug}`,
    },
    image: article.image.startsWith("http")
      ? article.image
      : `${siteConfig.url}${article.image}`,
    author: {
      "@type": "Person",
      name: siteConfig.author.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/images/trades/eman_trade_01.jpg`,
      },
    },
    articleSection: article.category,
    keywords: [
      article.category,
      "institutional order flow",
      "market structure",
      "trading journal",
      "risk engineering",
    ],
  };
}

/**
 * Generate WebPage JSON-LD schema
 */
export function generateWebPageSchema({
  title,
  description,
  url,
  breadcrumbs,
}: {
  title: string;
  description: string;
  url: string;
  breadcrumbs?: Array<{ name: string; url: string }>;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${siteConfig.url}${url}#webpage`,
    url: `${siteConfig.url}${url}`,
    name: title,
    description: description,
    isPartOf: {
      "@id": `${siteConfig.url}/#website`,
    },
    breadcrumb: breadcrumbs ? generateBreadcrumbSchema(breadcrumbs) : undefined,
    inLanguage: "en-US",
  };
}
