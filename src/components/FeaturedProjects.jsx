import { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './FeaturedProjects.css'
import { projects } from '../data/projects'

const FeaturedProjects = () => {
  const [paused, setPaused] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  const navigate = useNavigate()

  const wrapperRef = useRef(null)
  const sectionRef = useRef(null)

  const animationRef = useRef(null)

  const isDragging = useRef(false)
  const startX = useRef(0)
  const scrollStart = useRef(0)

  const featuredProjects = projects.filter((p) =>
    ['el-bot', 'quadcopter', 'darcy', 'robotic-arm','eva-smart-home-security-automation-controller'].includes(p.slug)
  )

  // =========================
  // 👁 VISIBILITY OBSERVER
  // =========================
  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      {
        threshold: 0.25, // starts when 25% visible
      }
    )

    observer.observe(el)

    return () => observer.disconnect()
  }, [])

  // =========================
  // 🚀 ANIMATION LOOP (ONLY WHEN VISIBLE)
  // =========================
  useEffect(() => {
    const el = wrapperRef.current
    if (!el) return

    const speed = 0.25

    const step = () => {
      if (isVisible && !paused && !isDragging.current) {
        el.scrollLeft += speed

        // seamless loop
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0
        }
      }

      animationRef.current = requestAnimationFrame(step)
    }

    animationRef.current = requestAnimationFrame(step)

    return () => cancelAnimationFrame(animationRef.current)
  }, [isVisible, paused])

  // =========================
  // DRAG LOGIC
  // =========================
  const handleMouseDown = (e) => {
    isDragging.current = true
    setPaused(true)

    startX.current = e.pageX
    scrollStart.current = wrapperRef.current.scrollLeft
  }

  const handleMouseMove = (e) => {
    if (!isDragging.current) return

    const delta = e.pageX - startX.current
    wrapperRef.current.scrollLeft = scrollStart.current - delta
  }

  const handleMouseUp = () => {
    isDragging.current = false
    setPaused(false)
  }

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-black overflow-hidden"
    >

      {/* Header */}
      <div className="px-8 md:px-16 mb-10">
        <h2 className="font-orbitron text-white text-4xl md:text-6xl font-black">
          Featured Work
        </h2>
      </div>

      {/* Carousel */}
      <div
        ref={wrapperRef}
        className="featured-wrapper"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={() => setPaused(true)}
        onTouchEnd={() => setPaused(false)}
      >

        <div className="featured-marquee flex">

          {[...featuredProjects, ...featuredProjects].map((project, index) => (
            <div
              key={`${project.slug}-${index}`}
              className="group shrink-0 w-[650px] mx-5"
            >

              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full
                    h-[320px]
                    object-cover
                    brightness-75
                    contrast-110
                    transition-transform
                    duration-[4000ms]
                    group-hover:scale-105
                  "
                />
              </div>

              <div className="pt-5">
                <p className="text-red-400 uppercase tracking-[0.35em] text-xs mb-2">
                  {project.category}
                </p>

                <h3 className="text-white text-2xl font-semibold">
                  {project.title}
                </h3>
              </div>

              <div className="mt-4">
                <button
                  onClick={() => navigate(`/projects/${project.slug}`)}
                  className="bg-white text-black px-5 py-2 text-sm font-semibold hover:bg-gray-200 transition"
                >
                  View Project
                </button>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default FeaturedProjects