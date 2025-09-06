import { getServerSession } from "next-auth";
import type { Session } from "next-auth";
import { authOptions } from "@/lib/auth-options";

export async function getSession(): Promise<Session | null> {
  return (await getServerSession(authOptions)) as Session | null;
}

export async function requireAdmin(): Promise<Session | null> {
  const session = (await getServerSession(authOptions)) as Session | null;
  if (!session || session.user?.role !== "ADMIN") return null;
  return session;
}
