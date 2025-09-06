import { dbConnect } from "@/lib/db";
import GalleryImage from "@/models/GalleryImage";
import Notification from "@/models/Notification";
import { getServerSession } from "next-auth";
import type { Session } from "next-auth";
import { authOptions } from "@/lib/auth-options";

export async function GET() {
  await dbConnect();
  const images = await GalleryImage.find().sort({ createdAt: -1 }).lean();
  return Response.json(images);
}

export async function POST(req: Request) {
  await dbConnect();
  const session = (await getServerSession(authOptions)) as Session | null;
  if (!session || session.user?.role !== "ADMIN") return new Response("Unauthorized", { status: 401 });

  const body = await req.json();
  const doc = await GalleryImage.create({ url: body.url, alt: body.alt || "" });
  await Notification.create({ type: "gallery", title: "New gallery image", message: body.alt || body.url });
  return Response.json(doc);
}
