import Btn from "@/conponents/Ui/Btns/Btn";
import Image from "next/image";

const About = () => {
  const skills = [
    {
      category: "Frontend",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "MongoDB", "PostgreSQL"],
    },
    { category: "Tools", items: ["Git", "Docker", "AWS", "Figma"] },
  ];

  const values = [
    {
      icon: "💡",
      title: "Innovation",
      description:
        "Constantly exploring new technologies and approaches to solve complex problems",
    },
    {
      icon: "🎯",
      title: "Quality",
      description:
        "Committed to writing clean, maintainable code with attention to detail",
    },
    {
      icon: "🚀",
      title: "Growth",
      description:
        "Dedicated to continuous learning and staying ahead of industry trends",
    },
    {
      icon: "🤝",
      title: "Collaboration",
      description:
        "Strong team player who values communication and shared success",
    },
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen py-20 overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-full backdrop-blur-sm">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
              Crafting Digital Experiences
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Transforming ideas into elegant, scalable solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image Section */}
          <div className="relative group">
            <div className="relative w-full max-w-md mx-auto">
              {/* Decorative background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>

              {/* Image container */}
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 bg-gray-900/50 backdrop-blur-sm transform group-hover:scale-[1.02] transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"></div>
                <Image
                  src="/banner/Hirock200.png"
                  alt="About Me"
                  fill
                  className="object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-500"></div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6">
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 text-lg leading-relaxed">
                Hi there! I'm a passionate{" "}
                <span className="text-blue-400 font-semibold">
                  full-stack developer
                </span>{" "}
                with over 5 years of experience building modern web
                applications. I specialize in creating seamless user experiences
                backed by robust, scalable architectures.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                My journey in tech started with a curiosity for how things work,
                which evolved into a love for building products that make a real
                difference. I thrive on challenges and am always eager to learn
                new technologies and methodologies.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                When I'm not coding, you'll find me exploring the latest tech
                trends, contributing to open-source projects, or sharing
                knowledge with the developer community.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Btn
                type="cv"
                btn="Download CV"
                value=""
                className=" group relative bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-2xl hover:shadow-green-500/50 transition-all duration-300 ease-in-out sm:min-w-[180px] w-full text-center overflow-hidden before:absolute before:inset-0 before:bg-white/20 before:translate-y-full hover:before:translate-y-0 before:transition-transform before:duration-300
            "
                aria_label="Download my CV"
              />

              <Btn
                type="view_projects"
                btn="View Projects"
                value=""
                className=" group relative bg-gradient-to-r from-yellow-600 to-yellow-700 hover:from-yellow-700 hover:to-yellow-800 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300 ease-in-out sm:min-w-[180px] w-full text-center overflow-hidden before:absolute before:inset-0 before:bg-white/20 before:translate-y-full hover:before:translate-y-0 before:transition-transform before:duration-300
            "
                aria_label="View Projects"
              />
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {skills.map((skillSet, index) => (
              <div
                key={index}
                className="group relative p-6 bg-gray-900/50 backdrop-blur-sm border border-white/10 rounded-xl hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 rounded-xl transition-all duration-300"></div>

                <h4 className="text-xl font-semibold text-blue-400 mb-4 relative z-10">
                  {skillSet.category}
                </h4>
                <div className="flex flex-wrap gap-2 relative z-10">
                  {skillSet.items.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 text-sm bg-gray-800/50 border border-gray-700/50 rounded-full text-gray-300 hover:border-blue-500/50 hover:text-blue-400 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              What Drives Me
            </span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="group relative p-6 bg-gray-900/30 backdrop-blur-sm border border-white/10 rounded-xl hover:border-purple-500/50 transition-all duration-300 hover:transform hover:-translate-y-2"
              >
                {/* Animated gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 rounded-xl transition-all duration-300"></div>

                <div className="relative z-10">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h4 className="text-xl font-semibold text-white mb-2">
                    {value.title}
                  </h4>
                  <p className="text-gray-400 text-sm">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="inline-block p-8 bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-white/10 rounded-2xl backdrop-blur-sm">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              Let's Build Something Amazing Together
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl">
              I'm always interested in hearing about new projects and
              opportunities.
            </p>

            <Btn
              type="get_in_touch"
              btn="Get In Touch"
              value=""
              className="
              group relative
              bg-gradient-to-r from-yellow-600 to-yellow-700 
              hover:from-yellow-700 hover:to-yellow-800 
              text-white font-semibold
              px-8 py-4 rounded-xl
              shadow-lg hover:shadow-2xl hover:shadow-yellow-500/50
              transition-all duration-300 ease-in-out
              min-w-[180px] text-center
              overflow-hidden
              before:absolute before:inset-0 before:bg-white/20 before:translate-y-full hover:before:translate-y-0 before:transition-transform before:duration-300
            "
              aria_label="Get In Touch"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
