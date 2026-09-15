"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { socialsData } from "@/data/socials";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    inquiryType: socialsData.contact.inquiryTypes[0],
    message: "",
    consent: false,
    honeypot: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const mountTimeRef = useRef<number>(Date.now());

  useEffect(() => {
    mountTimeRef.current = Date.now();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // 1. Anti-Spam Honeypot Verification
    if (formState.honeypot) {
      console.warn("Spam detected via honeypot.");
      setIsSubmitted(true);
      return;
    }

    // 2. Submission Velocity Verification (reject sub-second bot automated submissions)
    const elapsedMs = Date.now() - mountTimeRef.current;
    if (elapsedMs < 1200) {
      console.warn("Submission velocity below threshold.");
      setIsSubmitted(true);
      return;
    }

    // 3. Name Validation
    if (!formState.name.trim() || formState.name.trim().length < 2) {
      setErrorMessage("Please enter your full name or entity title.");
      return;
    }

    // 4. Email Regex Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formState.email.trim())) {
      setErrorMessage("Please provide a valid corporate or personal email address.");
      return;
    }

    // 5. Message Length Validation
    if (!formState.message.trim() || formState.message.trim().length < 10) {
      setErrorMessage("Please outline your inquiry in at least 10 characters.");
      return;
    }

    // 6. Consent Verification
    if (!formState.consent) {
      setErrorMessage("You must acknowledge the Privacy Policy to submit your transmission.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate secure transmission or endpoint dispatch
      await new Promise((resolve) => setTimeout(resolve, 1100));
      setIsSubmitting(false);
      setIsSubmitted(true);
    } catch {
      setIsSubmitting(false);
      setErrorMessage("A transmission error occurred. Please try again or reach the desk directly via WhatsApp.");
    }
  };

  const handleReset = () => {
    setFormState({
      name: "",
      email: "",
      inquiryType: socialsData.contact.inquiryTypes[0],
      message: "",
      consent: false,
      honeypot: "",
    });
    setErrorMessage(null);
    setIsSubmitted(false);
    mountTimeRef.current = Date.now();
  };

  if (isSubmitted) {
    return (
      <div className="py-12 px-6 text-center space-y-4 border border-emerald-500/30 bg-emerald-950/10">
        <div className="w-12 h-12 rounded-full border border-emerald-500/40 bg-emerald-950/40 text-emerald-400 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h3 className="style-hero-name text-2xl text-white">Dossier Transmitted</h3>
        <p className="style-copy-body text-xs text-white/70 max-w-sm mx-auto leading-relaxed">
          Your transmission has been logged. Senior desk analysts review institutional inquiries within 24 to 48 business hours.
        </p>
        <div className="pt-2">
          <button
            onClick={handleReset}
            className="style-meta-tag text-xs text-white underline tracking-wider uppercase hover:text-white/70 transition-colors"
          >
            ← Transmit Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      {/* Honeypot Field (hidden from screen readers & real users) */}
      <div aria-hidden="true" className="hidden" style={{ display: "none" }}>
        <label htmlFor="website_hp">Do not fill this field</label>
        <input
          type="text"
          id="website_hp"
          name="website_hp"
          tabIndex={-1}
          autoComplete="off"
          value={formState.honeypot}
          onChange={(e) => setFormState({ ...formState, honeypot: e.target.value })}
        />
      </div>

      {/* Error Message Alert */}
      {errorMessage && (
        <div
          role="alert"
          className="p-3 bg-rose-950/40 border border-rose-500/50 text-rose-300 text-xs flex items-center gap-2"
        >
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Full Name */}
      <div className="space-y-1.5">
        <label htmlFor="contact-name" className="style-meta-tag text-[8px] text-white/50 block uppercase">
          Full Name / Entity *
        </label>
        <input
          id="contact-name"
          type="text"
          required
          value={formState.name}
          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
          placeholder="E.g., Alexander Vance"
          className="w-full bg-black border border-white/20 p-3 text-base sm:text-xs text-white placeholder:text-white/30 focus:border-white transition-colors outline-none font-sans"
        />
      </div>

      {/* Email Address */}
      <div className="space-y-1.5">
        <label htmlFor="contact-email" className="style-meta-tag text-[8px] text-white/50 block uppercase">
          Corporate / Personal Email *
        </label>
        <input
          id="contact-email"
          type="email"
          required
          value={formState.email}
          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
          placeholder="operator@fund.com"
          className="w-full bg-black border border-white/20 p-3 text-base sm:text-xs text-white placeholder:text-white/30 focus:border-white transition-colors outline-none font-sans"
        />
      </div>

      {/* Inquiry Purpose */}
      <div className="space-y-1.5">
        <label htmlFor="contact-type" className="style-meta-tag text-[8px] text-white/50 block uppercase">
          Inquiry Purpose *
        </label>
        <select
          id="contact-type"
          value={formState.inquiryType}
          onChange={(e) => setFormState({ ...formState, inquiryType: e.target.value })}
          className="w-full bg-black border border-white/20 p-3 text-base sm:text-xs text-white focus:border-white transition-colors outline-none font-sans cursor-pointer"
        >
          {socialsData.contact.inquiryTypes.map((type) => (
            <option key={type} value={type} className="bg-black text-white">
              {type}
            </option>
          ))}
        </select>
      </div>

      {/* Parameters or Questions */}
      <div className="space-y-1.5">
        <label htmlFor="contact-message" className="style-meta-tag text-[8px] text-white/50 block uppercase">
          Parameters or Questions *
        </label>
        <textarea
          id="contact-message"
          required
          rows={4}
          value={formState.message}
          onChange={(e) => setFormState({ ...formState, message: e.target.value })}
          placeholder="Outline your background, markets traded, and objectives..."
          className="w-full bg-black border border-white/20 p-3 text-base sm:text-xs text-white placeholder:text-white/30 focus:border-white transition-colors outline-none font-sans resize-none"
        />
      </div>

      {/* Form Consent Checkbox */}
      <div className="pt-2 flex items-start gap-3">
        <input
          id="contact-consent"
          type="checkbox"
          checked={formState.consent}
          onChange={(e) => setFormState({ ...formState, consent: e.target.checked })}
          className="mt-1 w-4 h-4 rounded-none bg-black border border-white/30 checked:bg-white checked:border-white accent-white cursor-pointer"
        />
        <label htmlFor="contact-consent" className="style-copy-body text-[11px] text-white/60 leading-normal cursor-pointer select-none">
          I consent to the collection and processing of my submitted details in accordance with the{" "}
          <Link href="/privacy" className="text-white underline hover:text-white/80">
            Privacy Policy
          </Link>{" "}
          for responding to this inquiry.
        </label>
      </div>

      {/* Submit Button with Loading State */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 bg-white !text-black font-bold text-xs tracking-[0.2em] uppercase hover:bg-neutral-200 disabled:opacity-60 disabled:cursor-not-allowed transition-colors mt-4 flex items-center justify-center gap-2 outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin text-black" />
            <span>TRANSMITTING DOSSIER...</span>
          </>
        ) : (
          <span>Transmit Inquiry →</span>
        )}
      </button>
    </form>
  );
}

export default ContactForm;
