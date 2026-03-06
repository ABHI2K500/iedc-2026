import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Habitline - Build habits that actually stick",
  description:
    "You see the right habits at the right time so your day never feels crowded. Track what matters, stay organized, and improve at your own pace.",
  openGraph: {
    title: "Habitline - Build habits that actually stick",
    description:
      "Launch your health or wellness app faster with this modern template designed for startups and digital health platforms.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
