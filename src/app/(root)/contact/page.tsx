import ContactForm from "@/app/(root)/components/ContactForm";
export const metadata = { title: "Contact — Amoré" };
export default function ContactPage(){
  return (
    <main className="py-16 sm:py-24 bg-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="[font-family:var(--font-playfair)] text-4xl text-slate-900">Contact</h1>
        <p className="mt-3 text-slate-600">Tell us about your date and vision. We’ll get back within 24 hours.</p>
        <div className="mt-6"><ContactForm /></div>
      </div>
    </main>
  )
}