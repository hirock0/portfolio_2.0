"use client";
import Btn from "@/conponents/Ui/Btns/Btn";
import Image from "next/image";
import { useState } from "react";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = ["all", "web app", "mobile", "ui/ux", "open source"];

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "web app",
      description:
        "A full-stack e-commerce solution with real-time inventory management, payment integration, and admin dashboard.",
      image: "/images/projects/ecommerce.jpg",
      tags: ["Next.js", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: true,
    },
    {
      id: 2,
      title: "Task Management App",
      category: "web app",
      description:
        "Collaborative task management tool with real-time updates, team workspaces, and progress tracking.",
      image: "/images/projects/task-app.jpg",
      tags: ["React", "Firebase", "Tailwind CSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: true,
    },
    {
      id: 3,
      title: "Fitness Tracker",
      category: "mobile",
      description:
        "Mobile fitness application with workout plans, progress tracking, and nutrition guidance.",
      image: "/images/projects/fitness.jpg",
      tags: ["React Native", "Express", "PostgreSQL"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: false,
    },
    {
      id: 4,
      title: "Portfolio Design System",
      category: "ui/ux",
      description:
        "Comprehensive design system with reusable components, dark mode support, and accessibility features.",
      image: "/images/projects/design-system.jpg",
      tags: ["Figma", "React", "Storybook"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: false,
    },
    {
      id: 5,
      title: "Analytics Dashboard",
      category: "web app",
      description:
        "Real-time analytics dashboard with interactive charts, data visualization, and custom reporting.",
      image: "/images/projects/analytics.jpg",
      tags: ["Next.js", "Chart.js", "TypeScript"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: true,
    },
    {
      id: 6,
      title: "Open Source UI Library",
      category: "open source",
      description:
        "Collection of accessible, customizable React components used by 1000+ developers.",
      image: "/images/projects/ui-library.jpg",
      tags: ["React", "TypeScript", "CSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: false,
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="relative min-h-screen py-20 overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -left-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-2/3 left-1/2 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-purple-400 bg-purple-500/10 border border-purple-500/20 rounded-full backdrop-blur-sm">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white via-purple-100 to-pink-200 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my recent work and creative solutions
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 capitalize ${
                activeFilter === filter
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/50"
                  : "bg-gray-800/50 text-gray-400 border border-gray-700/50 hover:border-purple-500/50 hover:text-purple-400"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-gray-900/50 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-[1.02] animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-gradient-to-r from-yellow-500/90 to-orange-500/90 text-white text-xs font-bold rounded-full backdrop-blur-sm">
                  ⭐ Featured
                </div>
              )}

              {/* Image Container */}
              <div className="relative h-64 overflow-hidden bg-gray-800">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 group-hover:opacity-0 transition-opacity duration-500"></div>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500"></div>

                {/* Action Buttons - Appear on hover */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 bg-white text-gray-900 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300 transform hover:scale-105"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 bg-gray-800/90 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/20 hover:bg-purple-500 hover:border-purple-500 transition-all duration-300 transform hover:scale-105"
                  >
                    GitHub
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category */}
                <span className="inline-block px-3 py-1 mb-3 text-xs font-medium text-purple-400 bg-purple-500/10 border border-purple-500/20 rounded-full">
                  {project.category}
                </span>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs bg-gray-800/50 border border-gray-700/50 rounded-full text-gray-300 hover:border-blue-500/50 hover:text-blue-400 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 rounded-2xl transition-all duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">
              No projects found
            </h3>
            <p className="text-gray-400">Try selecting a different filter</p>
          </div>
        )}

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { number: "50+", label: "Projects Completed" },
            { number: "30+", label: "Happy Clients" },
            { number: "5+", label: "Years Experience" },
            { number: "15+", label: "Technologies" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-gray-900/30 backdrop-blur-sm border border-white/10 rounded-xl hover:border-purple-500/50 transition-all duration-300 group"
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-block p-8 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-white/10 rounded-2xl backdrop-blur-sm">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              Have a Project in Mind?
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl">
              I'm always excited to take on new challenges and collaborate on
              innovative projects.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Btn
                type="start_a_project"
                btn="Start a Project"
                value=""
                className=" group overflow-hidden relative bg-gradient-to-r from-yellow-600 to-yellow-700  hover:from-yellow-700 hover:to-yellow-800  text-white font-semibold  px-8 py-4 rounded-xl shadow-lg hover:shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300 ease-in-out min-w-[180px] text-centeroverflow-hidden before:absolute before:inset-0 before:bg-white/20 before:translate-y-full hover:before:translate-y-0 before:transition-transform before:duration-300"
                aria_label="Start a Project"
              />

              <Btn
                type="view_all_projects"
                btn="View All Projects"
                value=""
                className=" group  relative bg-gradient-to-r from-green-600 to-green-700  hover:from-green-700 hover:to-green-800  text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-2xl hover:shadow-green-500/50 transition-all duration-300 ease-in-out min-w-[180px] text-center  overflow-hidden  before:absolute before:inset-0 before:bg-white/20 before:translate-y-full hover:before:translate-y-0 before:transition-transform before:duration-300 "
                aria_label="View All Projects"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
