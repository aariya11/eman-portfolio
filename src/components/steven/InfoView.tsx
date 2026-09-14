"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { performanceData } from "@/data/performance";
import { socialsData } from "@/data/socials";
import { CheckCircle2, Send } from "lucide-react";

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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="min-h-screen bg-black text-white pt-24 pb-32 px-6 md:px-12 max-w-[1080px] mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Main Narrative & Links Column */}
        <div className="lg:col-span-8 space-y-10">
          {/* Editorial Biography in Steven Mengin Italic Serif Style */}
          <div className="space-y-6">
            <p className="style-narrative">
              Eman is a London &amp; Dubai–based Market Analyst and Institutional Trader exploring the intersection of auction market theory, quantitative price structure, and disciplined execution. With eight years of continuous live market immersion across multiple macro cycles, her work merges concept, algorithmic order delivery, and psychological poise to navigate global financial markets. From intraday liquidity runs to macro yield curve mapping, Eman brings trade theses from structural hypothesis to execution, grounded in rigorous risk management and probabilistic objectivity.
            </p>

            <p className="style-narrative pt-4">
              <a
                href="mailto:desk@emantrades.com"
                className="text-white hover:text-white/70 transition-opacity underline decoration-white/30 underline-offset-4"
              >
                desk@emantrades.com
              </a>
            </p>
          </div>

          {/* Social Links List with > prefix */}
          <div className="space-y-2 pt-4">
            {socialsData.channels.map((ch) => (
              <p key={ch.id} className="style-narrative text-[22px]">
                <a
                  href={ch.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="style-link-press text-[20px] leading-relaxed"
                >
                  &gt; {ch.name}
                </a>
              </p>
            ))}
          </div>

          {/* Institutional Track Record Summary */}
          <div className="pt-12 border-t border-white/10 space-y-4">
            <span className="style-meta-uppercase text-white/50 block">
              Audited Statistical Ledger Summary (2023 – 2025)
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {performanceData.metrics.map((m) => (
                <div key={m.id} className="space-y-1">
                  <span className="style-meta-uppercase text-white/40 block">
                    {m.label}
                  </span>
                  <p className="font-serif italic text-2xl text-white">
                    {m.value}{m.unit || ""}
                  </p>
                  <p className="style-copy-8px text-white/40">
                    {m.verificationSource}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Regulatory Risk Disclaimer */}
          <div className="pt-8 border-t border-white/10">
            <p className="style-copy-8px text-white/40 leading-relaxed">
              <strong>Risk Disclosure:</strong> Trading financial markets carries substantial risk of capital loss and is not appropriate for every participant. All historical performance data represents systematically documented trade journals with fixed 1.0% capital allocation under institutional clearing accounts. Nothing on this website constitutes financial advice or an offer to solicit capital.
            </p>
          </div>
        </div>

        {/* Right Column: Direct Consultation Form */}
        <div className="lg:col-span-4 border border-white/10 p-6 md:p-8 bg-black/60">
          <span className="style-meta-uppercase text-white/50 block mb-2">
            Direct Dossier
          </span>
          <h3 className="font-serif italic text-2xl text-white mb-6">
            Initiate Contact
          </h3>

          {isSubmitted ? (
            <div className="py-8 space-y-3 text-center">
              <CheckCircle2 className="w-6 h-6 text-white mx-auto" />
              <p className="style-narrative text-lg text-white">
                Dossier Received.
              </p>
              <p className="style-copy-8px text-white/60">
                Communications are reviewed within 24–48 business hours.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="style-meta-uppercase text-white underline pt-4 block mx-auto"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="style-meta-uppercase text-white/50 block mb-1">
                  Name / Entity
                </label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="e.g. Helena Vance / Sovereign Asset Desk"
                  className="w-full bg-black border border-white/20 p-2.5 text-xs text-white placeholder:text-white/30 focus:border-white transition-colors"
                />
              </div>

              <div>
                <label className="style-meta-uppercase text-white/50 block mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="helena@apexcapital.com"
                  className="w-full bg-black border border-white/20 p-2.5 text-xs text-white placeholder:text-white/30 focus:border-white transition-colors"
                />
              </div>

              <div>
                <label className="style-meta-uppercase text-white/50 block mb-1">
                  Inquiry Nature
                </label>
                <select
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  className="w-full bg-black border border-white/20 p-2.5 text-xs text-white focus:border-white transition-colors"
                >
                  {socialsData.contact.inquiryTypes.map((type) => (
                    <option key={type} value={type} className="bg-black text-white">
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="style-meta-uppercase text-white/50 block mb-1">
                  Transmission Brief
                </label>
                <textarea
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Outline allocation terms or consultation parameters..."
                  className="w-full bg-black border border-white/20 p-2.5 text-xs text-white placeholder:text-white/30 focus:border-white transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-white text-black style-meta-uppercase text-[9px] font-bold tracking-widest hover:bg-white/90 transition-colors flex items-center justify-center gap-2"
                data-cursor="pointer"
              >
                <span>{isSubmitting ? "TRANSMITTING..." : "TRANSMIT DOSSIER"}</span>
                <Send className="w-3 h-3" />
              </button>
            </form>
          )}

          <div className="pt-6 mt-6 border-t border-white/10">
            <button
              onClick={onBackToWork}
              className="style-meta-uppercase text-white/40 hover:text-white transition-colors text-[8px]"
            >
              ← Return to Project Showcase
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
