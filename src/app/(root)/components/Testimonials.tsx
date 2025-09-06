import Section from "@/app/(root)/components/Section";
export default function Testimonials(){
  const items = [
    {q:"“Every image felt like a page from a love story. We cried seeing our gallery.”", a:"— Alina & Omar"},
    {q:"“Calm, kind, and incredibly talented. Our wedding looked like a dream.”", a:"— Sara & Fahad"},
    {q:"“Minimal posing, maximum beauty. We felt like ourselves.”", a:"— Zain & Mariam"},
  ];
  return (
    <Section>
      <div className="max-w-2xl">
        <h2 className="[font-family:var(--font-playfair)] text-3xl sm:text-4xl text-slate-900">Words from Lovers</h2>
        <p className="mt-3 text-slate-600">Gentle direction. Effortless experience. Magic results.</p>
      </div>
      <div className="mt-10 grid lg:grid-cols-3 gap-6">
        {items.map((t,i)=>(
          <figure key={i} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
            <div className="flex items-center gap-2 text-blush-600">★★★★★</div>
            <blockquote className="mt-3 text-slate-700">{t.q}</blockquote>
            <figcaption className="mt-4 text-sm text-slate-500">{t.a}</figcaption>
          </figure>
        ))}
      </div>
    </Section>
  )
}
