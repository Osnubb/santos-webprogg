function Logo() {
  return (
    <div className="flex items-center gap-3" aria-label="Santos Web Programming">
      <img
        className="size-12 rounded-full object-cover shadow-lg shadow-slate-950/20"
        src="/santos-logo.png"
        alt="Regalado Santos Jr. logo"
      />
      <div className="leading-tight">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-slate-950">
          Regalado
        </p>
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">
          Santos WebProg
        </p>
      </div>
    </div>
  )
}

export default Logo
