import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <main className="grid min-h-[520px] place-items-center px-5 py-12">
      <section className="w-full max-w-2xl rounded-xl border-4 border-double border-slate-300 bg-slate-50 p-8 text-center shadow-sm">
        <p className="text-7xl font-black text-slate-200">404</p>
        <p className="mt-4 text-[11px] font-black uppercase tracking-[0.28em] text-slate-400">
          Page Not Found
        </p>
        <h1 className="mt-3 text-3xl font-black text-slate-950">
          The page you opened is not part of this activity.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-slate-500">
          Use the button below to return to the homepage and continue browsing
          the project.
        </p>
        <Link
          className="mt-7 inline-flex rounded-full bg-slate-950 px-5 py-3 text-xs font-black uppercase tracking-[0.12em] text-white"
          to="/"
        >
          Go Home
        </Link>
      </section>
    </main>
  )
}

export default NotFoundPage
