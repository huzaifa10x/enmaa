import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";
import FloatingSocials from "./components/FloatingSocials";
import { DialogProvider } from "@/context/DialogContex";
import ScrollAnimationProvider from "./components/ScrollAnimationProvider";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

const productSans = localFont({
  src: "../public/fonts/ProductSans-Medium.ttf",
  variable: "--font-product-sans",
  display: "swap",
});

export const metadata = {
  title: "Enmaa Engineering Consultants",
  description: "Enmaa Engineering Consultants Was Established In 2015 By Experienced Group Of Engineers & Launched A Quick & Deliberate, Move To Contribute In Building A Real Estate Market, Including Towers, Commercial Buildings, Sheds, Villas, Factories & Schools.",
};

export default async function RootLayout({ children, params }) {

  const isArabic = params.lang === "ar";

  return (
    <html lang={isArabic ? "ar" : "en"} dir={isArabic ? "rtl" : "ltr"}>
      <head>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MSWQQTJ');
          `}
        </Script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${productSans.variable} antialiased`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MSWQQTJ"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* <SmoothScroll> */}
          <FloatingSocials />
          <DialogProvider>
            {/* <ScrollAnimationProvider> */}
              {children}
            {/* </ScrollAnimationProvider> */}
          </DialogProvider>
        {/* </SmoothScroll> */}
      </body>
    </html>
  );
}