import { dbConnect } from "@/lib/db";
import About from "@/models/About";
import { getServerSession } from "next-auth";
import type { Session } from "next-auth";
import { authOptions } from "@/lib/auth-options";

export async function GET() {
  await dbConnect();
  const doc = await About.findOne().lean();
  return Response.json(doc);
}

export async function PUT(req: Request) {
  await dbConnect();
  const session = (await getServerSession(authOptions)) as Session | null;
  if (!session || session.user?.role !== "ADMIN") return new Response("Unauthorized", { status: 401 });

  const body = await req.json();
  const doc = await About.findOne();
  if (doc) {
    doc.title = body.title;
    doc.content = body.content;
    await doc.save();
    return Response.json(doc);
  }
  const created = await About.create({ title: body.title, content: body.content });
  return Response.json(created);
}
