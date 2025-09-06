import { dbConnect } from "@/lib/db";
import GalleryImage from "@/models/GalleryImage";
import Image from "next/image";

type GalleryItem = { src: string; alt: string };
type GalleryDoc = { _id: unknown; url: string; alt?: string | null };

export const metadata = { title: "Gallery — Amoré" };

export default async function GalleryPage() {
  await dbConnect();

  // Cast to unknown first to satisfy TS 2352
  const docs = (await GalleryImage.find().sort({ createdAt: -1 }).lean()) as unknown as GalleryDoc[];

  const list: GalleryItem[] = docs.map((d) => ({ src: d.url, alt: d.alt || "" }));

  return (
    <main className="py-16 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="[font-family:var(--font-playfair)] text-3xl sm:text-4xl text-slate-900">Featured Gallery</h1>
          <p className="mt-3 text-slate-600">A glimpse of our soft, romantic style.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {list.map((g, i) => (
            <div key={i} className="overflow-hidden rounded-xl shadow-soft relative h-64">
              <Image
                src={g.src}
                alt={g.alt}
                fill
                sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                className="object-cover hover:scale-[1.02] transition-transform"
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
