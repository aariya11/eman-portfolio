"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { socialsData } from "@/data/socials";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { CheckCircle2, Send, Mail, MapPin, ShieldCheck, Clock } from "lucide-react";

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: socialsData.contact.inquiryTypes[0],
    message: "",
    honeypot: "", // anti-spam trap
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
    if (errorMessage) setErrorMessage("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Spam bot check
    if (formState.honeypot) {
      return;
    }

    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      setErrorMessage("Please fulfill all required fields before dispatching enquiry.");
      return;
    }

    // Basic email pattern check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formState.email)) {
      setErrorMessage("Please supply a valid institutional or personal email address.");
      return;
    }

    setIsSubmitting(true);

    // Simulate luxury dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: "",
        email: "",
        subject: socialsData.contact.inquiryTypes[0],
        message: "",
        honeypot: "",
      });
    }, 1200);
  };

  return (
    <section
      id="contact"
      className="relative py-32 px-6 md:px-12 bg-obsidian-950 border-t border-white/5"
      aria-label="Contact and Inquiries"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Editorial Headline & Consultation Terms */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="font-mono text-xs tracking-[0.3em] text-champagne uppercase block mb-3">
                09 // DIRECT ENGAGEMENT
              </span>
              <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl text-ivory tracking-tight font-normal leading-[1.05] mb-4">
                {socialsData.contact.sectionTitle}
              </h2>
              <p className="font-sans text-base text-ivory-muted leading-relaxed font-light">
                {socialsData.contact.subtext}
              </p>
            </div>

            {/* Direct Telemetry Badges */}
            <div className="space-y-4 pt-4 border-t border-white/10">
              <div className="flex items-center gap-3 text-xs font-mono text-ivory-muted">
                <MapPin className="w-4 h-4 text-champagne shrink-0" />
                <span>{socialsData.contact.location}</span>
              </div>

              <div className="flex items-center gap-3 text-xs font-mono text-ivory-muted">
                <Clock className="w-4 h-4 text-champagne shrink-0" />
                <span>{socialsData.contact.responseExpectation}</span>
              </div>

              <div className="flex items-center gap-3 text-xs font-mono text-ivory-muted">
                <ShieldCheck className="w-4 h-4 text-champagne shrink-0" />
                <span>Encrypted & Confidential Institutional Channel</span>
              </div>
            </div>

            <div className="p-5 bg-obsidian-900 border border-white/5 rounded-sm">
              <p className="font-serif italic text-sm text-ivory/80 leading-relaxed">
                &ldquo;High conviction requires high discretion. Every communication is treated with utmost institutional confidentiality.&rdquo;
              </p>
            </div>
          </div>

          {/* Right Column: Luxury Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 md:p-12 bg-obsidian-900 border border-white/10 rounded-sm shadow-2xl relative">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-16 text-center space-y-4"
                >
                  <div className="w-12 h-12 rounded-full bg-champagne/10 border border-champagne flex items-center justify-center mx-auto text-champagne">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-3xl text-ivory">Enquiry Transmitted</h3>
                  <p className="font-sans text-sm text-ivory-muted max-w-md mx-auto leading-relaxed">
                    Thank you. Your dossier has been routed directly to Eman&apos;s executive desk. Expect a formal response within 24 to 48 business hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="font-mono text-xs text-champagne hover:underline pt-4 block mx-auto"
                  >
                    TRANSMIT ANOTHER ENQUIRY
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  {/* Honeypot field (hidden from real users) */}
                  <input
                    type="text"
                    name="honeypot"
                    value={formState.honeypot}
                    onChange={handleChange}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  {/* Error Notification */}
                  {errorMessage && (
                    <div className="p-4 bg-rose-950/40 border border-rose-500/40 rounded-sm text-rose-300 text-xs font-mono">
                      {errorMessage}
                    </div>
                  )}

                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="font-mono text-[10px] tracking-widest text-ivory-dim uppercase block"
                      >
                        NAME / INSTITUTION *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="e.g. Helena Vance / Apex Capital"
                        className="w-full px-4 py-3.5 bg-obsidian-950 border border-white/10 rounded-sm text-ivory font-sans text-sm placeholder:text-ivory-dim/50 focus:border-champagne transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="font-mono text-[10px] tracking-widest text-ivory-dim uppercase block"
                      >
                        EMAIL ADDRESS *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="helena@apexcapital.com"
                        className="w-full px-4 py-3.5 bg-obsidian-950 border border-white/10 rounded-sm text-ivory font-sans text-sm placeholder:text-ivory-dim/50 focus:border-champagne transition-colors"
                      />
                    </div>
                  </div>

                  {/* Subject / Category Dropdown */}
                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="font-mono text-[10px] tracking-widest text-ivory-dim uppercase block"
                    >
                      NATURE OF ENQUIRY *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 bg-obsidian-950 border border-white/10 rounded-sm text-ivory font-sans text-sm focus:border-champagne transition-colors cursor-pointer"
                    >
                      {socialsData.contact.inquiryTypes.map((type) => (
                        <option key={type} value={type} className="bg-obsidian-950 text-ivory">
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message Field */}
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="font-mono text-[10px] tracking-widest text-ivory-dim uppercase block"
                    >
                      COMMUNICATION DOSSIER *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="Outline your proposal, allocation parameters, or consultation requirements..."
                      className="w-full px-4 py-3.5 bg-obsidian-950 border border-white/10 rounded-sm text-ivory font-sans text-sm placeholder:text-ivory-dim/50 focus:border-champagne transition-colors resize-y"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-ivory text-obsidian font-mono text-xs font-semibold tracking-widest uppercase hover:bg-champagne transition-colors flex items-center justify-center gap-2 rounded-sm shadow-xl disabled:opacity-50"
                      data-cursor="pointer"
                    >
                      {isSubmitting ? (
                        <span>TRANSMITTING DOSSIER...</span>
                      ) : (
                        <>
                          <span>SEND ENQUIRY</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
