import { useParams } from 'react-router-dom'
import { useRef, useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

import PageTransition from '../components/PageTransition'
import { projects } from '../data/projects'

const ProjectDetail = () => {
  const { slug } = useParams()

  const galleryRef = useRef(null)

  const [viewerOpen, setViewerOpen] = useState(false)
  const [viewerIndex, setViewerIndex] = useState(0)

  const project = projects.find(
    (project) => project.slug === slug
  )

  const openViewer = (index) => {
    setViewerIndex(index)
    setViewerOpen(true)
  }

  const closeViewer = () => {
    setViewerOpen(false)
  }

  const nextImage = () => {
    if (
      viewerIndex <
      project.gallery.length - 1
    ) {
      setViewerIndex(viewerIndex + 1)
    }
  }

  const previousImage = () => {
    if (viewerIndex > 0) {
      setViewerIndex(viewerIndex - 1)
    }
  }

  const handleWheel = (e) => {
    if (!galleryRef.current) return

    e.preventDefault()

    galleryRef.current.scrollLeft += e.deltaY
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!viewerOpen) return

      if (e.key === 'Escape') closeViewer()

      if (e.key === 'ArrowRight') nextImage()

      if (e.key === 'ArrowLeft') previousImage()
    }

    window.addEventListener(
      'keydown',
      handleKeyDown
    )

    return () =>
      window.removeEventListener(
        'keydown',
        handleKeyDown
      )
  }, [viewerOpen, viewerIndex])

  if (!project) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <h1 className="text-white text-3xl">
          Project Not Found
        </h1>
      </div>
    )
  }

  return (
    <PageTransition>

      <div className="bg-black min-h-screen">

        {/* Banner */}

        <section className="relative h-[72vh] overflow-hidden">

          <img
            src={project.banner}
            alt={project.title}
            className="
              w-full
              h-full
              object-cover
              brightness-[0.9]
            "
            style={{
              objectPosition:
                project.bannerPosition ||
                'center center',
            }}
          />

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-b
              from-black/10
              via-black/20
              to-black
            "
          />

        </section>

        {/* Content */}

        <section className="px-8 md:px-16 py-24">

          <div className="max-w-6xl mx-auto">

            <p
              className="
                text-red-500
                uppercase
                tracking-[0.4em]
                text-xs
                mb-5
              "
            >
              Research Project
            </p>

            <h1
              className="
                font-orbitron
                text-white
                text-5xl
                md:text-7xl
                font-black
                mb-10
              "
            >
              {project.title}
            </h1>

            <div className="w-24 h-px bg-red-500 mb-12" />

            <div className="max-w-4xl">

              <p
                className="
                  text-gray-400
                  leading-relaxed
                  text-lg
                  md:text-xl
                  whitespace-pre-line
                "
              >
                {project.description}
              </p>

            </div>

            {/* Tags */}

            <div className="flex flex-wrap gap-3 mt-12">

              {project.tags?.map((tag) => (

                <span
                  key={tag}
                  className="
                    px-4
                    py-2
                    text-sm
                    border
                    border-red-500/20
                    bg-red-500/[0.03]
                    text-red-300
                    tracking-wide
                  "
                >
                  {tag}
                </span>

              ))}

            </div>

          </div>

        </section>

        {/* Team */}

        <section className="px-8 md:px-16 pb-24">

          <div className="max-w-6xl mx-auto">

            <h2
              className="
                font-orbitron
                text-white
                text-3xl
                md:text-5xl
                font-black
                mb-12
              "
            >
              Team Members
            </h2>

            <div className="space-y-4">

              {project.members?.map((member) => (

                <div
                  key={member}
                  className="
                    border-l
                    border-red-500/40
                    pl-6
                    py-2
                    text-gray-300
                    text-lg
                  "
                >
                  {member}
                </div>

              ))}

            </div>

          </div>

        </section>

        {/* Gallery */}

        {project.gallery?.length > 0 && (

          <section className="px-8 md:px-16 pb-32">

            <div className="max-w-6xl mx-auto">

              <h2
                className="
                    font-orbitron
                    text-white
                    text-3xl
                    md:text-5xl
                    font-black
                    mb-10
                "
                >
                Project Gallery
              </h2>

              <div
                ref={galleryRef}
                onWheel={handleWheel}
                className="
                  gallery-scrollbar
                  flex
                  gap-6
                  overflow-x-auto
                  pb-4
                "
              >

                {project.gallery.map(
                  (image, index) => (

                    <img
                      key={index}
                      src={image}
                      alt={`${project.title} ${index + 1}`}
                      onClick={() =>
                        openViewer(index)
                      }
                      className="
                        shrink-0
                        w-[340px]
                        md:w-[420px]
                        h-[220px]
                        md:h-[280px]
                        object-contain
                        rounded-xl
                        border
                        border-white/10
                        bg-white/[0.02]
                        cursor-pointer
                        hover:scale-[1.02]
                        transition-transform
                        duration-300
                      "
                    />

                  )
                )}

              </div>

            </div>

          </section>

        )}

        {/* Viewer */}

        {viewerOpen && (

          <div
            className="
              fixed
              inset-0
              z-[999]
              bg-black/95
              backdrop-blur-md
              flex
              items-center
              justify-center
            "
          >

            <button
              onClick={closeViewer}
              className="
                absolute
                top-6
                right-6
                text-white
              "
            >
              <X size={34} />
            </button>

            {viewerIndex > 0 && (

              <button
                onClick={previousImage}
                className="
                  absolute
                  left-6
                  text-white
                "
              >
                <ChevronLeft size={50} />
              </button>

            )}

            {viewerIndex <
              project.gallery.length - 1 && (

              <button
                onClick={nextImage}
                className="
                  absolute
                  right-6
                  text-white
                "
              >
                <ChevronRight size={50} />
              </button>

            )}

            <img
              src={
                project.gallery[viewerIndex]
              }
              alt=""
              className="
                max-w-[90vw]
                max-h-[85vh]
                object-contain
              "
            />

          </div>

        )}

      </div>

    </PageTransition>
  )
}

export default ProjectDetail