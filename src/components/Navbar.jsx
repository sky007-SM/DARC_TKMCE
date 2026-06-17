import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/projects', label: 'Projects' },
  { path: '/team', label: 'Team' },
  { path: '/about', label: 'About Us' }
]

const Navbar = () => {
  const location = useLocation()
  const isHome = location.pathname === '/'

  const [open, setOpen] = useState(false)

  return (
    <header
      className={`
        w-full z-50
        ${isHome ? 'absolute top-0 left-0' : 'relative bg-black'}
      `}
    >

      <div className="w-full px-4 md:px-16 py-5 md:py-8 flex items-center justify-between">

        {/* LEFT */}
        <Link to="/" className="select-none">

          <h1 className="font-orbitron text-white text-3xl md:text-6xl font-black tracking-[0.2em] leading-none">
            DARC
          </h1>

          {!isHome && (
            <p className="mt-2 text-[9px] md:text-[10px] uppercase tracking-[0.35em] text-gray-600 max-w-[200px] md:max-w-none">
              Drone Application and Robotics Centre
            </p>
          )}

        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-10 lg:gap-16 pt-2">

          {navItems.map((item) => {
            const active = location.pathname === item.path

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`
                  uppercase tracking-[0.25em] text-sm lg:text-base transition-colors duration-300
                  ${active ? 'text-white' : 'text-gray-500 hover:text-red-400'}
                `}
              >
                {item.label}
              </Link>
            )
          })}

        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-black border-t border-white/10 px-4 py-6">

          <div className="flex flex-col gap-6">

            {navItems.map((item) => {
              const active = location.pathname === item.path

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={`
                    uppercase tracking-[0.25em] text-sm transition-colors
                    ${active ? 'text-white' : 'text-gray-500'}
                  `}
                >
                  {item.label}
                </Link>
              )
            })}

          </div>

        </div>
      )}

    </header>
  )
}

export default Navbar