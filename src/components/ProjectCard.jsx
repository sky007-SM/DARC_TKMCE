const ProjectCard = ({ title, subtitle, image }) => {
  return (
    <div className="relative group overflow-hidden rounded-xl border border-white/5 bg-white/[0.02]">

      {/* IMAGE */}
      <div
        className="
          absolute inset-0
          bg-center bg-cover
          scale-100 group-hover:scale-105
          transition-transform duration-700
        "
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-500" />

      {/* CONTENT */}
      <div className="relative z-10 p-5 md:p-8 flex flex-col h-[240px] sm:h-[280px] md:h-[320px] justify-end">

        <p className="text-[10px] md:text-xs text-red-400 uppercase tracking-[0.3em] mb-2">
          Development Domain
        </p>

        <h3 className="text-white text-lg md:text-2xl font-semibold leading-tight">
          {title}
        </h3>

        <p className="text-gray-400 text-sm md:text-base mt-2 line-clamp-2">
          {subtitle}
        </p>

        <div className="w-16 h-px bg-red-500/60 mt-4 mb-3" />

        <span className="text-white text-xs md:text-sm tracking-[0.2em] uppercase opacity-80 group-hover:opacity-100 transition">
          Explore →
        </span>

      </div>

    </div>
  )
}

export default ProjectCard