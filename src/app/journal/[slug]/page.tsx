import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { siteConfig } from "@/config/site";
import { journalData, JournalArticle } from "@/data/journal";
import { generateArticleSchema, generateBreadcrumbSchema } from "@/lib/seo";

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return journalData.articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const article = journalData.articles.find((a) => a.slug === params.slug);
  if (!article) return { title: "Article Not Found" };

  const canonicalUrl = `${siteConfig.url}/journal/${article.slug}`;

  return {
    title: article.title,
    description: article.excerpt,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${article.title} | Eman Trades`,
      description: article.excerpt,
      url: canonicalUrl,
      type: "article",
      publishedTime: new Date(article.date).toISOString(),
      authors: [siteConfig.author.name],
      tags: [article.category, "institutional order flow", "market structure"],
      images: [
        {
          url: article.image.startsWith("http")
            ? article.image
            : `${siteConfig.url}${article.image}`,
          width: 1200,
          height: 800,
          alt: `${article.title} execution chart and analysis`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${article.title} | Eman Trades`,
      description: article.excerpt,
      creator: siteConfig.social.twitterHandle,
      images: [article.image],
    },
  };
}

export default function JournalArticlePage({ params }: ArticlePageProps) {
  const article = journalData.articles.find((a) => a.slug === params.slug);
  if (!article) notFound();

  const articleSchema = generateArticleSchema(article);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Journal", url: "/journal" },
    { name: article.title, url: `/journal/${article.slug}` },
  ]);

  // Related articles (other articles in collection)
  const relatedArticles = journalData.articles
    .filter((a) => a.id !== article.id)
    .slice(0, 2);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      {/* Structured Data: Article & BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-hairline-b px-4 sm:px-8 py-4 flex items-center justify-between">
        <Link
          href="/journal"
          className="style-meta-tag text-xs tracking-wider text-white hover:text-white/60 transition-opacity"
        >
          ← All Research Monographs
        </Link>
        <nav aria-label="Breadcrumb navigation" className="style-meta-tag text-[9px] text-white/50 space-x-2 hidden sm:block">
          <Link href="/" className="hover:text-white">Home</Link>
          <span>/</span>
          <Link href="/journal" className="hover:text-white">Journal</Link>
          <span>/</span>
          <span className="text-white truncate max-w-[200px] inline-block align-bottom">{article.category}</span>
        </nav>
      </header>

      <main className="max-w-3xl mx-auto pt-32 sm:pt-36 pb-24 px-4 sm:px-8 space-y-12">
        {/* Article Header Metadata */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-[9px] style-meta-tag text-white/50 border-hairline-b pb-3">
            <span className="text-white/80 font-mono">[ {article.category} ]</span>
            <span>•</span>
            <time dateTime={new Date(article.date).toISOString()}>{article.date}</time>
            <span>•</span>
            <span>{article.readTime}</span>
          </div>

          {/* SINGLE H1 FOR THE ARTICLE */}
          <h1 className="style-hero-name text-2xl sm:text-4xl md:text-5xl text-white leading-tight font-bold">
            {article.title}
          </h1>

          <p className="style-copy-body text-white/70 text-base sm:text-lg italic font-editorial">
            {article.subtitle}
          </p>

          <div className="pt-2 flex items-center gap-3 style-meta-tag text-[9.5px] text-white/40">
            <span>Author: <strong className="text-white font-sans">{siteConfig.author.name}</strong></span>
            <span>•</span>
            <span>Desk: London &amp; Dubai</span>
          </div>
        </div>

        {/* Featured Chart Image */}
        <div className="relative w-full aspect-[16/9] bg-neutral-950 border border-white/15 overflow-hidden">
          <Image
            src={article.image}
            alt={`${article.title} - Trade execution chart showing price levels and risk parameters`}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-cover"
          />
        </div>

        {/* Lead Narrative */}
        <div className="border-hairline-b pb-8">
          <p className="style-copy-body text-white/90 text-base sm:text-lg leading-relaxed">
            {article.content.lead}
          </p>
        </div>

        {/* Article Body Sections */}
        <div className="space-y-10">
          {article.content.sections.map((section, idx) => (
            <section key={idx} className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {section.heading}
              </h2>

              <div className="space-y-4 text-white/70 style-copy-body text-sm sm:text-base leading-relaxed">
                {section.body.map((para, pIdx) => (
                  <p key={pIdx}>{para}</p>
                ))}
              </div>

              {section.highlightQuote && (
                <blockquote className="my-6 p-6 border-l-2 border-white/40 bg-white/[0.02] font-editorial italic text-lg sm:text-xl text-white/90">
                  &ldquo;{section.highlightQuote}&rdquo;
                </blockquote>
              )}
            </section>
          ))}
        </div>

        {/* Key Takeaways Box */}
        <section className="border border-white/20 p-6 sm:p-8 bg-white/[0.02] space-y-4">
          <h3 className="style-meta-tag text-white/60 text-[9.5px] tracking-[0.2em] uppercase">
            Executive Takeaways &amp; Execution Rules
          </h3>
          <ul className="space-y-2.5">
            {article.content.keyTakeaways.map((takeaway, tIdx) => (
              <li key={tIdx} className="flex items-start gap-3 text-xs sm:text-sm text-white/80 style-copy-body">
                <span className="text-emerald-400 font-mono">0{tIdx + 1}.</span>
                <span>{takeaway}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Related Articles (Hub-and-Spoke Internal Linking) */}
        <section className="border-hairline-t pt-10 space-y-6">
          <h3 className="style-meta-tag text-white/50 text-[9px] tracking-[0.2em] uppercase">
            Related Institutional Monograms
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {relatedArticles.map((rel) => (
              <Link
                key={rel.id}
                href={`/journal/${rel.slug}`}
                className="border border-white/10 p-5 bg-white/[0.015] hover:border-white/30 transition-colors block space-y-2 group"
              >
                <span className="style-meta-tag text-[8px] text-white/40 block">
                  {rel.category}
                </span>
                <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-white/80 transition-colors">
                  {rel.title}
                </h4>
                <p className="style-copy-body text-xs text-white/60 line-clamp-2">
                  {rel.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* Footer Navigation */}
        <footer className="border-hairline-t pt-8 flex items-center justify-between style-meta-tag text-xs">
          <Link href="/journal" className="text-white hover:text-white/60 transition-colors underline underline-offset-4">
            ← Back to All Articles
          </Link>
          <Link href="/contact" className="text-white hover:text-white/60 transition-colors underline underline-offset-4">
            Inquire for Advisory →
          </Link>
        </footer>
      </main>
    </div>
  );
}
