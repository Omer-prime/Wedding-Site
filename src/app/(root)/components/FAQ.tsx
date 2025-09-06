import Section from "@/app/(root)/components/Section";
export default function FAQ(){
  const items = [
    {q:"How soon should we book?", a:"We recommend 3–6 months in advance. Popular weekends fill quickly."},
    {q:"Do you travel?", a:"Yes—domestic and destination coverage available."},
    {q:"When do we receive photos?", a:"Engagements within 2 weeks; weddings within 4–6 weeks."},
  ];
  return (
    <Section>
      <div className="mx-auto max-w-3xl">
        <h2 className="[font-family:var(--font-playfair)] text-3xl sm:text-4xl text-slate-900">Frequently Asked Questions</h2>
        <div className="mt-6 divide-y divide-slate-200 border border-slate-200 rounded-2xl overflow-hidden">
          {items.map((it,idx)=>(
            <details key={idx} className="group p-5">
              <summary className="cursor-pointer list-none flex items-center justify-between">
                <span className="font-medium text-slate-900">{it.q}</span>
                <span className="text-slate-400 group-open:rotate-180 transition">⌄</span>
              </summary>
              <p className="mt-3 text-slate-600">{it.a}</p>
            </details>
          ))}
        </div>
      </div>
    </Section>
  )
}