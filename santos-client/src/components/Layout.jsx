import { Outlet } from 'react-router-dom'
import Navbar from './Navbar.jsx'

function Layout() {
  return (
    <div className="min-h-screen bg-white px-4 py-8 text-slate-700">
      <div className="mx-auto max-w-6xl overflow-hidden border-4 border-double border-slate-400 bg-white shadow-lg shadow-slate-950/15">
        <Navbar />
        <Outlet />
        <footer className="border-t-4 border-double border-slate-300 bg-white">
          <div className="flex flex-col gap-2 px-5 py-5 text-xs font-bold uppercase tracking-[0.12em] text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <p>Regalado Santos Jr. | INF 233</p>
            <p>Lab Activity 2 - React Router and Components</p>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Layout
