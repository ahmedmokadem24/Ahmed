import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RAYQ Marketing Agency | Performance Marketing & Growth",
  description:
    "Premium GCC growth partner helping brands scale through paid media, creative testing, AI content, websites, WhatsApp/email growth, and conversion optimization.",
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
