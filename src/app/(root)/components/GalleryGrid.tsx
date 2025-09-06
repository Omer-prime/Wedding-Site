import Section from "@/app/(root)/components/Section";
import Image from "next/image";
import { fallbackGallery } from "@/lib/site";

export default function GalleryGrid({ images = fallbackGallery }: { images?: {src: string; alt: string}[] }){
  return (
    <Section id="gallery">
      <div className="max-w-2xl">
        <h2 className="[font-family:var(--font-playfair)] text-3xl sm:text-4xl text-slate-900">Featured Gallery</h2>
        <p className="mt-3 text-slate-600">A glimpse of our soft, romantic style.</p>
      </div>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {images.map((g,i)=> (
          <div key={i} className="overflow-hidden rounded-xl shadow-soft">
            <Image src={g.src} alt={g.alt} width={1200} height={900} className="w-full h-64 object-cover hover:scale-[1.02] transition-transform" />
          </div>
        ))}
      </div>
    </Section>
  )
}