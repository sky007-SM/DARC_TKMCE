import PageTransition from '../components/PageTransition'
import { faculty, execom, alumni } from '../data/team'

const Team = () => {
  return (
    <PageTransition>

      <div className="bg-black min-h-screen pt-20 md:pt-28 pb-20 md:pb-32 px-4 md:px-16 overflow-x-hidden">

        {/* HEADER */}
        <div className="max-w-7xl mx-auto mb-16 md:mb-32">

          <p className="text-gray-500 uppercase tracking-[0.35em] md:tracking-[0.45em] text-xs mb-4 md:mb-6">
            DARC Community
          </p>

          <h1 className="font-orbitron text-white text-4xl md:text-8xl font-black leading-none mb-6 md:mb-10">
            Our Team
          </h1>

          <div className="h-px bg-red-500/80 w-24 md:w-[22%]" />
        </div>

        <div className="max-w-7xl mx-auto">

          {/* FACULTY */}
          <section className="mb-20 md:mb-40">

            <h2 className="font-orbitron text-white text-2xl md:text-5xl font-black mb-8 md:mb-12">
              Chief Faculty Advisor
            </h2>

            <div className="max-w-md overflow-hidden border border-white/10 bg-white/[0.02]">

              <img
                src={faculty.image}
                alt={faculty.name}
                className="w-full h-[320px] md:h-[520px] object-cover"
              />

              <div className="p-5 md:p-8">

                <h3 className="text-white text-xl md:text-2xl font-semibold mb-2">
                  {faculty.name}
                </h3>

                <p className="text-red-400 text-sm md:text-base">
                  {faculty.role}
                </p>

              </div>

            </div>

          </section>

          {/* EXECOM */}
          <section className="mb-20 md:mb-40">

            <h2 className="font-orbitron text-white text-2xl md:text-5xl font-black mb-8 md:mb-12">
              Executive Committee
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">

              {execom.map((member, index) => (
                <div
                  key={index}
                  className="overflow-hidden border border-white/10 bg-white/[0.02] group"
                >

                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-[260px] md:h-[380px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="p-4 md:p-5">

                    <h3 className="text-white text-base md:text-lg font-semibold">
                      {member.name}
                    </h3>

                    <p className="text-red-400 text-xs md:text-sm mt-1">
                      {member.role}
                    </p>

                  </div>

                </div>
              ))}

            </div>

          </section>

          {/* ALUMNI */}
          <section>

            <h2 className="font-orbitron text-white text-2xl md:text-5xl font-black mb-8 md:mb-12">
              Alumni
            </h2>

            <div className="flex gap-4 md:gap-8 overflow-x-auto pb-4">

              {alumni.map((member, index) => (
                <div
                  key={index}
                  className="shrink-0 w-[220px] md:w-[280px] overflow-hidden border border-white/10 bg-white/[0.02]"
                >

                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-[260px] md:h-[340px] object-cover"
                  />

                  <div className="p-4 md:p-5">

                    <h3 className="text-white text-sm md:text-base font-semibold">
                      {member.name}
                    </h3>

                    <p className="text-red-400 text-xs md:text-sm mt-1">
                      Alumni
                    </p>

                  </div>

                </div>
              ))}

            </div>

          </section>

        </div>
      </div>

    </PageTransition>
  )
}

export default Team