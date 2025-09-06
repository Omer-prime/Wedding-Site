"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function LoginPage(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const params = useSearchParams();
  const err = params.get("error");

  async function onSubmit(e: React.FormEvent){
    e.preventDefault();
    setLoading(true);
    const res = await signIn("credentials", { email, password, redirect: false });
    setLoading(false);
    if (res?.ok) router.push("/admin");
    else alert("Invalid credentials");
  }

  return (
    <main className="min-h-[calc(100vh-var(--nav-h))] grid place-items-center bg-white">
      <form onSubmit={onSubmit} className="w-full max-w-sm rounded-2xl border border-slate-200 p-6 shadow-soft bg-white">
        <h1 className="[font-family:var(--font-playfair)] text-3xl text-slate-900">Admin Login</h1>
        {err && <p className="mt-2 text-sm text-red-600">Error: {err}</p>}
        <div className="mt-4">
          <label className="block text-sm font-medium">Email</label>
          <input className="mt-1 w-full rounded-lg border-slate-300" type="email" value={email} onChange={e=>setEmail(e.target.value)} required />
        </div>
        <div className="mt-3">
          <label className="block text-sm font-medium">Password</label>
          <input className="mt-1 w-full rounded-lg border-slate-300" type="password" value={password} onChange={e=>setPassword(e.target.value)} required />
        </div>
        <button disabled={loading} className="mt-5 w-full inline-flex items-center justify-center rounded-lg bg-blush-600 px-5 py-3 text-white font-semibold shadow-soft hover:opacity-90 transition">
          {loading ? "Signing in..." : "Sign In"}
        </button>
      </form>
    </main>
  )
}