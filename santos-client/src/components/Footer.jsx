import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="border-t-4 border-double border-slate-300 bg-slate-950 text-white">
      <div className="grid gap-6 px-5 py-7 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <p className="text-[11px] font-black uppercase tracking-[0.22em] text-amber-300">
            Lab Activity 4
          </p>
          <p className="mt-2 text-lg font-black">Regalado Santos Jr.</p>
          <p className="text-sm text-slate-300">INF 233 | regaladosnts@gmail.com</p>
        </div>

        <div className="flex flex-wrap gap-2">
          <Link className="rounded-full border border-white/25 px-4 py-2 text-xs font-bold" to="/">
            Home
          </Link>
          <Link
            className="rounded-full border border-white/25 px-4 py-2 text-xs font-bold"
            to="/articles"
          >
            Articles
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
