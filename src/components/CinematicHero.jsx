import LiquidEther from './LiquidEther'
import { useNavigate } from 'react-router-dom'

export default function CinematicHero() {
  const navigate = useNavigate()

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-black">

      {/* 🌊 BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <LiquidEther
          colors={['#EE0C00', '#F7024D', '#D5E5E6']}

          mouseForce={22}
          cursorSize={110}

          isViscous
          viscous={48}

          iterationsViscous={48}
          iterationsPoisson={48}

          resolution={0.5}
          isBounce={false}

          autoDemo
          autoSpeed={0.5}
          autoIntensity={2.2}

          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>

      {/* 🚫 NO OVERLAY — PURE VISUAL */}

      {/* 🧠 CONTENT */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6">

        <p className="text-gray-400 tracking-[0.45em] uppercase text-[11px] mb-6">
          Autonomous Systems Lab
        </p>

        <h1 className="text-white text-4xl md:text-6xl font-black leading-tight max-w-4xl">
          Engineering Systems that move, sense and think
        </h1>

        <p className="text-gray-500 mt-6 max-w-xl text-base md:text-lg">
          Robotics • Embedded AI • IoT Infrastructure • Drone Systems
        </p>

        {/* divider */}
        <div className="w-28 h-px bg-white/20 mt-10" />

        {/* 🔘 CTA BUTTONS (ENLARGED) */}
        <div className="mt-14 flex flex-col sm:flex-row gap-5">

          <button
            onClick={() => navigate('/projects')}
            className="px-10 py-4 text-lg font-semibold bg-white text-black hover:bg-gray-200 transition"
          >
            Explore Work
          </button>

          <button
            onClick={() => navigate('/about#contact')}
            className="px-10 py-4 text-lg font-semibold border border-white/30 text-white hover:border-white transition"
          >
            Contact
          </button>

        </div>

      </div>

    </section>
  )
}