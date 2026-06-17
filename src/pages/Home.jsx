import CinematicHero from '../components/CinematicHero'
import PageTransition from '../components/PageTransition'
import FeaturedProjects from '../components/FeaturedProjects'
import LiquidEther from '../components/LiquidEther'

const domains = [
  'Drone Applications',
  'Robotics',
  'Embedded Systems',
  'IoT Infrastructure',
]

const Home = () => {
  return (
    <PageTransition>
      <div className="relative min-h-screen bg-black text-white overflow-hidden">

        {/* 🔥 BACKGROUND LAYER */}
        <div className="fixed inset-0 -z-10">
          <LiquidEther
            colors={['#5227FF', '#FF9FFC', '#B497CF']}
            mouseForce={18}
            cursorSize={120}
            isViscous
            viscous={28}
            resolution={0.6}
            autoDemo
          />
        </div>

        {/* DARK OVERLAY (makes UI readable) */}
        <div className="fixed inset-0 -z-10 bg-black/40" />

        {/* FOREGROUND CONTENT */}
        <div className="relative z-10">

          {/* HERO */}
          <CinematicHero />

          {/* ABOUT SECTION */}
          <section className="relative py-40 px-8 md:px-16 bg-black/40 backdrop-blur-sm">

            <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-24 items-center">

              <div>
                <p className="text-gray-400 uppercase tracking-[0.45em] text-xs mb-8">
                  Autonomous Engineering
                </p>

                <h2 className="text-white text-4xl md:text-6xl font-black leading-[1.05] max-w-3xl mb-10">
                  Intelligent systems engineered for real-world autonomy.
                </h2>

                <div className="w-24 h-px bg-red-500/70 mb-10" />

                <p className="text-gray-400 leading-relaxed text-base md:text-lg max-w-2xl">
                  DARC develops robotic solutions, UAV systems, embedded architectures,
                  intelligent infrastructure and autonomous technologies.
                </p>
              </div>

              <div className="relative overflow-hidden rounded-xl">
                <img
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop"
                  className="w-full h-[600px] object-cover grayscale brightness-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              </div>

            </div>
          </section>

          {/* FEATURED */}
          <FeaturedProjects />

          {/* DOMAINS */}
          <section className="py-40 px-8 md:px-16 bg-black/60">
            <div className="max-w-7xl mx-auto">

              <h2 className="text-4xl md:text-6xl font-black mb-20">
                Core Domains
              </h2>

              <div className="grid md:grid-cols-2 gap-px bg-white/10">

                {domains.map((item) => (
                  <div key={item} className="bg-black p-14 hover:bg-white/5 transition">
                    <div className="w-10 h-px bg-red-500 mb-10" />
                    <h3 className="text-3xl font-semibold mb-6">{item}</h3>
                    <p className="text-gray-500">
                      Advanced autonomous systems and infrastructure research.
                    </p>
                  </div>
                ))}

              </div>
            </div>
          </section>

        </div>
      </div>
    </PageTransition>
  )
}

export default Home