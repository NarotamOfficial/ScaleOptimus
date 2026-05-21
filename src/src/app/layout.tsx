import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Scale Optimus | Corporate Business Calculators & Financial Insight Systems",
  description: "Enterprise algorithmic performance analysis. Compute precision gross margins, target project asset pricing matrices, multi-tiered break-even models, investment ROI indices, and growth compounding intervals instantly.",
  metadataBase: new URL("https://scaleoptimus.com"),
  keywords: ["profit margin calculator", "enterprise SaaS metrics", "business financial calculator", "pricing optimizer", "freelancer premium billable calculator", "corporate ROI index", "break even point calculation system"],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Scale Optimus | High-Performance Enterprise Business Optimization Matrix",
    description: "Eliminate spreadsheet guesswork. Evaluate corporate capital data vectors through deterministic multi-variable financial engines with optional asynchronous minimalist AI executive explanations.",
    url: "https://scaleoptimus.com",
    siteName: "Scale Optimus",
    locale: "en_US",
    type: "website",
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-zinc-950 text-zinc-50 min-h-screen flex flex-col selection:bg-indigo-600 selection:text-white relative`}>
        <div className="absolute inset-0 futuristic-grid pointer-events-none z-0" />
        <Navbar />
        <main className="flex-grow z-10 relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
