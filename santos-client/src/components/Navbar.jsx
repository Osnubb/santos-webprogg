import { NavLink } from 'react-router-dom'
import Logo from './Logo.jsx'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Articles', to: '/articles' },
  { label: 'Dashboard', to: '/dashboard' },
]

function Navbar() {
  return (
    <header className="border-b-4 border-double border-slate-300 bg-white">
      <nav className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-3 sm:flex-row sm:items-center sm:justify-between lg:px-0">
        <NavLink to="/" className="w-fit">
          <Logo />
        </NavLink>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="flex rounded-full border border-slate-300 bg-slate-100 p-1">
            {navItems.map((item) => (
              <NavLink
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 text-[11px] font-black uppercase tracking-[0.14em] transition ${
                    isActive
                      ? 'bg-slate-950 text-white shadow-sm'
                      : 'text-slate-400 hover:text-slate-950'
                  }`
                }
                end={item.to === '/'}
                key={item.to}
                to={item.to}
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <NavLink
            className={({ isActive }) =>
              `inline-flex rounded-full px-4 py-2 text-[11px] font-black uppercase tracking-[0.14em] transition ${
                isActive
                  ? 'bg-amber-400 text-slate-950'
                  : 'border border-slate-300 text-slate-700 hover:border-amber-400 hover:text-slate-950'
              }`
            }
            to="/signin"
          >
            Sign In
          </NavLink>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
