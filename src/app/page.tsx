// src/app/page.tsx
import Hero from "./(root)/components/Hero";
import Collections from "./(root)/components/Collections";
import GalleryGrid from "./(root)/components/GalleryGrid";
import Process from "./(root)/components/Process";
import Testimonials from "./(root)/components/Testimonials";
import Awards from "./(root)/components/Awards";
import FAQ from "./(root)/components/FAQ";
import ContactForm from "./(root)/components/ContactForm";

// If your layout already renders Navbar/Footer, we just return the page sections here.
export const metadata = { title: "Cinematics By Taha" };

export default function Home() {
  return (
    <main>
      <Hero />
      <Collections />
      <GalleryGrid />
      <Process />
      <Testimonials />
      <Awards />
      <FAQ />

      {/* Contact section (inline, so we don't rely on <Section/> import here) */}
      <section id="contact" className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <h2 className="[font-family:var(--font-playfair)] text-3xl sm:text-4xl text-slate-900">
                Let’s Make Something Beautiful
              </h2>
              <p className="mt-3 text-slate-600">
                Tell us about your date and vision. We’ll get back within 24 hours.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>

            <div className="lg:pl-8">
              <div className="rounded-2xl border border-slate-200 p-6 shadow-soft bg-white">
                <h3 className="[font-family:var(--font-playfair)] text-2xl text-slate-900">
                  Why couples choose us
                </h3>
                <ul className="mt-4 space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-flex w-6 h-6 items-center justify-center rounded-full bg-blush-100 text-blush-600">
                      ♥
                    </span>
                    <span className="text-slate-700">Clean white backgrounds & airy edits</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-flex w-6 h-6 items-center justify-center rounded-full bg-blush-100 text-blush-600">
                      ♥
                    </span>
                    <span className="text-slate-700">Gentle posing and authentic moments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-flex w-6 h-6 items-center justify-center rounded-full bg-blush-100 text-blush-600">
                      ♥
                    </span>
                    <span className="text-slate-700">High-resolution delivery & albums</span>
                  </li>
                </ul>

                <div className="mt-8 overflow-hidden rounded-2xl shadow-soft relative h-72">
                  {/* optional hero image here if you want */}
                  {/* You already use next/image inside Hero; keeping this empty is fine */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
