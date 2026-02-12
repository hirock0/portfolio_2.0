import Btn from "@/conponents/Ui/Btns/Btn";
import TypeWriter from "@/conponents/Ui/TypeWriter/TypeWriter";
import Image from "next/image";

const Banner = () => {
  return (
    <section
      className="bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 relative flex max-lg:flex-col-reverse items-center justify-between min-h-[90vh] max-w-[1440px] mx-auto px-6 md:px-8 lg:px-12 py-16 lg:py-20 gap-12 overflow-hidden"
      aria-label="Hero banner section"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400/30 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-green-400/30 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      {/* Content Section */}
      <div className="flex-1 w-full lg:w-1/2 space-y-8 z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-500/20 to-green-500/20 backdrop-blur-sm rounded-full border border-yellow-500/30">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Available for new opportunities
          </span>
        </div>

        {/* Typewriter Heading */}
        <div className="space-y-6">
          <div className="relative group">
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-purple-700 to-yellow-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200 animate-gradient-x"></div>

            <div className="relative bg-gradient-to-br from-purple-500/10 via-transparent to-purple-500/10 backdrop-blur-md rounded-2xl p-8 lg:p-10 border border-purple-500/20 shadow-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent leading-tight">
                <TypeWriter
                  texts={[
                    "Hello, I'm Hirock",
                    "I turn ideas into code.",
                    "I solve real problems.",
                  ]}
                />
              </h1>

              {/* Animated underline */}
              <div className="h-1.5 w-24 bg-gradient-to-r from-yellow-500 to-green-500 rounded-full mt-4 animate-pulse"></div>
            </div>
          </div>

          {/* Subtitle with icon */}
          <div className="flex items-start gap-4 p-6 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg">
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-400 rounded-lg flex items-center justify-center shadow-lg">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            </div>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed flex-1">
              Full-stack developer passionate about creating{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                innovative solutions
              </span>{" "}
              that drive business growth and enhance user experiences.
            </p>
          </div>
        </div>

        {/* CTA Buttons with enhanced effects */}
        <div className="flex flex-wrap gap-4 items-center pt-4">
          <Btn
            type="cv"
            btn="Download CV"
            value=""
            className=" group relative bg-gradient-to-r from-green-600 to-green-700  hover:from-green-700 hover:to-green-800  text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-2xl hover:shadow-green-500/50 transition-all duration-300 ease-in-out  w-full text-center overflow-hidden before:absolute before:inset-0 before:bg-white/20 before:translate-y-full hover:before:translate-y-0 before:transition-transform before:duration-300 "
            aria_label="Download my CV"
          />
          <Btn
            type="resume"
            btn="Download Resume"
            value=""
            className=" group relative bg-gradient-to-r from-yellow-600 to-yellow-700  hover:from-yellow-700 hover:to-yellow-800  text-white font-semibold  px-8 py-4 rounded-xl shadow-lg hover:shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300 ease-in-out   w-full text-center overflow-hidden before:absolute before:inset-0 before:bg-white/20 before:translate-y-full hover:before:translate-y-0 before:transition-transform before:duration-300 "
            aria_label="Download my resume"
          />
        </div>

        {/* Stats or Social Proof */}
        <div className="flex flex-wrap gap-6 pt-6">
          <div className="flex items-center gap-3 px-4 py-3 bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm rounded-lg shadow-md">
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
              5+
            </div>
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Years of
              </p>
              <p className="text-sm font-semibold text-gray-900 dark:text-white">
                Experience
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 px-4 py-3 bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm rounded-lg shadow-md">
            <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
              50+
            </div>
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Projects
              </p>
              <p className="text-sm font-semibold text-gray-900 dark:text-white">
                Completed
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Image Section with advanced effects */}
      <div className="flex-1 w-full lg:w-1/2 flex items-center justify-center z-10">
        <div className="relative group">
          {/* Outer rotating ring */}
          <div className="absolute -inset-8 bg-gradient-to-r from-purple-400 via-purple-500 to-purples-400 rounded-full opacity-30 blur-2xl animate-spin-slow"></div>

          {/* Middle pulsing glow */}
          <div className="absolute -inset-6 bg-gradient-to-r from-green-400 to-yellow-500 rounded-full opacity-40 blur-xl animate-pulse"></div>

          {/* Decorative circles */}
          <div className="absolute -top-4 -right-4 w-20 h-20 to-purple-600 rounded-full blur-md animate-bounce"></div>
          <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-green-400/50 rounded-full blur-md animate-bounce animation-delay-2000"></div>

          {/* Main Image Container */}
          <div className="relative">
            {/* Glass morphism frame */}
            <div className="absolute -inset-4 bg-gradient-to-br from-white/40 to-white/10 dark:from-gray-800/40 dark:to-gray-900/10 backdrop-blur-xl rounded-full border border-white/20"></div>

            <Image
              src="/banner/Hirock200.png"
              alt="Hirock - Full-stack Developer"
              width={500}
              height={500}
              priority
              quality={95}
              className="
                relative
                rounded-full 
                object-cover 
                shadow-2xl 
                ring-8 ring-white/60 dark:ring-gray-800/60
                group-hover:scale-105 
                group-hover:ring-purple-500/50
                transition-all 
                duration-700 
                ease-in-out
              "
            />

            {/* Floating badge */}
            <div className="absolute bottom-8 -right-4 px-6 py-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full shadow-2xl animate-float">
              <p className="text-white font-bold text-sm flex items-center gap-2">
                <span className="text-2xl">👋</span>
                <span>Let's Connect!</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
