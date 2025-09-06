import { dbConnect } from "@/lib/db";
import GalleryImage from "@/models/GalleryImage";
import ContactSubmission from "@/models/ContactSubmission";
import Notification from "@/models/Notification";

type ContactDoc = { _id: unknown; name: string; email: string; message?: string; createdAt?: Date | string };

export default async function AdminHome() {
  await dbConnect();

  const [imgCount, contactCount, unread] = await Promise.all([
    GalleryImage.countDocuments(),
    ContactSubmission.countDocuments(),
    Notification.countDocuments({ read: false }),
  ]);

  // Cast to unknown first to satisfy TS 2352
  const latestContacts = (await ContactSubmission.find().sort({ createdAt: -1 }).limit(5).lean()) as unknown as ContactDoc[];

  return (
    <div className="grid lg:grid-cols-3 gap-6">
      <div className="rounded-2xl border border-slate-200 p-6">
        <p className="text-sm text-slate-500">Gallery Images</p>
        <p className="mt-2 text-3xl font-semibold">{imgCount}</p>
      </div>
      <div className="rounded-2xl border border-slate-200 p-6">
        <p className="text-sm text-slate-500">Contact Submissions</p>
        <p className="mt-2 text-3xl font-semibold">{contactCount}</p>
      </div>
      <div className="rounded-2xl border border-slate-200 p-6">
        <p className="text-sm text-slate-500">Unread Notifications</p>
        <p className="mt-2 text-3xl font-semibold">{unread}</p>
      </div>

      <div className="lg:col-span-3 rounded-2xl border border-slate-200 p-6">
        <h2 className="font-semibold text-slate-900">Recent Enquiries</h2>
        <div className="mt-4 divide-y divide-slate-100">
          {latestContacts.length === 0 && <p className="text-sm text-slate-500">No enquiries yet.</p>}
          {latestContacts.map((c) => (
            <div key={String(c._id)} className="py-3 flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-slate-900">
                  {c.name} <span className="text-slate-400">• {c.email}</span>
                </p>
                <p className="text-sm text-slate-600 line-clamp-2">{c.message || ""}</p>
              </div>
              <p className="text-xs text-slate-400">{c.createdAt ? new Date(c.createdAt).toLocaleString() : ""}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
