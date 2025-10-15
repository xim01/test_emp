import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";
import { Lato } from "next/font/google";
import Footer from "./components/Footer/Footer";
import { Raleway } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-raleway",
});

export const metadata: Metadata = {
  title: "Test App",
  description: "Test App Description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${lato.variable} ${raleway.variable}`}>
      <body>
        <div id="main">
          <Header />
          <main>
            <div id="main_wrapper">{children}</div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
