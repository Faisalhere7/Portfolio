import React, { useState } from "react";
import { experiences } from "../../constants";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-20 px-6 sm:px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2 overflow-hidden pb-32 sm:pb-20"
      // Extra bottom padding on mobile to prevent clip-path from cutting off last card
    >
      {/* Section Title */}
      <div className="text-center mb-16 md:mb-20">
        <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">EXPERIENCE</h2>
        <div className="w-32 sm:w-40 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-6 rounded-full"></div>
        <p className="text-gray-300 mt-6 text-base sm:text-lg max-w-2xl mx-auto px-4">
          A collection of my freelance and professional work across multiple domains
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative max-w-7xl mx-auto pb-12 sm:pb-16">
        {/* Central Timeline Line - hidden on mobile */}
        <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full hidden sm:block">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-500 via-pink-500 to-cyan-500 blur-lg opacity-60"></div>
          <div className="relative h-full bg-gradient-to-b from-purple-400 via-pink-400 to-cyan-400 rounded-full"></div>
        </div>

        {/* Group cards in pairs */}
        {Array.from({ length: Math.ceil(experiences.length / 2) }).map((_, pairIndex) => {
          const firstIndex = pairIndex * 2;
          const secondIndex = firstIndex + 1;
          const first = experiences[firstIndex];
          const second = experiences[secondIndex];
          const isLastPair = pairIndex === Math.ceil(experiences.length / 2) - 1;

          return (
            <div
              key={pairIndex}
              className={`relative ${!isLastPair ? "mb-20 md:mb-32" : "mb-8 sm:mb-0"}`}
            >
              {/* Timeline Dot */}
              {first && (
                <div
                  className="absolute left-1/2 -translate-x-1/2 top-12 w-8 h-8 
                  bg-gradient-to-br from-purple-600 to-pink-600 rounded-full 
                  border-4 border-gray-900 shadow-2xl shadow-purple-600/70 
                  ring-4 ring-purple-500/40 z-20 hidden sm:block animate-pulse"
                />
              )}

              {/* Cards Layout */}
              <div className="flex flex-col sm:flex-row gap-12 sm:gap-0 items-start">
                {/* Left Card */}
                {first && (
                  <div className="w-full sm:w-1/2 flex justify-end sm:pr-8">
                    <div className="w-full max-w-lg mx-auto sm:mx-0">
                      <ExperienceCard experience={first} />
                    </div>
                  </div>
                )}

                {/* Right Card */}
                {second && (
                  <div className="w-full sm:w-1/2 flex justify-start sm:pl-8">
                    <div className="w-full max-w-lg mx-auto sm:mx-0">
                      <ExperienceCard experience={second} />
                    </div>
                  </div>
                )}

                {/* Spacer for odd count */}
                {!second && <div className="hidden sm:block w-1/2" />}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

// Experience Card - unchanged, already mobile-safe
const ExperienceCard = ({ experience }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const shouldTruncate = experience.desc.length > 150;

  return (
    <div
      className="relative p-6 sm:p-8 rounded-2xl bg-gray-900/80 backdrop-blur-xl border border-purple-500/30 shadow-2xl 
      transition-all duration-500 hover:scale-105 hover:shadow-purple-500/50 hover:border-purple-400 
      group overflow-hidden w-full mx-auto max-w-lg"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl"></div>

      <div className="relative z-10">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6">
          <div className="relative w-20 h-20 bg-white rounded-xl overflow-hidden shadow-lg ring-4 ring-purple-500/30 transition-transform duration-300 group-hover:scale-110 flex-shrink-0">
            <img
              src={experience.img}
              alt={`${experience.company} logo`}
              className="w-full h-full object-contain p-3"
              onError={(e) => (e.target.src = "/fallback-logo.png")}
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-20 translate-x-full group-hover:translate-x-[-100%] transition-transform duration-1000"></div>
          </div>

          <div className="text-center sm:text-left flex-1">
            <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
              {experience.role}
            </h3>
            <h4 className="text-lg text-purple-300 font-medium mt-1">
              {experience.company}
            </h4>
            <p className="text-sm text-gray-400 mt-2">{experience.date}</p>
          </div>
        </div>

        <div className="mb-6">
          <p className="text-gray-300 leading-relaxed text-base text-center sm:text-left">
            {shouldTruncate && !isExpanded ? (
              <>
                {experience.desc.substring(0, 150)}...
                <button
                  onClick={() => setIsExpanded(true)}
                  className="text-purple-400 font-medium ml-2 hover:text-purple-300 transition"
                >
                  See More
                </button>
              </>
            ) : (
              <>
                {experience.desc}
                {shouldTruncate && isExpanded && (
                  <button
                    onClick={() => setIsExpanded(false)}
                    className="text-purple-400 font-medium ml-2 hover:text-purple-300 transition block mt-2"
                  >
                    See Less
                  </button>
                )}
              </>
            )}
          </p>
        </div>

        <div>
          <h5 className="text-white font-semibold mb-3 text-center sm:text-left">
            Key Skills & Tools:
          </h5>
          <div className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-3">
            {experience.skills.map((skill, i) => (
              <span
                key={i}
                className="px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-pink-600 
                rounded-full border border-purple-400/50 shadow-md hover:shadow-purple-500/50 
                transition-all duration-300 hover:translate-y-[-2px]"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;