import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import RemoveInjectedAttributes from "@/components/RemoveInjectedAttributes";

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Azriel Winnermore Zebua | Informatics Student",
  description:
    "Personal portfolio showcasing projects, skills, experience, and contact information.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${jetbrainsMono.variable} h-full scroll-smooth`}
    >
      <body suppressHydrationWarning className="min-h-full antialiased">
        <RemoveInjectedAttributes />
        {children}
      </body>
    </html>
  );
}
