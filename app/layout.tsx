/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from "next";
import Head from "next/head";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/main.css";
import "./assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "./assets/vendor/aos/aos.css";
import "./assets/vendor/glightbox/css/glightbox.min.css";

// Gunakan font dengan lebih efisien
const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Landing Page",
  description: "",
  keywords: "",
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <Head>

        {/* Favicon */}
        <link rel="icon" href="/assets/img/favicon.png" />
        <link rel="apple-touch-icon" href="/assets/img/apple-touch-icon.png" />

        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&family=Poppins:wght@100;200;300;400;500;600;700;800;900&family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className={`index-page ${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <Script src="./assets/vendor/bootstrap/js/bootstrap.bundle.min.js" strategy="beforeInteractive" />
        <Script src="./assets/vendor/php-email-form/validate.js" strategy="lazyOnload" />
        <Script src="./assets/vendor/aos/aos.js" strategy="lazyOnload" />
        <Script src="./assets/vendor/glightbox/js/glightbox.min.js" strategy="lazyOnload" />
        <Script src="./assets/js/main.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
