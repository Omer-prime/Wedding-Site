"use client";
import Section from "@/app/(root)/components/Section";
import Image from "next/image";

const cards = [
  { title: "The Prelude", img: "/image14.jpg", desc: "Engagement session with styling guide and location scouting.", bullets:["2 hours coverage","40+ retouched images","Online gallery"]},
  { title: "The Vow", img: "/image15.jpg", desc: "Wedding day storytelling with signature airy edits.", bullets:["6 hours coverage","150+ retouched images","Print-ready files"]},
  { title: "Forever & Always", img: "/image16.jpg", desc: "Full-day coverage with album design and second shooter.", bullets:["10 hours coverage","Heirloom album","Priority delivery"]},
];

export default function Collections(){
  return (
    <Section>
      <div className="max-w-2xl">
        <h2 className="[font-family:var(--font-playfair)] text-3xl sm:text-4xl text-slate-900">Signature Collections</h2>
        <p className="mt-3 text-slate-600">Curated experiences designed for effortless elegance.</p>
      </div>
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map(c => (
          <div key={c.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft hover:shadow-[0_24px_60px_-12px_rgba(16,24,40,.18)] transition">
            <div className="overflow-hidden rounded-xl relative aspect-[4/3]">
              <Image
                src={c.img}
                alt={c.title}
                fill
                sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                className="object-cover"
                priority={false}
              />
            </div>
            <h3 className="mt-5 [font-family:var(--font-playfair)] text-2xl text-slate-900">{c.title}</h3>
            <p className="mt-2 text-slate-600 text-sm">{c.desc}</p>
            <ul className="mt-4 text-sm text-slate-600 space-y-2">{c.bullets.map(b => <li key={b}>♥ {b}</li>)}</ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
