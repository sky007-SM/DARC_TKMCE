import PageTransition from '../components/PageTransition'
import { faculty, execom, alumni } from '../data/team'

const Team = () => {
  return (
    <PageTransition>
      <div className="bg-black min-h-screen pt-28 pb-32 px-8 md:px-16">

        {/* Header */}
        <div className="pl-8 md:pl-20 mb-32">

          <p
            className="
              text-gray-500
              uppercase
              tracking-[0.45em]
              text-xs
              mb-6
            "
          >
            DARC Community
          </p>

          <h1
            className="
              font-orbitron
              text-white
              text-6xl
              md:text-8xl
              font-black
              leading-none
              mb-10
            "
          >
            Our Team
          </h1>

           <div className="h-px bg-red-500/80 mt-4 w-[22%]" />
        </div>

        <div className="max-w-7xl mx-auto">

          {/* Faculty Advisor */}

          <section className="mb-40">

            <h2 className="font-orbitron text-white text-3xl md:text-5xl font-black mb-12">
               Chief Faculty Advisor
            </h2>

            <div
              className="
                max-w-md
                overflow-hidden
                border
                border-white/10
                bg-white/[0.02]
              "
            >

              <img
                src={faculty.image}
                alt={faculty.name}
                className="
                  w-full
                  h-[520px]
                  object-cover
                "
              />

              <div className="p-8">

                <h3 className="text-white text-2xl font-semibold mb-2">
                  {faculty.name}
                </h3>

                <p className="text-red-400">
                  {faculty.role}
                </p>

              </div>

            </div>

          </section>

          {/* Executive Committee */}

          <section className="mb-40">

            <h2 className="font-orbitron text-white text-3xl md:text-5xl font-black mb-12">
              Executive Committee
            </h2>

            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

              {execom.map((member, index) => (

                <div
                  key={index}
                  className="
                    overflow-hidden
                    border
                    border-white/10
                    bg-white/[0.02]
                    group
                  "
                >

                  <img
                    src={member.image}
                    alt={member.name}
                    className="
                      w-full
                      h-[380px]
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-105
                    "
                  />

                  <div className="p-5">

                    <h3 className="text-white text-lg font-semibold">
                      {member.name}
                    </h3>

                    <p className="text-red-400 text-sm mt-1">
                      Executive Committee
                    </p>

                  </div>

                </div>

              ))}

            </div>

          </section>

          {/* Alumni */}

          <section>

            <h2 className="font-orbitron text-white text-3xl md:text-5xl font-black mb-12">
              Alumni
            </h2>

            <div
              className="
                flex
                gap-8
                overflow-x-auto
                pb-4
                gallery-scrollbar
              "
            >

              {alumni.map((member, index) => (

                <div
                  key={index}
                  className="
                    shrink-0
                    w-[280px]
                    overflow-hidden
                    border
                    border-white/10
                    bg-white/[0.02]
                  "
                >

                  <img
                    src={member.image}
                    alt={member.name}
                    className="
                      w-full
                      h-[340px]
                      object-cover
                    "
                  />

                  <div className="p-5">

                    <h3 className="text-white font-semibold">
                      {member.name}
                    </h3>

                    <p className="text-red-400 text-sm mt-1">
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