import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GCC Performance Marketing & Growth Agency | YOUR AGENCY NAME",
  description:
    "Premium GCC growth partner helping retail, fashion, app, eCommerce, lifestyle, and consumer brands scale through paid media, creative testing, AI content, SEO-focused websites, WhatsApp/email growth, and conversion optimization.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
