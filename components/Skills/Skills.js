/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef } from "react";
import Image from "next/image";
import { MENULINKS, SKILLS } from "../../constants";
// import { gsap, Linear } from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Skills = () => {
  const targetSection = useRef(null);

  // useEffect(() => {
  //   const revealTl = gsap.timeline({ defaults: { ease: Linear.easeNone } });
  //   revealTl.from(
  //     targetSection.current.querySelectorAll(".seq"),
  //     { opacity: 0, duration: 0.5, stagger: 0.5 },
  //     "<"
  //   );

  //   ScrollTrigger.create({
  //     trigger: targetSection.current.querySelector(".skills-wrapper"),
  //     start: "100px bottom",
  //     end: `center center`,
  //     animation: revealTl,
  //     scrub: 0,
  //   });
  // }, [targetSection]);

  return (
    <section
      className="w-full relative select-none mt-44 bg-black py-16"
      id={MENULINKS[1].ref}
      ref={targetSection}
    >
      <div className="section-container py-4 flex flex-col justify-center items-center">
        {/* <img
          src="/right-pattern.svg"
          alt=""
          className="absolute hidden right-0 bottom-2/4 w-2/12 max-w-xs md:block"
          loading="lazy"
          height={700}
          width={320}
        /> */}
        <div className="flex flex-col skills-wrapper">
          <div className="flex flex-col">
            {/* <p className="uppercase tracking-widest text-gray-light-1 seq">
              SKILLS
            </p> */}
            <h1 className="text-6xl m-auto font-bold bg-gradient-to-r from-green-400 via-emerald-400 to-green-200 text-transparent bg-clip-text w-fit mb-4 drop-shadow-[0_2px_24px_#00ffb2cc]">
              My Skills
            </h1>
            <h2 className="text-[1.4rem] font-medium md:max-w-4xl w-full mt-2 seq m-auto text-gray-200">
              I excel in creating sleek user experiences for websites and apps, while also mastering full-stack development. Currently diving into DevOps and advanced backend skills. {" "}
            </h2>
          </div>
          <div className="mt-10">
            <h3 className="uppercase tracking-widest text-green-400 font-medium text-base mb-4 seq">
              LANGUAGES AND TOOLS
            </h3>
            <div className="flex flex-wrap gap-6 transform-gpu seq">
              {SKILLS.languagesAndTools.map((skill) => (
                <Image
                  key={skill}
                  src={`/skills/${skill}.svg`}
                  alt={skill}
                  width={50}
                  height={50}
                  className="transition-transform duration-200 hover:scale-110 hover:drop-shadow-[0_0_12px_#00ffb2]"
                />
              ))}
            </div>
          </div>
          <div className="mt-10">
            <h3 className="uppercase tracking-widest text-green-400 font-medium text-base mb-4 seq">
              LIBRARIES AND FRAMEWORKS
            </h3>
            <div className="flex flex-wrap gap-6 transform-gpu seq">
              {SKILLS.librariesAndFrameworks.map((skill) => (
                <Image
                  key={skill}
                  src={`/skills/${skill}.svg`}
                  alt={skill}
                  width={50}
                  height={50}
                  className="transition-transform duration-200 hover:scale-110 hover:drop-shadow-[0_0_12px_#00ffb2]"
                />
              ))}
            </div>
          </div>
          <div className="flex flex-wrap mt-10">
            <div className="mr-16 xs:mr-20 mb-6">
              <h3 className="uppercase tracking-widest text-green-400 font-medium text-base mb-4 seq">
                DATABASES
              </h3>
              <div className="flex flex-wrap gap-6 transform-gpu seq">
                {SKILLS.databases.map((skill) => (
                  <Image
                    key={skill}
                    src={`/skills/${skill}.svg`}
                    alt={skill}
                    width={50}
                    height={50}
                    className="transition-transform duration-200 hover:scale-110 hover:drop-shadow-[0_0_12px_#00ffb2]"
                  />
                ))}
              </div>
            </div>
            <div className="mr-6">
              <h3 className="uppercase tracking-widest text-green-400 font-medium text-base mb-4 seq">
                hosting
              </h3>
              <div className="flex flex-wrap gap-6 transform-gpu seq">
                {SKILLS.hosting.map((skill) => (
                  <Image
                    key={skill}
                    src={`/skills/${skill}.svg`}
                    alt={skill}
                    width={50}
                    height={50}
                    className="transition-transform duration-200 hover:scale-110 hover:drop-shadow-[0_0_12px_#00ffb2]"
                  />
                ))}
              </div>
            </div>
            <div>
              <h3 className="uppercase tracking-widest text-green-400 font-medium text-base mb-4 seq">
                Other
              </h3>
              <div className="flex flex-wrap gap-6 transform-gpu seq">
                {SKILLS.other.map((skill) => (
                  <Image
                    key={skill}
                    src={`/skills/${skill}.svg`}
                    alt={skill}
                    width={50}
                    height={50}
                    className="transition-transform duration-200 hover:scale-110 hover:drop-shadow-[0_0_12px_#00ffb2]"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
