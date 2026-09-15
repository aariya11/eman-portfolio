import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { socialsData } from "@/data/socials";
import { generateWebPageSchema } from "@/lib/seo";
import { NotchNavbar } from "@/components/layout/NotchNavbar";
import { LiquidMetalButton } from "@/components/ui/LiquidMetal";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact Trading Desk & Private Advisory",
  description:
    "Initiate confidential correspondence with the Eman Trades desk in London and Dubai. Inquire regarding 1-on-1 private trading mentorship, institutional market analysis, and advisory.",
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
  openGraph: {
    title: "Contact Trading Desk & Private Advisory | Eman Trades",
    description:
      "Direct desk contact for private 1-on-1 mentorship, institutional market analysis, and confidential consultation.",
    url: `${siteConfig.url}/contact`,
    type: "website",
    images: [{ url: `${siteConfig.url}/api/og?title=Contact+Trading+Desk&subtitle=Private+Advisory+%26+Mentorship` }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Trading Desk & Private Advisory | Eman Trades",
    description:
      "Direct desk contact for private 1-on-1 mentorship, institutional market analysis, and confidential consultation.",
  },
};

export default function ContactPage() {
  const schema = generateWebPageSchema({
    title: "Contact Trading Desk & Private Advisory | Eman Trades",
    description:
      "Initiate confidential correspondence with the Eman Trades desk in London and Dubai. Inquire regarding 1-on-1 private trading mentorship, institutional market analysis, and advisory.",
    url: "/contact",
    breadcrumbs: [
      { name: "Home", url: "/" },
      { name: "Contact", url: "/contact" },
    ],
  });

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Responsive Notched Header */}
      <NotchNavbar />

      <main className="max-w-4xl mx-auto pt-32 sm:pt-36 pb-24 px-4 sm:px-8 space-y-16">
        {/* Title Section */}
        <section className="space-y-6">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
            <span className="style-meta-tag text-white/50 text-[9px] tracking-[0.24em] uppercase">
              Confidential Correspondence
            </span>
          </div>

          {/* SINGLE H1 */}
          <h1 className="style-hero-name text-3xl sm:text-5xl md:text-6xl text-white leading-tight">
            Initiate Institutional Consultation &amp; Private Advisory
          </h1>

          <p className="style-copy-body text-white/70 text-base sm:text-lg leading-relaxed pt-2">
            Direct desk communication is reserved for serious market operators, institutional inquiries, and candidates for the 1-on-1 private trading mentorship program.
          </p>
        </section>

        {/* Contact Channels Grid */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Access */}
          <div className="md:col-span-5 space-y-8">
            <div className="border border-white/15 p-6 bg-white/[0.02] space-y-4">
              <span className="style-meta-tag text-[9px] text-white/40 block uppercase">
                Direct WhatsApp Hotline
              </span>
              <h2 className="text-xl font-bold text-white">
                1-on-1 Mentorship Desk
              </h2>
              <p className="style-copy-body text-xs text-white/70 leading-relaxed">
                Connect directly with Eman for questions regarding program availability, session curriculum, and execution playbooks.
              </p>
              <div className="pt-2">
                <a
                  href={siteConfig.author.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-block"
                  aria-label="Open WhatsApp Desk for Mentorship"
                >
                  <LiquidMetalButton
                    size="md"
                    className="w-full justify-center"
                    icon={<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse block" />}
                  >
                    Open WhatsApp Desk →
                  </LiquidMetalButton>
                </a>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <span className="style-meta-tag text-white/40 text-[9px] block uppercase">
                Official Inquiries
              </span>
              <p className="text-sm font-mono text-white">
                Email:{" "}
                <a href={`mailto:${siteConfig.author.email}`} className="hover:underline text-white">
                  {siteConfig.author.email}
                </a>
              </p>
              <p className="text-sm font-mono text-white/70">
                Phone: {siteConfig.author.phone}
              </p>
            </div>
          </div>

          {/* Right Column: Contact Dossier Form */}
          <div className="md:col-span-7 border border-white/20 p-6 sm:p-8 bg-white/[0.02] space-y-6">
            <h2 className="text-xl font-bold text-white tracking-tight">
              Submit Formal Inquiry
            </h2>

            <ContactForm />
          </div>
        </section>

        {/* Hub-and-Spoke Internal Links */}
        <section className="border-hairline-t pt-10 space-y-4">
          <span className="style-meta-tag text-white/40 text-[9px] tracking-[0.2em] block uppercase">
            Desk Directory
          </span>
          <nav aria-label="Internal links" className="flex flex-wrap gap-4 text-xs style-meta-tag">
            <Link href="/about" className="text-white hover:text-white/60 transition-colors underline decoration-white/30 underline-offset-4">
              &gt; Operator Biography &amp; Desks
            </Link>
            <Link href="/markets" className="text-white hover:text-white/60 transition-colors underline decoration-white/30 underline-offset-4">
              &gt; Monitored Markets
            </Link>
            <Link href="/trades" className="text-white hover:text-white/60 transition-colors underline decoration-white/30 underline-offset-4">
              &gt; Documented Trades
            </Link>
            <Link href="/journal" className="text-white hover:text-white/60 transition-colors underline decoration-white/30 underline-offset-4">
              &gt; Institutional Research Journal
            </Link>
          </nav>
        </section>
      </main>
    </div>
  );
}
