import { dbConnect } from "@/lib/db";
import GalleryImage from "@/models/GalleryImage";
import { revalidatePath } from "next/cache";
import { requireAdmin } from "@/lib/auth";
import Image from "next/image";

type GalleryDoc = { _id: unknown; url: string; alt?: string | null };

export const dynamic = "force-dynamic";

async function addImage(formData: FormData) {
  "use server";
  await requireAdmin();
  await dbConnect();
  const url = String(formData.get("url") || "");
  const alt = String(formData.get("alt") || "");
  if (!url) return;
  await GalleryImage.create({ url, alt });
  revalidatePath("/gallery");
}

async function delImage(id: string) {
  "use server";
  await requireAdmin();
  await dbConnect();
  await GalleryImage.findByIdAndDelete(id);
  revalidatePath("/gallery");
}

export default async function AdminGallery() {
  await dbConnect();
  // Cast to unknown first to satisfy TS 2352
  const images = (await GalleryImage.find().sort({ createdAt: -1 }).lean()) as unknown as GalleryDoc[];

  return (
    <div className="grid lg:grid-cols-[1fr,320px] gap-8">
      <div className="rounded-2xl border border-slate-200 p-6">
        <h2 className="font-semibold text-slate-900">All Images</h2>
        <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((img) => (
            <div key={String(img._id)} className="rounded-xl overflow-hidden border">
              <div className="relative h-48">
                <Image
                  src={img.url}
                  alt={img.alt || ""}
                  fill
                  sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <form action={async () => delImage(String(img._id))} className="p-3 border-t">
                <button className="text-red-600 text-sm hover:underline">Delete</button>
              </form>
            </div>
          ))}
          {images.length === 0 && <p className="text-sm text-slate-500">No images yet.</p>}
        </div>
      </div>
      <div className="rounded-2xl border border-slate-200 p-6 h-fit">
        <h3 className="font-semibold text-slate-900">Add Image</h3>
        <form action={addImage} className="mt-4 space-y-3">
          <div>
            <label className="block text-sm font-medium">Image URL</label>
            <input name="url" required className="mt-1 w-full rounded-lg border-slate-300" placeholder="https://..." />
          </div>
          <div>
            <label className="block text-sm font-medium">Alt text</label>
            <input name="alt" className="mt-1 w-full rounded-lg border-slate-300" placeholder="e.g., Golden hour embrace" />
          </div>
          <button className="mt-2 inline-flex items-center rounded-lg bg-blush-600 px-4 py-2 text-white text-sm font-semibold shadow-soft">
            Add Image
          </button>
        </form>
      </div>
    </div>
  );
}
