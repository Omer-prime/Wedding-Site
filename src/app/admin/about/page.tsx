import { dbConnect } from "@/lib/db";
import About from "@/models/About";
import { requireAdmin } from "@/lib/auth";
import { revalidatePath } from "next/cache";

type AboutDoc = { title?: string; content?: string };

async function saveAbout(formData: FormData) {
  "use server";
  await requireAdmin();
  await dbConnect();

  const title = String(formData.get("title") || "About Our Style");
  const content = String(formData.get("content") || "");

  const doc = await About.findOne();
  if (doc) {
    doc.title = title;
    doc.content = content;
    await doc.save();
  } else {
    await About.create({ title, content });
  }

  revalidatePath("/about");
}

export default async function AdminAbout() {
  await dbConnect();
  const doc = (await About.findOne().lean()) as AboutDoc | null;

  return (
    <div className="rounded-2xl border border-slate-200 p-6">
      <h2 className="font-semibold text-slate-900">Edit About Page</h2>
      <form action={saveAbout} className="mt-4 space-y-3">
        <div>
          <label className="block text-sm font-medium">Title</label>
          <input
            name="title"
            defaultValue={doc?.title || "About Our Style"}
            className="mt-1 w-full rounded-lg border-slate-300"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Content</label>
          <textarea
            name="content"
            rows={8}
            defaultValue={doc?.content || ""}
            className="mt-1 w-full rounded-lg border-slate-300"
          />
        </div>
        <button className="inline-flex items-center rounded-lg bg-blush-600 px-4 py-2 text-white text-sm font-semibold shadow-soft">
          Save
        </button>
      </form>
    </div>
  );
}
