import Hero from "@/app/(root)/components/Hero";
import Collections from "@/app/(root)/components/Collections";
import GalleryGrid from "@/app/(root)/components/GalleryGrid";
import Process from "@/app/(root)/components/Process";
import Testimonials from "@/app/(root)/components/Testimonials";
import Awards from "@/app/(root)/components/Awards";
import FAQ from "@/app/(root)/components/FAQ";
import Section from "@/app/(root)/components/Section";
import ContactForm from "@/app/(root)/components/ContactForm";
import Image from "next/image";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Collections />
      <GalleryGrid />
      <Process />
      <Testimonials />
      <Awards />
      <FAQ />
      <Section id="contact">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="[font-family:var(--font-playfair)] text-3xl sm:text-4xl text-slate-900">Let’s Make Something Beautiful</h2>
            <p className="mt-3 text-slate-600">Tell us about your date and vision. We’ll get back within 24 hours.</p>
            <div className="mt-6"><ContactForm /></div>
          </div>
          <div className="lg:pl-8">
            <div className="rounded-2xl border border-slate-200 p-6 shadow-soft bg-white">
              <h3 className="[font-family:var(--font-playfair)] text-2xl text-slate-900">Why couples choose us</h3>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-3"><span className="mt-1 inline-flex w-6 h-6 items-center justify-center rounded-full bg-blush-100 text-blush-600">♥</span><span className="text-slate-700">Clean white backgrounds & airy edits</span></li>
                <li className="flex items-start gap-3"><span className="mt-1 inline-flex w-6 h-6 items-center justify-center rounded-full bg-blush-100 text-blush-600">♥</span><span className="text-slate-700">Gentle posing and authentic moments</span></li>
                <li className="flex items-start gap-3"><span className="mt-1 inline-flex w-6 h-6 items-center justify-center rounded-full bg-blush-100 text-blush-600">♥</span><span className="text-slate-700">High-resolution delivery & albums</span></li>
              </ul>
              <div className="relative h-72 overflow-hidden rounded-2xl">
                <Image
                  src="/image.jpg"
                  alt="Soft portrait"
                  fill
                  sizes="(min-width:1024px) 700px, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>
    </main>
  )
}