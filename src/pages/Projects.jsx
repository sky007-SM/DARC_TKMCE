import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition'
import { projects } from '../data/projects'

const Projects = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <PageTransition>

      <div className="bg-black min-h-screen pt-20 md:pt-28 pb-20 md:pb-32 px-4 md:px-16 overflow-x-hidden">

        <div className="max-w-7xl mx-auto">

          {/* HEADER */}
          <div className="mb-12 md:mb-20">

            <p className="text-gray-500 uppercase tracking-[0.35em] md:tracking-[0.4em] text-xs mb-4">
              Research & Engineering
            </p>

            <h1 className="font-orbitron text-white text-3xl md:text-7xl font-black">
              Projects
            </h1>

            <div className="w-28 md:w-48 h-px bg-red-500/80 mt-6 md:mt-8" />

          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">

            {projects.map((project) => (

              <Link
                key={project.slug}
                to={`/projects/${project.slug}`}
                className="group block"
              >

                {/* CARD */}
                <div
                  className="
                    overflow-hidden
                    rounded-xl
                    border
                    border-white/5
                    bg-white/[0.02]
                    transition-all
                    duration-500
                    group-hover:border-red-500/20
                  "
                >

                  <img
                    src={project.image}
                    alt={project.title}
                    className="
                      w-full
                      h-[240px]
                      sm:h-[300px]
                      md:h-[420px]
                      object-cover
                      brightness-75
                      transition-transform
                      duration-700
                      group-hover:scale-105
                    "
                  />

                  <div className="p-4 md:p-6">

                    <p className="text-red-400 uppercase tracking-[0.3em] text-xs mb-3">
                      {project.category}
                    </p>

                    <h2 className="text-white text-lg md:text-2xl font-semibold leading-tight">
                      {project.title}
                    </h2>

                  </div>

                </div>

              </Link>

            ))}

          </div>

        </div>

      </div>

    </PageTransition>
  )
}

export default Projects