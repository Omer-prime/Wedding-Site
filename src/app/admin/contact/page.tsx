import { dbConnect } from "@/lib/db";
import ContactSubmission from "@/models/ContactSubmission";

type ContactDoc = {
  _id: unknown;
  name: string;
  email: string;
  message?: string;
  type?: string;
  createdAt?: Date | string;
  read?: boolean;
};

export default async function AdminContacts() {
  await dbConnect();

  // Cast to unknown first to satisfy TS 2352
  const subs = (await ContactSubmission.find().sort({ createdAt: -1 }).lean()) as unknown as ContactDoc[];

  return (
    <div className="rounded-2xl border border-slate-200 p-6">
      <h2 className="font-semibold text-slate-900">Client Messages</h2>
      <div className="mt-4 divide-y divide-slate-100">
        {subs.length === 0 && <p className="text-sm text-slate-500">No messages yet.</p>}
        {subs.map((s) => (
          <div key={String(s._id)} className="py-3 grid sm:grid-cols-[1fr,200px,150px,120px] gap-3">
            <div>
              <p className="text-sm font-medium text-slate-900">
                {s.name} <span className="text-slate-400">• {s.email}</span>
              </p>
              <p className="text-sm text-slate-600">{s.message || ""}</p>
            </div>
            <p className="text-sm text-slate-600">{s.type || "-"}</p>
            <p className="text-xs text-slate-400">{s.createdAt ? new Date(s.createdAt).toLocaleString() : ""}</p>
            <span className={`text-sm ${s.read ? "text-slate-400" : "text-green-700"}`}>{s.read ? "Read" : "New"}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
