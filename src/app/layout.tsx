import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./(root)/components/Navbar";
import Footer from "./(root)/components/Footer";
import Providers from "@/providers/session";

export const metadata: Metadata = {
  title: "Cinematics By Taha",
  description: "Fine-art, romantic photo shoots with soft light and timeless edits.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Fonts via runtime <link> so build doesn't fetch them */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Parisienne&family=Playfair+Display:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white text-slate-800 antialiased">
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              const observer=new IntersectionObserver((e)=>{e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('show');observer.unobserve(x.target)}})},{threshold:.15});
              document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
            `,
          }}
        />
      </body>
    </html>
  );
}
