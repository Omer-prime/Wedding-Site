// src/app/admin/layout.tsx
import { requireAdmin } from "@/lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import type { Route } from "next";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await requireAdmin();
  if (!session) redirect("/login" as Route<"/login">);

  // If your folder is 'Gallery' (capital), change pathname to "/admin/Gallery"
  const nav = [
    { label: "Dashboard", href: { pathname: "/admin" } },
    { label: "Gallery",   href: { pathname: "/admin/gallery" } },
    { label: "About",     href: { pathname: "/admin/about" } },
    { label: "Contacts",  href: { pathname: "/admin/contact" } }, // folder = 'contact'
  ] as const;

  return (
    <div className="min-h-[calc(100vh-var(--nav-h))] bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center justify-between">
          <h1 className="[font-family:var(--font-playfair)] text-3xl text-slate-900">Admin Panel</h1>
          <nav className="flex gap-4 text-sm">
            {nav.map((i) => (
              <Link key={i.label} href={i.href} className="hover:text-blush-600">
                {i.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-8">{children}</div>
      </div>
    </div>
  );
}
