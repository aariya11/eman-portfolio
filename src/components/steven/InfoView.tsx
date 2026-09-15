"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { performanceData } from "@/data/performance";
import { socialsData } from "@/data/socials";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { StatsCounter } from "@/components/ui/StatsCounter";
import { LiquidMetalButton } from "@/components/ui/LiquidMetal";

interface InfoViewProps {
  onBackToWork: () => void;
}

export function InfoView({ onBackToWork }: InfoViewProps) {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: socialsData.contact.inquiryTypes[0],
    message: "",
    website_hp: "",
  });
  const [formError, setFormError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");

    // Bot trap: silent ignore
    if (formState.website_hp) {
      setIsSubmitted(true);
      return;
    }

    const trimmedName = formState.name.trim();
    const trimmedEmail = formState.email.trim();
    const trimmedMsg = formState.message.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!trimmedName || !trimmedEmail || !trimmedMsg) {
      setFormError("Please fill out all mandatory fields.");
      return;
    }

    if (!emailRegex.test(trimmedEmail)) {
      setFormError("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="min-h-screen bg-black text-white pt-24 sm:pt-28 pb-32 px-4 sm:px-8 md:px-12 max-w-[1080px] mx-auto overflow-x-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        {/* Left Column: Editorial Narrative & Links */}
        <div className="lg:col-span-8 space-y-12">
          {/* Main Narrative Statement in Newsreader Italic */}
          <div className="space-y-6">
            <p className="style-narrative-lead">
              Eman is a London &amp; Dubai–based Market Analyst and Institutional Trader exploring the intersection of auction market theory, quantitative price structure, and disciplined execution. With eight years of continuous live market immersion across multiple macro cycles, her work merges concept, algorithmic order delivery, and psychological poise to navigate global financial markets. From intraday liquidity runs to macro yield curve mapping, Eman brings trade theses from structural hypothesis to execution, grounded in rigorous risk management and probabilistic objectivity.
            </p>

            <p className="style-narrative-lead pt-2">
              <a
                href="mailto:desk@emantrades.com"
                className="text-white hover:text-white/60 transition-opacity underline decoration-white/30 underline-offset-8"
              >
                desk@emantrades.com
              </a>
            </p>
          </div>

          {/* Social Channels List with > prefix */}
          <div className="space-y-2 pt-2">
            {socialsData.channels.map((ch) => (
              <div key={ch.id}>
                <a
                  href={ch.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="style-press-link text-[18px] md:text-[20px] leading-[30px] inline-block"
                >
                  &gt; {ch.name}
                </a>
              </div>
            ))}
          </div>

          {/* Foundational Desk Axiom */}
          <div className="pt-8 border-hairline-t space-y-3">
            <span className="style-meta-tag block text-white/40 text-[9px] tracking-[0.2em] uppercase">
              Operational Axiom • Capital Defense
            </span>
            <blockquote className="font-editorial italic text-lg sm:text-xl text-white/90 leading-relaxed">
              &ldquo;The most important rule of trading is to play great defense, not great offense. Every single day, I assume every position I have is wrong.&rdquo;
            </blockquote>
            <p className="style-meta-tag text-[10px] text-white/50 tracking-wider">
              — Paul Tudor Jones <span className="text-white/30">•</span> Macro Principle Honored at Eman Trades Desk
            </p>
          </div>

          {/* Audited Performance Records */}
          <div className="pt-10 border-hairline-t space-y-6">
            <span className="style-meta-tag block text-white/40">
              Audited Statistical Ledger Summary (2023 – 2025)
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {performanceData.metrics.map((m) => (
                <div key={m.id} className="space-y-1">
                  <span className="style-meta-tag text-[7.5px] block text-white/35">
                    {m.label}
                  </span>
                  <p className="font-editorial italic text-3xl font-light text-white">
                    {m.id === "win-rate" && <StatsCounter value={64.2} suffix="%" decimals={1} />}
                    {m.id === "profit-factor" && <StatsCounter value={2.41} decimals={2} />}
                    {m.id === "avg-rr" && <StatsCounter value={2.85} prefix="1:" decimals={2} />}
                    {m.id === "max-drawdown" && <StatsCounter value={4.8} suffix="%" decimals={1} />}
                    {m.id === "trades-executed" && <StatsCounter value={648} suffix="+" decimals={0} />}
                  </p>
                  <p className="style-copy-body text-[8px] text-white/40">
                    {m.verificationSource}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Regulatory Risk Disclosure */}
          <div className="pt-8 border-hairline-t">
            <p className="style-copy-body text-white/35 text-[8px] leading-[13px]">
              <strong>Risk Disclosure:</strong> Trading financial markets carries substantial risk of capital loss and is not appropriate for every participant. All historical performance data represents systematically documented trade journals with fixed 1.0% capital allocation under institutional clearing accounts. Nothing on this website constitutes financial advice or an offer to solicit capital.
            </p>
          </div>
        </div>

        {/* Right Column: 1-on-1 Mentorship & Direct Consultation Form */}
        <div className="lg:col-span-4 space-y-6 w-full max-w-full min-w-0">
          {/* Mentorship Direct WhatsApp Box */}
          <div className="border border-white/20 p-5 sm:p-6 bg-white/[0.03] overflow-hidden max-w-full">
            <span className="style-meta-tag block text-white/50 mb-1 text-[9px] tracking-[0.2em]">
              Private Advisory
            </span>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-2 break-words">
              1-on-1 Mentorship
            </h3>
            <p className="style-copy-body text-white/70 mb-5 leading-relaxed text-[12.5px]">
              Direct one-on-one mentorship covering institutional order delivery, liquidity engineering, and mathematical risk management. Direct desk WhatsApp: +92 315 6828906.
            </p>
            <div className="pt-2">
              <a
                href="https://wa.me/923156828906?text=Hello%20Eman,%20I%20am%20interested%20in%20your%201-on-1%20Trading%20Mentorship%20program."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-block"
                data-cursor="pointer"
                aria-label="Inquire via WhatsApp at +92 315 6828906"
              >
                <LiquidMetalButton
                  size="md"
                  className="w-full justify-center"
                  icon={<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse block" />}
                >
                  INQUIRE VIA WHATSAPP →
                </LiquidMetalButton>
              </a>
            </div>
          </div>

          <div className="border border-white/15 p-5 sm:p-8 bg-black overflow-hidden max-w-full">
            <span className="style-meta-tag block text-white/50 mb-2 text-[9px] tracking-[0.2em]">
              Direct Dossier
            </span>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-6 break-words">
              Initiate Contact
            </h3>

          {isSubmitted ? (
            <div className="py-10 space-y-3 text-center">
              <CheckCircle2 className="w-6 h-6 text-white mx-auto" />
              <p className="text-lg sm:text-xl font-bold text-white">
                Dossier Received.
              </p>
              <p className="style-copy-body text-white/60 text-xs">
                Inquiries are reviewed within 24–48 business hours.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="style-meta-tag text-white underline pt-4 block mx-auto tracking-[0.2em] text-[10px]"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Anti-spam honeypot */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="website_hp_infoview">Leave blank</label>
                <input
                  type="text"
                  id="website_hp_infoview"
                  name="website_hp"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formState.website_hp}
                  onChange={(e) => setFormState({ ...formState, website_hp: e.target.value })}
                />
              </div>

              {formError && (
                <div role="alert" className="p-2.5 bg-red-950/40 border border-red-500/50 text-red-300 text-xs">
                  {formError}
                </div>
              )}

              <div>
                <label htmlFor="contact-name" className="style-meta-tag block text-white/50 mb-1.5 text-[8.5px]">
                  Name / Entity *
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="e.g. Helena Vance / Sovereign Desk"
                  className="w-full bg-black border border-white/20 p-3 text-base sm:text-xs text-white placeholder:text-white/30 focus:border-white transition-colors rounded-none outline-none font-sans focus-visible:ring-1 focus-visible:ring-white"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="style-meta-tag block text-white/50 mb-1.5 text-[8.5px]">
                  Email Address *
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="helena@apexcapital.com"
                  className="w-full bg-black border border-white/20 p-3 text-base sm:text-xs text-white placeholder:text-white/30 focus:border-white transition-colors rounded-none outline-none font-sans focus-visible:ring-1 focus-visible:ring-white"
                />
              </div>

              <div>
                <label htmlFor="contact-subject" className="style-meta-tag block text-white/50 mb-1.5 text-[8.5px]">
                  Inquiry Nature
                </label>
                <select
                  id="contact-subject"
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  className="w-full bg-black border border-white/20 p-3 text-base sm:text-xs text-white focus:border-white transition-colors rounded-none outline-none font-sans cursor-pointer focus-visible:ring-1 focus-visible:ring-white"
                >
                  {socialsData.contact.inquiryTypes.map((type) => (
                    <option key={type} value={type} className="bg-black text-white">
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="contact-message" className="style-meta-tag block text-white/50 mb-1.5 text-[8.5px]">
                  Transmission Brief *
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Outline allocation terms or consultation parameters..."
                  className="w-full bg-black border border-white/20 p-3 text-base sm:text-xs text-white placeholder:text-white/30 focus:border-white transition-colors rounded-none outline-none font-sans resize-none focus-visible:ring-1 focus-visible:ring-white"
                />
              </div>

              {/* GDPR / Privacy Consent Checkbox */}
              <div className="flex items-start gap-2.5 pt-2">
                <input
                  type="checkbox"
                  id="privacy-consent"
                  required
                  className="mt-1 w-4 h-4 rounded-none border border-white/30 bg-black checked:bg-white accent-white focus-visible:ring-2 focus-visible:ring-white outline-none cursor-pointer shrink-0"
                />
                <label htmlFor="privacy-consent" className="style-copy-body text-[11px] text-white/70 leading-[16px] cursor-pointer select-none">
                  I consent to the collection and processing of my submitted details in accordance with the{" "}
                  <a href="/privacy" target="_blank" rel="noopener noreferrer" className="text-white underline hover:text-white/80">
                    Privacy Policy
                  </a>{" "}
                  for responding to this inquiry.
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 bg-white !text-black font-bold style-meta-tag text-[9.5px] tracking-[0.24em] hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 rounded-none cursor-pointer focus-visible:ring-2 focus-visible:ring-white outline-none"
                data-cursor="pointer"
              >
                <span className="!text-black font-bold">{isSubmitting ? "TRANSMITTING..." : "TRANSMIT DOSSIER"}</span>
                <ArrowRight className="w-3.5 h-3.5 text-black" aria-hidden="true" />
              </button>
            </form>
          )}

            <div className="pt-6 mt-6 border-hairline-t space-y-4">
              <button
                onClick={onBackToWork}
                className="style-meta-tag text-white/50 hover:text-white transition-colors text-[8.5px] block focus-visible:ring-1 focus-visible:ring-white outline-none"
              >
                ← Return to Project Showcase
              </button>

              <div className="flex flex-wrap gap-3 pt-2 text-[8px] style-meta-tag text-white/40">
                <a href="/privacy" className="hover:text-white">Privacy Policy</a>
                <span>•</span>
                <a href="/terms" className="hover:text-white">Terms</a>
                <span>•</span>
                <a href="/cookies" className="hover:text-white">Cookies</a>
                <span>•</span>
                <a href="/refund" className="hover:text-white">Refunds</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
