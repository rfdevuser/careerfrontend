"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import client from '@/utils/apollo/ApolloClient';
import { ApolloProvider } from "@apollo/client";
import Navbar from '@/components/navbar';
import Footer from '@/components/Footer';
import Script from 'next/script';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Google Analytics Script */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-W5KD9PY47J"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-W5KD9PY47J');
          `}
        </Script>
      </head>

      <body className={inter.className}>
        <ApolloProvider client={client}>
          <Navbar />
          {children}
          <Footer />
        </ApolloProvider>
      </body>
    </html>
  );
}
