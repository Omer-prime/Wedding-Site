import { clsx } from "clsx";
export default function Section({ id, children, className }: { id?: string; children: React.ReactNode; className?: string }){
  return (
    <section id={id} className={clsx("py-16 sm:py-24 bg-white reveal", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}