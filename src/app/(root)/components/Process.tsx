import Section from "@/app/(root)/components/Section";
export default function Process(){
  const steps = [
    {title:"Discovery", desc:"Share your vision, date, and aesthetic."},
    {title:"Planning", desc:"Timeline, locations, and styling guidance."},
    {title:"Shoot Day", desc:"Gentle posing and candid moments."},
    {title:"Delivery", desc:"Airy edits, online gallery, and album design."},
  ];
  return (
    <Section>
      <div className="max-w-2xl">
        <h2 className="[font-family:var(--font-playfair)] text-3xl sm:text-4xl text-slate-900">The Experience</h2>
        <p className="mt-3 text-slate-600">A simple, thoughtful journey from hello to album.</p>
      </div>
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((s,i)=>(
          <div key={i} className="rounded-2xl border border-slate-200 p-6 bg-white">
            <div className="w-10 h-10 rounded-full bg-blush-100 text-blush-600 flex items-center justify-center">{i+1}</div>
            <h3 className="mt-4 font-semibold text-slate-900">{s.title}</h3>
            <p className="mt-1 text-sm text-slate-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}