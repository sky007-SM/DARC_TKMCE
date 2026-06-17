import { Link, useLocation } from 'react-router-dom'

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/projects', label: 'Projects' },
  { path: '/team', label: 'Team' },
  { path: '/about', label: 'About Us'}
]

const Navbar = () => {
  const location = useLocation()

  const isHome = location.pathname === '/'

  return (
    <header
      className={`
        w-full
        z-50

        ${
          isHome
            ? 'absolute top-0 left-0'
            : 'relative bg-black'
        }
      `}
    >

      <div
        className="
          w-full
          px-8
          md:px-16
          py-8
          flex
          items-start
          justify-between
        "
      >

        {/* LEFT */}
        <Link
          to="/"
          className="select-none"
        >

          <h1
            className="
              font-orbitron
              text-white
              text-4xl
              md:text-6xl
              font-black
              tracking-[0.22em]
              leading-none
            "
          >
            DARC
          </h1>

          {!isHome && (
            <p
              className="
                mt-3
                text-[10px]
                uppercase
                tracking-[0.38em]
                text-gray-600
              "
            >
              Drone Application and Robotics Centre
            </p>
          )}

        </Link>

        {/* RIGHT */}
        <nav
          className="
            flex
            items-center
            gap-12
            md:gap-16
            pt-5
          "
        >

          {navItems.map((item) => {
            const active = location.pathname === item.path

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`
                  uppercase
                  tracking-[0.28em]
                  text-sm
                  md:text-base
                  transition-colors
                  duration-300

                  ${
                    active
                      ? 'text-white'
                      : 'text-gray-500 hover:text-red-400'
                  }
                `}
              >
                {item.label}
              </Link>
            )
          })}

        </nav>

      </div>

    </header>
  )
}

export default Navbar