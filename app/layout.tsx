import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Ricky Githinji | Web Developer",
  description:
    "Professional websites and web applications for businesses and professional services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-neutral-950 antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
