"use client";
import Image from "next/image";
import Button from "@/app/(root)/components/Button";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="pointer-events-none absolute -top-32 -left-32 w-[36rem] h-[36rem] rounded-full bg-blush-100 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 w-[30rem] h-[30rem] rounded-full bg-blush-50 blur-3xl" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-24">
        <div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-10 items-center">
          <div className="reveal show">
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blush-600">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 21s-6.716-4.59-9.428-8.23C.126 10.14 1.128 6 5.143 6 7.2 6 9 7.5 12 10.5 15 7.5 16.8 6 18.857 6c4.015 0 5.017 4.14 2.571 6.77C18.716 16.41 12 21 12 21z" />
              </svg>
              award-winning romantic photography
            </p>
            <h1 className="mt-4 [font-family:var(--font-playfair)] text-5xl sm:text-6xl lg:text-7xl leading-[1.05] text-slate-900">
              Timeless{" "}
              <span className="relative">
                <span className="absolute -inset-1 -z-10 rounded-3xl bg-blush-200/60 blur-xl"></span>
                Love Stories
              </span>
              <br className="hidden sm:block" /> in Soft Light
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-slate-600 max-w-2xl">
              Clean white backgrounds, airy tones, and gentle direction—crafted for couples who want elegance that lasts a lifetime.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button href="/contact">Book Your Date</Button>
              <Button href="/gallery" variant="outline">
                Explore Gallery
              </Button>
            </div>
          </div>

          {/* Right visuals */}
          <div className="relative">
            <span className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-blush-100 blur-2xl"></span>

            {/* main card */}
            <div className="polaroid overflow-hidden rounded-[22px]">
              <div className="relative h-[32rem] sm:h-[36rem]">
                <Image
                  src="/image11.jpg"
                  alt="Romantic couple in soft daylight"
                  fill
                  sizes="(min-width:1024px) 40vw, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* small left floating card (absolute wrapper -> inner relative for Image) */}
            <div className="polaroid overflow-hidden w-40 sm:w-56 absolute -left-6 sm:-left-10 -bottom-8 -rotate-6 floaty">
              <div className="relative h-56 sm:h-64">
                <Image
                  src="/image12.jpg"
                  alt="Bouquet close-up"
                  fill
                  sizes="200px"
                  className="object-cover"
                />
              </div>
            </div>

            {/* small right floating card */}
            <div className="polaroid overflow-hidden w-40 sm:w-56 absolute -right-6 sm:-right-10 -top-8 rotate-6 floaty" style={{ animationDelay: "1s" }}>
              <div className="relative h-56 sm:h-64">
                <Image
                  src="/image13.jpg"
                  alt="Bridal details"
                  fill
                  sizes="200px"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="absolute -right-3 sm:-right-5 bottom-16 sm:bottom-24 bg-white/90 backdrop-blur border border-slate-100 shadow-soft rounded-full px-4 py-2 flex items-center gap-2">
              <span className="text-blush-600">★</span>
              <span className="text-xs font-medium text-slate-700">Best Romantic Studio ‘25</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
