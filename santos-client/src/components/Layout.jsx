import { Outlet } from 'react-router-dom'
import Footer from './Footer.jsx'
import Navbar from './Navbar.jsx'

function Layout() {
  return (
    <div className="min-h-screen bg-white px-4 py-8 text-slate-700">
      <div className="mx-auto max-w-6xl overflow-hidden border-4 border-double border-slate-400 bg-white shadow-lg shadow-slate-950/15">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  )
}

export default Layout
