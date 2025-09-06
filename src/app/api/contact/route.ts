import { dbConnect } from "@/lib/db";
import ContactSubmission from "@/models/ContactSubmission";
import Notification from "@/models/Notification";
import { getServerSession } from "next-auth";
import type { Session } from "next-auth";
import { authOptions } from "@/lib/auth-options";

export async function POST(req: Request) {
  await dbConnect();
  const b = await req.json();
  await ContactSubmission.create({
    name: b.name,
    email: b.email,
    date: b.date,
    type: b.type,
    message: b.message,
  });
  await Notification.create({ type: "contact", title: "New enquiry", message: `${b.name} — ${b.type || "General"}` });
  return Response.json({ ok: true });
}

export async function GET() {
  await dbConnect();
  const session = (await getServerSession(authOptions)) as Session | null;
  if (!session || session.user?.role !== "ADMIN") return new Response("Unauthorized", { status: 401 });

  const docs = await ContactSubmission.find().sort({ createdAt: -1 }).lean();
  return Response.json(docs);
}
