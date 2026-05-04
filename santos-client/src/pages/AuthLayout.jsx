import { Outlet } from 'react-router-dom'

function AuthLayout() {
  return (
    <main className="bg-[radial-gradient(circle_at_top,_#fde68a,_transparent_32%),linear-gradient(135deg,_#fff7ed,_#f8fafc_50%,_#ecfeff)] px-5 py-8 md:px-8 md:py-10">
      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
        <section className="rounded-[28px] border-2 border-white/80 bg-slate-950 px-6 py-8 text-white shadow-2xl shadow-slate-950/20">
          <p className="text-[11px] font-black uppercase tracking-[0.28em] text-amber-300">
            Account Access
          </p>
          <h1 className="mt-4 max-w-sm font-serif text-4xl leading-tight text-white md:text-5xl">
            Welcome back to your project space.
          </h1>
          <p className="mt-5 max-w-md text-sm leading-7 text-slate-300">
            Lab Activity 4 adds styled sign in and sign up pages while keeping
            the current React routes organized. The same layout supports both
            forms so the design stays consistent.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <article className="rounded-2xl border border-white/15 bg-white/5 p-4">
              <p className="text-2xl font-black text-white">2</p>
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-slate-300">
                Forms
              </p>
            </article>
            <article className="rounded-2xl border border-white/15 bg-white/5 p-4">
              <p className="text-2xl font-black text-white">1</p>
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-slate-300">
                Auth Layout
              </p>
            </article>
            <article className="rounded-2xl border border-white/15 bg-white/5 p-4">
              <p className="text-2xl font-black text-white">4</p>
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-slate-300">
                Total Labs
              </p>
            </article>
          </div>
        </section>

        <section className="rounded-[28px] border-2 border-slate-200 bg-white/90 p-4 shadow-xl shadow-slate-300/30 md:p-6">
          <Outlet />
        </section>
      </div>
    </main>
  )
}

export default AuthLayout
