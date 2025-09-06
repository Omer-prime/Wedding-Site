import Section from "@/app/(root)/components/Section";
export default function Awards(){
  const items = ["Best Romantic Studio ’25","Style Me Pretty Featured","The Knot Hall of Fame"];
  return (
    <Section>
      <div className="text-center">
        <h2 className="[font-family:var(--font-playfair)] text-3xl sm:text-4xl text-slate-900">Awards & Features</h2>
        <p className="mt-3 text-slate-600">Recognized for romantic, editorial storytelling.</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          {items.map(i=> <div key={i} className="px-5 py-3 rounded-full border border-slate-200 bg-white shadow-soft text-sm text-slate-700">{i}</div>)}
        </div>
      </div>
    </Section>
  )
}