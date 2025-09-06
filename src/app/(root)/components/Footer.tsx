import Link from "next/link";

export default function Footer(){
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-500">&copy; {year} Amoré Photo Studio. All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm text-slate-500">
          <Link href="/" className="hover:text-blush-600">Home</Link>
          <Link href="/gallery" className="hover:text-blush-600">Gallery</Link>
          <Link href="/about" className="hover:text-blush-600">About</Link>
          <Link href="/contact" className="hover:text-blush-600">Contact</Link>
        </div>
      </div>
    </footer>
  )
}
