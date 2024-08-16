"use client"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import { ApolloProvider } from '@apollo/client';
const inter = Inter({ subsets: ["latin"] });
import client from '@/utils/apollo/ApolloClient';
import { ApolloProvider } from "@apollo/client";
import Navbar from '@/components/navbar'
import Footer from '@/components/Footer';
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>  <meta name="viewport" content="width=device-width, initial-scale=1.0" /></head>
      <body className={inter.className}>
      <ApolloProvider client={client}>
        <Navbar/>
        {children}
        <Footer/>
        </ApolloProvider>

        </body>
        
    </html>
  );
}
