"use client";

import React, { useEffect, useState } from "react";
import Script from "next/script";

export function Analytics() {
  const [hasConsent, setHasConsent] = useState(false);
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  useEffect(() => {
    // Check if user granted cookie consent
    const checkConsent = () => {
      if (typeof window !== "undefined") {
        const consent = localStorage.getItem("eman_cookie_consent");
        if (consent === "accepted") {
          setHasConsent(true);
        }
      }
    };

    checkConsent();
    window.addEventListener("storage", checkConsent);
    return () => window.removeEventListener("storage", checkConsent);
  }, []);

  // If no tracking ID is provided or user has not accepted non-essential tracking, do not load scripts
  if (!gaId || !hasConsent) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}', {
            page_path: window.location.pathname,
            anonymize_ip: true,
          });
        `}
      </Script>
    </>
  );
}
