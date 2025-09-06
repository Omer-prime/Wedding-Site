import { dbConnect } from "@/lib/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export async function POST() {
  await dbConnect();

  const name = process.env.ADMIN_NAME || "Admin";
  const email = process.env.ADMIN_EMAIL || "admin@example.com";
  const pass = process.env.ADMIN_PASSWORD || "admin123";

  const existing = await User.findOne({ email }).lean();
  if (existing) return Response.json({ ok: true, message: "Already exists" });

  const passwordHash = await bcrypt.hash(pass, 10);
  await User.create({ name, email, passwordHash, role: "ADMIN" });

  return Response.json({ ok: true });
}
