"use client";
import { useState } from "react";
import Button from "@/app/(root)/components/Button";

export default function ContactForm(){
  const [submitting, setSubmitting] = useState(false);
  const [ok, setOk] = useState<null|boolean>(null);

  async function submit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const body = Object.fromEntries(fd.entries());
    setSubmitting(true);
    try{
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
      setOk(res.ok);
      if (!res.ok) throw new Error("Failed");
      (e.currentTarget as HTMLFormElement).reset();
    }catch{ setOk(false); }
    finally{ setSubmitting(false); }
  }

  return (
    <div className="rounded-2xl border border-slate-200 p-6 shadow-soft bg-white">
      <form onSubmit={submit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700">Name</label>
          <input id="name" name="name" required type="text" className="mt-1 w-full rounded-lg border-slate-300 focus:border-blush-600 focus:ring-blush-600" placeholder="Your full name" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email</label>
          <input id="email" name="email" required type="email" className="mt-1 w-full rounded-lg border-slate-300 focus:border-blush-600 focus:ring-blush-600" placeholder="you@example.com" />
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-slate-700">Event Date</label>
            <input id="date" name="date" type="date" className="mt-1 w-full rounded-lg border-slate-300 focus:border-blush-600 focus:ring-blush-600" />
          </div>
          <div>
            <label htmlFor="type" className="block text-sm font-medium text-slate-700">Shoot Type</label>
            <select id="type" name="type" className="mt-1 w-full rounded-lg border-slate-300 focus:border-blush-600 focus:ring-blush-600">
              <option>Wedding</option>
              <option>Engagement</option>
              <option>Portrait</option>
              <option>Event</option>
            </select>
          </div>
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-slate-700">Message</label>
          <textarea id="message" name="message" rows={4} className="mt-1 w-full rounded-lg border-slate-300 focus:border-blush-600 focus:ring-blush-600" placeholder="Tell us about your vision..." />
        </div>
        <Button type="submit" className="w-full">{submitting ? "Sending..." : "Send Inquiry"}</Button>
        {ok === true && <p className="text-xs text-green-700">Message sent. We’ll reply soon.</p>}
        {ok === false && <p className="text-xs text-red-600">Something went wrong. Try again.</p>}
        <p className="mt-2 text-xs text-slate-500">Prefer email? <a className="text-blush-600 font-medium" href="mailto:hello@example.com">hello@example.com</a></p>
      </form>
    </div>
  )
}