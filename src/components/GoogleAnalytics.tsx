import Script from "next/script";
import React from "react";

const GoogleAnalytics = ({ mID }: { mID: string }) => {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${mID}`}
        strategy="afterInteractive"
      />
      <Script strategy="afterInteractive" id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', '${mID}');
        `}
      </Script>
    </>
  );
};

export default GoogleAnalytics;
