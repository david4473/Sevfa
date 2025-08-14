import type { Metadata } from "next";
import { Geist, Geist_Mono, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Savfa",
  description: "Strength, Confidence, & Movement!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cormorantGaramond.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
