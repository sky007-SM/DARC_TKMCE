import { FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer
      className="
        relative
        overflow-hidden
        border-t
        border-white/5
        bg-black
        py-16 md:py-24
        px-4 md:px-6
      "
    >

      {/* Noise layer */}
      <div className="absolute inset-0 opacity-[0.03] noise-layer pointer-events-none" />

      {/* Giant background text (mobile-safe) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <h2
          className="
            font-orbitron
            text-[28vw] md:text-[18vw]
            font-black
            text-white/[0.02]
            tracking-tight
            leading-none
          "
        >
          DARC
        </h2>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* TOP */}
        <div
          className="
            flex
            flex-col
            md:flex-row
            md:items-end
            md:justify-between
            gap-8 md:gap-12
          "
        >

          {/* LEFT */}
          <div>
            <h3
              className="
                font-orbitron
                text-3xl md:text-5xl
                font-black
                text-white
                mb-3 md:mb-4
              "
            >
              DARC
            </h3>

            <p
              className="
                max-w-md
                text-gray-500
                leading-relaxed
                text-sm
              "
            >
              Drone Application and Robotics Centre focused on
              intelligent systems, embedded engineering and
              autonomous technologies.
            </p>
          </div>

          {/* RIGHT TAGLINE */}
          <div className="text-xs md:text-sm text-gray-600 uppercase tracking-[0.2em]">
            Autonomous Systems Research
          </div>

        </div>

        {/* DIVIDER */}
        <div className="w-full h-px bg-white/5 my-10 md:my-14" />

        {/* BOTTOM */}
        <div
          className="
            flex
            flex-col
            md:flex-row
            md:items-center
            md:justify-between
            gap-6
            text-[10px] md:text-xs
            uppercase
            tracking-[0.2em]
            text-gray-700
          "
        >

          {/* LEFT BOTTOM */}
          <div className="flex flex-col md:flex-row md:gap-6 gap-2">
            <p>© 2025 DARC</p>
            <p>Built for Research & Engineering</p>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-4 md:gap-5">

            <a
              href="https://www.instagram.com/darc_tkmce?igsh=MXQ3YzRrZmdhOTkxaQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-pink-500 transition-colors duration-300"
            >
              <FaInstagram size={20} />
            </a>

            <a
              href="https://wa.me/919895492980"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-green-400 transition-colors duration-300"
            >
              <FaWhatsapp size={20} />
            </a>

            <a
              href="https://www.linkedin.com/company/darc-tkmce/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-400 transition-colors duration-300"
            >
              <FaLinkedin size={20} />
            </a>

          </div>

        </div>

      </div>
    </footer>
  )
}

export default Footer