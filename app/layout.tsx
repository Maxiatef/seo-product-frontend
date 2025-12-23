import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "ATTRACT Gaming Gear - High-Performance Gaming Equipment",
  description: "Discover top-tier gaming gear at ATTRACT. From precision mice to immersive headsets, level up your gaming experience with our high-performance equipment.",
  keywords: "gaming gear, gaming mouse, keyboard, headset, gaming accessories",
  authors: [{ name: "ATTRACT Gaming Gear" }],
  openGraph: {
    title: "ATTRACT Gaming Gear - High-Performance Gaming Equipment",
    description: "Discover top-tier gaming gear at ATTRACT. From precision mice to immersive headsets, level up your gaming experience with our high-performance equipment.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ATTRACT Gaming Gear - High-Performance Gaming Equipment",
    description: "Discover top-tier gaming gear at ATTRACT. From precision mice to immersive headsets, level up your gaming experience with our high-performance equipment.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">
        {children}
        <Footer />
      </body>
    </html>
  );
}
