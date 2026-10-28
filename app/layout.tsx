import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsApp from "@/components/WhatsApp";

export const metadata: Metadata = {
  title: {
    default: "Farral Sourcing Pakistan",
    template: "%s | Farral Sourcing Pakistan",
  },
  description:
    "Farral Sourcing Pakistan — textile sourcing, quality control and product development for bedding, towels, hospitality, apparel and garments.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsApp />
      </body>
    </html>
  );
}
