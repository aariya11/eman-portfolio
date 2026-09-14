"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { performanceData } from "@/data/performance";
import { socialsData } from "@/data/socials";
import { CheckCircle2, ArrowRight } from "lucide-react";

interface InfoViewProps {
  onBackToWork: () => void;
}

export function InfoView({ onBackToWork }: InfoViewProps) {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: socialsData.contact.inquiryTypes[0],
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="min-h-screen bg-black text-white pt-28 pb-32 px-6 md:px-12 max-w-[1080px] mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
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
                    {m.value}{m.unit || ""}
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

        {/* Right Column: Direct Consultation Form */}
        <div className="lg:col-span-4 border border-white/10 p-6 md:p-8 bg-black">
          <span className="style-meta-tag block text-white/40 mb-2">
            Direct Dossier
          </span>
          <h3 className="font-editorial italic text-2xl font-light text-white mb-6">
            Initiate Contact
          </h3>

          {isSubmitted ? (
            <div className="py-10 space-y-3 text-center">
              <CheckCircle2 className="w-5 h-5 text-white/80 mx-auto" />
              <p className="font-editorial italic text-xl text-white">
                Dossier Received.
              </p>
              <p className="style-copy-body text-white/50 text-[8.5px]">
                Communications are reviewed within 24–48 business hours.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="style-meta-tag text-white underline pt-4 block mx-auto tracking-[0.2em]"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="style-meta-tag block text-white/40 mb-1.5 text-[7.5px]">
                  Name / Entity
                </label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="e.g. Helena Vance / Sovereign Desk"
                  className="w-full bg-black border border-white/15 p-2.5 text-xs text-white placeholder:text-white/20 focus:border-white/60 transition-colors rounded-none outline-none font-sans"
                />
              </div>

              <div>
                <label className="style-meta-tag block text-white/40 mb-1.5 text-[7.5px]">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="helena@apexcapital.com"
                  className="w-full bg-black border border-white/15 p-2.5 text-xs text-white placeholder:text-white/20 focus:border-white/60 transition-colors rounded-none outline-none font-sans"
                />
              </div>

              <div>
                <label className="style-meta-tag block text-white/40 mb-1.5 text-[7.5px]">
                  Inquiry Nature
                </label>
                <select
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  className="w-full bg-black border border-white/15 p-2.5 text-xs text-white focus:border-white/60 transition-colors rounded-none outline-none font-sans cursor-pointer"
                >
                  {socialsData.contact.inquiryTypes.map((type) => (
                    <option key={type} value={type} className="bg-black text-white">
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="style-meta-tag block text-white/40 mb-1.5 text-[7.5px]">
                  Transmission Brief
                </label>
                <textarea
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Outline allocation terms or consultation parameters..."
                  className="w-full bg-black border border-white/15 p-2.5 text-xs text-white placeholder:text-white/20 focus:border-white/60 transition-colors rounded-none outline-none font-sans resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-white text-black style-meta-tag text-[8.5px] font-bold tracking-[0.24em] hover:bg-white/90 transition-colors flex items-center justify-center gap-2 rounded-none"
                data-cursor="pointer"
              >
                <span>{isSubmitting ? "TRANSMITTING..." : "TRANSMIT DOSSIER"}</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </form>
          )}

          <div className="pt-6 mt-6 border-hairline-t">
            <button
              onClick={onBackToWork}
              className="style-meta-tag text-white/35 hover:text-white transition-colors text-[7.5px]"
            >
              ← Return to Project Showcase
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
