import LiquidEther from './LiquidEther'
import { useNavigate } from 'react-router-dom'

export default function CinematicHero() {
  const navigate = useNavigate()

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-black">

      {/* 🌊 BACKGROUND (mobile optimized) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="w-full h-full scale-[1.05] md:scale-100">
          <LiquidEther
            colors={['#EE0C00', '#F7024D', '#D5E5E6']}

            mouseForce={16}
            cursorSize={110}

            isViscous
            viscous={48}

            iterationsViscous={48}
            iterationsPoisson={48}

            resolution={0.5}   /* ↓ IMPORTANT for mobile performance */

            isBounce={false}

            autoDemo
            autoSpeed={0.5}
            autoIntensity={2.2}

            takeoverDuration={0.25}
            autoResumeDelay={3000}
            autoRampDuration={0.6}
          />
        </div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4 md:px-6">

        {/* label */}
        <p className="text-gray-400 tracking-[0.35em] md:tracking-[0.45em] uppercase text-[10px] md:text-[11px] mb-5 md:mb-6">
          Autonomous Systems Lab
        </p>

        {/* headline */}
        <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-black leading-tight max-w-3xl md:max-w-4xl">
          Systems that move, sense and think
        </h1>

        {/* subtext */}
        <p className="text-gray-500 mt-5 md:mt-6 max-w-xl text-sm sm:text-base md:text-lg">
          Robotics • Embedded AI • IoT Infrastructure • Drone Systems
        </p>

        {/* divider */}
        <div className="w-20 md:w-28 h-px bg-white/20 mt-8 md:mt-10" />

        {/* buttons */}
        <div className="mt-10 md:mt-14 flex flex-col sm:flex-row gap-3 md:gap-5 w-full sm:w-auto">

          <button
            onClick={() => navigate('/projects')}
            className="
              w-full sm:w-auto
              px-6 md:px-10
              py-3 md:py-4
              text-base md:text-lg
              font-semibold
              bg-white text-black
              hover:bg-gray-200
              transition
            "
          >
            Explore Work
          </button>

          <button
            onClick={() => navigate('/about#contact')}
            className="
              w-full sm:w-auto
              px-6 md:px-10
              py-3 md:py-4
              text-base md:text-lg
              font-semibold
              border border-white/30
              text-white
              hover:border-white
              transition
            "
          >
            Contact
          </button>

        </div>

      </div>

    </section>
  )
}