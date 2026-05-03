function Button({ children, href, variant = 'primary' }) {
  const styles = {
    primary:
      'bg-slate-950 text-white shadow-sm hover:bg-slate-800',
    secondary:
      'border border-slate-400 bg-white text-slate-950 hover:bg-slate-100',
  }

  return (
    <a
      className={`inline-flex min-h-9 items-center justify-center rounded-full px-5 text-xs font-black uppercase tracking-[0.12em] transition ${styles[variant]}`}
      href={href}
    >
      {children}
    </a>
  )
}

export default Button
