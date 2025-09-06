import { dbConnect } from "@/lib/db";
import About from "@/models/About";

export const metadata = { title: "About — Amoré" };

type AboutDoc = { title?: string; content?: string };

export default async function AboutPage() {
  await dbConnect();

  // Always return a single plain object for TS (not an array/Doc)
  const doc = (await About.findOne().lean()) as AboutDoc | null;

  const title =
    doc?.title ?? "About Our Style";
  const content =
    doc?.content ??
    "Our approach is simple: soft light, gentle direction, and a calm experience. We craft clean, airy images that feel elegant and honest—perfect for lovers of minimal, romantic aesthetics.";

  return (
    <main className="py-16 sm:py-24 bg-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="[font-family:var(--font-playfair)] text-4xl text-slate-900">{title}</h1>
        <p className="mt-4 text-slate-600 whitespace-pre-line">{content}</p>
        <ul className="mt-6 space-y-3">
          <li>♥ Fine-art, editorial & lifestyle coverage</li>
          <li>♥ Soft palettes and timeless edits</li>
          <li>♥ Weddings, engagements, portraits & events</li>
        </ul>
      </div>
    </main>
  );
}
