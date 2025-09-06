import { dbConnect } from "@/lib/db";
import Notification from "@/models/Notification";
import { getServerSession } from "next-auth";
import type { Session } from "next-auth";
import { authOptions } from "@/lib/auth-options";

export async function GET() {
  await dbConnect();
  const session = (await getServerSession(authOptions)) as Session | null;
  if (!session || session.user?.role !== "ADMIN") return new Response("Unauthorized", { status: 401 });

  const docs = await Notification.find().sort({ createdAt: -1 }).lean();
  return Response.json(docs);
}

export async function PUT(req: Request) {
  await dbConnect();
  const session = (await getServerSession(authOptions)) as Session | null;
  if (!session || session.user?.role !== "ADMIN") return new Response("Unauthorized", { status: 401 });

  const { id } = await req.json();
  await Notification.findByIdAndUpdate(id, { read: true });
  return Response.json({ ok: true });
}
