import { dbConnect } from "@/lib/db";
import GalleryImage from "@/models/GalleryImage";
import { getServerSession } from "next-auth";
import type { Session } from "next-auth";
import { authOptions } from "@/lib/auth-options";

export async function DELETE(_req: Request, context: { params: Promise<{ id: string }> }) {
  await dbConnect();

  const session = (await getServerSession(authOptions)) as Session | null;
  if (!session || session.user?.role !== "ADMIN") {
    return new Response("Unauthorized", { status: 401 });
  }

  const { id } = await context.params; // <- params is a Promise in Next 15 typedRoutes
  await GalleryImage.findByIdAndDelete(id);
  return new Response(null, { status: 204 });
}
