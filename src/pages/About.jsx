import PageTransition from '../components/PageTransition'
import {
  Phone,
} from 'lucide-react'

import { FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'

const About = () => {
  return (
    <PageTransition>
      <div className="bg-black min-h-screen">

        {/* Hero */}

        <section className="relative pt-36 pb-28 px-8 md:px-16 overflow-hidden">

          <div
            className="
              absolute
              top-[-20%]
              left-[-10%]
              w-[45rem]
              h-[45rem]
              bg-red-900/10
              blur-[180px]
            "
          />

          <div className="max-w-7xl mx-auto relative z-10">

            <p className="text-gray-500 uppercase tracking-[0.45em] text-xs mb-6">
              About DARC
            </p>

            <div className="inline-block">

              <h1 className="font-orbitron text-white text-5xl md:text-7xl font-black">
                About Us
              </h1>

              <div className="h-px bg-red-500/80 mt-6 w-48" />

            </div>

          </div>

        </section>

        {/* About Content */}

        <section className="px-8 md:px-16 pb-32">

          <div className="max-w-6xl mx-auto">

            <div className="max-w-5xl">

              <p
                className="
                  text-gray-400
                  leading-relaxed
                  text-lg
                  md:text-xl
                  whitespace-pre-line
                "
              >
{`DARC TKMCE is a student-led technical and innovation community dedicated to advancing engineering excellence in the fields of drones, robotics, and rocketry. The team focuses on transforming theoretical knowledge into practical, high-performance systems through hands-on design, development, and experimentation.

Our work spans UAV design and control systems, autonomous robotics, embedded electronics, propulsion systems, and communication technologies. By integrating hardware design, firmware development, and system-level testing, DARC TKMCE encourages members to build solutions that are reliable, scalable, and aligned with real-world engineering challenges.

Driven by curiosity and collaboration, DARC TKMCE aims to foster innovation, technical skill development, and research-oriented thinking among students. The community actively engages in projects, competitions, and experimental builds, preparing its members to contribute meaningfully to the future of aerospace, robotics, and advanced engineering systems.`}
              </p>

            </div>

          </div>

        </section>

        {/* Connect */}

        <section id="contact" className="px-8 md:px-16 pb-32">
          

          <div className="max-w-6xl mx-auto">

            <div className="mb-16">

              <div className="inline-block">

                <h2
                  className="
                    font-orbitron
                    text-white
                    text-4xl
                    md:text-5xl
                    font-black
                  "
                >
                  Connect With Us
                </h2>

                <div className="h-px bg-red-500/80 mt-5 w-48" />

              </div>

            </div>

            <div className="max-w-3xl">

              {/* Instagram */}

              <a
                href="https://www.instagram.com/darc_tkmce?igsh=MXQ3YzRrZmdhOTkxaQ=="
                target="_blank"
                rel="noreferrer"
                className="
                  flex
                  items-center
                  justify-between
                  py-8
                  border-b
                  border-white/10
                  group
                "
              >

                <div className="flex items-center gap-5">

                  <FaInstagram
                    size={22}
                    className="
                      text-red-400
                      group-hover:text-red-300
                    "
                  />

                  <span className="text-white text-xl">
                    Instagram
                  </span>

                </div>

                <span className="text-gray-500 group-hover:text-white">
                  ↗
                </span>

              </a>

              {/* LinkedIn */}

              <a
                href="https://www.linkedin.com/company/darc-tkmce/"
                target="_blank"
                rel="noreferrer"
                className="
                  flex
                  items-center
                  justify-between
                  py-8
                  border-b
                  border-white/10
                  group
                "
              >

                <div className="flex items-center gap-5">

                  <FaLinkedin
                    size={22}
                    className="
                      text-red-400
                      group-hover:text-red-300
                    "
                  />

                  <span className="text-white text-xl">
                    LinkedIn
                  </span>

                </div>

                <span className="text-gray-500 group-hover:text-white">
                  ↗
                </span>

              </a>

              {/* Faculty Advisor */}

              <a
                href="https://wa.me/918848311454"
                target="_blank"
                rel="noreferrer"
                className="
                  flex
                  items-center
                  justify-between
                  py-8
                  border-b
                  border-white/10
                  group
                "
              >

                <div>

                  <p className="text-gray-500 text-sm mb-2">
                    Chief Faculty Advisor
                  </p>

                  <div className="flex items-center gap-5">

                    <FaWhatsapp
                      size={20}
                      className="
                        text-red-400
                        group-hover:text-red-300
                      "
                    />

                    <span className="text-white text-xl">
                      Dr Nishanth N
                    </span>

                  </div>

                </div>

                <span className="text-gray-500 group-hover:text-white">
                  ↗
                </span>

              </a>

              {/* Team Lead */}

              <a
                href="https://wa.me/919895492980"
                target="_blank"
                rel="noreferrer"
                className="
                  flex
                  items-center
                  justify-between
                  py-8
                  border-b
                  border-white/10
                  group
                "
              >

                <div>

                  <p className="text-gray-500 text-sm mb-2">
                    Team Lead
                  </p>

                  <div className="flex items-center gap-5">

                    <FaWhatsapp
                      size={20}
                      className="
                        text-red-400
                        group-hover:text-red-300
                      "
                    />

                    <span className="text-white text-xl">
                      Kashinath A
                    </span>

                  </div>

                </div>

                <span className="text-gray-500 group-hover:text-white">
                  ↗
                </span>

              </a>

            </div>

          </div>

        </section>

      </div>
    </PageTransition>
  )
}

export default About