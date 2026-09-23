import React, { useState } from "react";
import emailjs from "@emailjs/browser";
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-950 text-white">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 md:px-16 py-5 bg-slate-800/80 border-b border-slate-700">

  {/* Logo */}
  <div>
    <h2 className="text-2xl font-bold text-cyan-400">
      Manshi
    </h2>

    <p className="text-sm text-cyan-300">
      SOFTWARE DEVELOPER
    </p>
  </div>


  {/* Desktop Menu */}
  <ul className="hidden md:flex items-center gap-2 text-slate-300">

    <li>
      <a href="#about" className="flex items-center gap-3 px-4 py-4 rounded-xl hover:bg-cyan-900/40 hover:text-cyan-400 transition">
        <span className="text-xl">👨‍💻</span>
        About
      </a>
    </li>

    <li>
      <a href="#skills" className="flex items-center gap-3 px-4 py-4 rounded-xl hover:bg-cyan-900/40 hover:text-cyan-400 transition">
        <span className="text-xl">⚡</span>
        Skills
      </a>
    </li>

    <li>
      <a href="#projects" className="flex items-center gap-3 px-4 py-4 rounded-xl hover:bg-cyan-900/40 hover:text-cyan-400 transition">
        <span className="text-xl">💼</span>
        Projects
      </a>
    </li>

    <li>
      <a href="#learning" className="flex items-center gap-3 px-4 py-4 rounded-xl hover:bg-cyan-900/40 hover:text-cyan-400 transition">
        <span className="text-xl">🚀</span>
        Learning
      </a>
    </li>

    <li>
      <a href="#achievements" className="flex items-center gap-3 px-4 py-4 rounded-xl hover:bg-cyan-900/40 hover:text-cyan-400 transition">
        <span className="text-xl">🏆</span>
        Achievements
      </a>
    </li>

    <li>
      <a href="#education" className="flex items-center gap-3 px-4 py-4 rounded-xl hover:bg-cyan-900/40 hover:text-cyan-400 transition">
        <span className="text-xl">🎓</span>
        Education
      </a>
    </li>

  </ul>


  {/* Mobile Menu Button */}
  <button
    onClick={() => setMenuOpen(!menuOpen)}
    className="md:hidden text-3xl text-cyan-400"
  >
    {menuOpen ? "✕" : "☰"}
  </button>


  {/* Mobile Menu */}
  {menuOpen && (
    <div className="absolute top-20 left-0 w-full bg-slate-900 border-b border-slate-700 md:hidden z-50">

      <div className="flex flex-col p-5 gap-2">

        <a
          href="#about"
          onClick={() => setMenuOpen(false)}
          className="p-4 rounded-xl hover:bg-cyan-900/40 hover:text-cyan-400"
        >
          👨‍💻 About
        </a>

        <a
          href="#skills"
          onClick={() => setMenuOpen(false)}
          className="p-4 rounded-xl hover:bg-cyan-900/40 hover:text-cyan-400"
        >
          ⚡ Skills
        </a>

        <a
          href="#projects"
          onClick={() => setMenuOpen(false)}
          className="p-4 rounded-xl hover:bg-cyan-900/40 hover:text-cyan-400"
        >
          💼 Projects
        </a>

        <a
          href="#learning"
          onClick={() => setMenuOpen(false)}
          className="p-4 rounded-xl hover:bg-cyan-900/40 hover:text-cyan-400"
        >
          🚀 Learning
        </a>

        <a
          href="#achievements"
          onClick={() => setMenuOpen(false)}
          className="p-4 rounded-xl hover:bg-cyan-900/40 hover:text-cyan-400"
        >
          🏆 Achievements
        </a>

        <a
          href="#education"
          onClick={() => setMenuOpen(false)}
          className="p-4 rounded-xl hover:bg-cyan-900/40 hover:text-cyan-400"
        >
          🎓 Education
        </a>

        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
          className="p-4 rounded-xl hover:bg-cyan-900/40 hover:text-cyan-400"
        >
          📩 Contact
        </a>

      </div>

    </div>
  )}

</nav>

      {/* Home Section */}
      <section
        id="home" 
        className="relative min-h-screen flex flex-col md:flex-row items-center justify-between gap-12 px-8 md:px-16 py-20 pb-32"
        
      >
        

        {/* Left Side */}
        <div className="max-w-2xl">

          <p className="inline-block rounded-full border border-cyan-500 px-5 py-3 text-cyan-400 mb-8">
            ● Available for Opportunities
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Hi, I'm
            <br />

            <span className="text-cyan-400">
              Manshi
            </span>
          </h1>

          <h2 className="text-2xl md:text-3xl mt-6 border-b-2 border-cyan-400 inline-block pb-2">
            Frontend Developer
          </h2>

          <p className="text-slate-300 text-lg leading-8 mt-8">
            I build beautiful, responsive web applications
            using React JS, JavaScript, HTML, and CSS.
            I enjoy writing clean code and creating
            user-friendly experiences.
          </p>

          {/* Stats */}
<div className="flex gap-12 mt-12">

  <div>
    <h3 className="text-4xl font-bold text-cyan-400">
      4+
    </h3>
    <p className="text-slate-400 mt-2 uppercase text-sm">
      Months Experience
    </p>
    <div className="w-10 h-1 bg-cyan-400 mt-2"></div>
  </div>

  <div>
    <h3 className="text-4xl font-bold text-cyan-400">
      7+
    </h3>
    <p className="text-slate-400 mt-2 uppercase text-sm">
      Projects Completed
    </p>
    <div className="w-10 h-1 bg-cyan-400 mt-2"></div>
  </div>

  <div>
    <h3 className="text-4xl font-bold text-cyan-400">
      2
    </h3>
    <p className="text-slate-400 mt-2 uppercase text-sm">
      Certifications
    </p>
    <div className="w-10 h-1 bg-cyan-400 mt-2"></div>
  </div>

</div>

          {/* Buttons */}
<div className="flex gap-4 mt-10">

  <a
    href="#contact"
    className="bg-cyan-500 text-slate-900 px-8 py-4 rounded-full font-semibold hover:bg-cyan-400 transition"
  >
    ✉️ Get in Touch →
  </a>

  <a
    href="/resume.pdf"
    download
    className="border border-slate-600 bg-slate-800/70 text-cyan-400 px-8 py-4 rounded-full font-semibold hover:border-cyan-400 transition"
  >
    📄 Download CV
  </a>

</div>

  {/* Social Links */}
<div className="flex items-center gap-4 mt-10">

  <p className="text-slate-400 uppercase text-sm font-semibold">
    Connect With Me
  </p>

  <a
    href="#"
    className="w-12 h-12 flex items-center justify-center rounded-xl bg-slate-800 border border-slate-600 text-xl hover:border-cyan-400 transition"
  >
    in
  </a>

  <a
    href="#"
    className="w-12 h-12 flex items-center justify-center rounded-xl bg-slate-800 border border-slate-600 text-xl hover:border-cyan-400 transition"
  >
    ●
  </a>

  <a
    href="tel:+910000000000"
    className="w-12 h-12 flex items-center justify-center rounded-xl bg-slate-800 border border-slate-600 text-xl hover:border-cyan-400 transition"
  >
    ☎
  </a>

</div>




        </div>


        {/* Right Side - Profile */}
        
{/* Right Side - Profile */}
<div className="relative flex justify-center items-center">

  {/* Profile Circle */}
  <div className="w-64 h-64 md:w-96 md:h-96 rounded-full border-8 border-cyan-500 overflow-hidden bg-slate-800 shadow-lg shadow-cyan-500/20">

    <img
      src="/manshi.jpg"
      alt="Manshi - Software Developer"
      className="w-full h-full object-cover"
    />

  </div>

  {/* Floating Laptop Icon */}
  <div className="absolute top-10 -right-4 md:right-0 bg-slate-800 border border-cyan-500 rounded-xl p-4 text-3xl">
    💻
  </div>

  {/* Floating Rocket Icon */}
  <div className="absolute bottom-16 -right-4 md:right-0 bg-slate-800 border border-cyan-500 rounded-xl p-4 text-3xl">
    🚀
  </div>

  {/* Floating skill Icon */}
  <div className="absolute top-16 -left-4 md:left-0 bg-slate-800 border border-cyan-500 rounded-xl p-4 text-3xl">
    ⚡
  </div>

</div>
{/* Scroll Indicator */}
<div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 z-10">

  <div className="w-8 h-12 border-2 border-slate-500 rounded-full flex justify-center pt-2">
    <div className="w-1.5 h-3 bg-cyan-400 rounded-full animate-bounce"></div>
  </div>

  <p className="text-xs tracking-widest text-slate-400 uppercase">
    Scroll to Explore
  </p>

</div>
  

      </section>
      {/* About Section */}
<section
  id="about"
  className="min-h-screen bg-slate-900 px-8 md:px-16 py-24"
>
  <div className="max-w-6xl mx-auto">

    {/* Heading */}
    <div className="text-center mb-16">

      <h2 className="text-4xl md:text-5xl font-bold">
        About <span className="text-cyan-400">Me</span>
      </h2>

      <div className="w-20 h-1 bg-cyan-400 mx-auto mt-4"></div>

      <p className="text-slate-400 mt-5">
        Get to know me and my development journey
      </p>

    </div>


    {/* About Content */}
    <div className="grid md:grid-cols-2 gap-12 items-center">

      {/* Left */}
      <div>

        <h3 className="text-3xl font-bold mb-6">
          I'm a{" "}
          <span className="text-cyan-400">
            Frontend Developer
          </span>
        </h3>

        <p className="text-slate-300 text-lg leading-8">
          I am a passionate software developer who enjoys
          creating modern, responsive and user-friendly
          web applications.
        </p>

        <p className="text-slate-300 text-lg leading-8 mt-5">
          I have learned HTML, CSS, JavaScript and React JS
          and I am continuously improving my development
          skills by building real-world projects.
        </p>

        <p className="text-slate-300 text-lg leading-8 mt-5">
          I enjoy solving problems, learning new technologies
          and turning ideas into clean and interactive
          websites.
        </p>

      </div>


      {/* Right */}
      <div className="grid grid-cols-2 gap-5">

        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 text-center hover:border-cyan-400 transition">

          <div className="text-4xl mb-4">
            💻
          </div>

          <h3 className="text-xl font-semibold">
            Frontend
          </h3>

          <p className="text-slate-400 mt-2">
            React & JavaScript
          </p>

        </div>


        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 text-center hover:border-cyan-400 transition">

          <div className="text-4xl mb-4">
            🎨
          </div>

          <h3 className="text-xl font-semibold">
            UI Design
          </h3>

          <p className="text-slate-400 mt-2">
            Modern Interfaces
          </p>

        </div>


        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 text-center hover:border-cyan-400 transition">

          <div className="text-4xl mb-4">
            📱
          </div>

          <h3 className="text-xl font-semibold">
            Responsive
          </h3>

          <p className="text-slate-400 mt-2">
            Mobile Friendly
          </p>

        </div>


        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 text-center hover:border-cyan-400 transition">

          <div className="text-4xl mb-4">
            🚀
          </div>

          <h3 className="text-xl font-semibold">
            Learning
          </h3>

          <p className="text-slate-400 mt-2">
            Always Improving
          </p>

        </div>

      </div>

    </div>

  </div>
</section>
{/* Skills Section */}
<section
  id="skills"
  className="min-h-screen bg-slate-950 px-8 md:px-16 py-24"
>
  <div className="max-w-6xl mx-auto">

    {/* Heading */}
    <div className="text-center mb-16">

      <h2 className="text-4xl md:text-5xl font-bold">
        My <span className="text-cyan-400">Skills</span>
      </h2>

      <div className="w-20 h-1 bg-cyan-400 mx-auto mt-4"></div>

      <p className="text-slate-400 mt-5">
        Technologies and tools I work with
      </p>

    </div>


    {/* Skills Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">


      {/* HTML */}
      <div className="bg-slate-900 border border-slate-700 rounded-2xl p-7 hover:border-cyan-400 hover:-translate-y-2 transition duration-300">

        <div className="text-5xl mb-5">
          🌐
        </div>

        <h3 className="text-2xl font-semibold">
          HTML
        </h3>

        <p className="text-slate-400 mt-3">
          Building structured and semantic web pages.
        </p>

        <div className="w-full bg-slate-700 rounded-full h-2 mt-6">
          <div className="bg-cyan-400 h-2 rounded-full w-[90%]"></div>
        </div>

        <p className="text-cyan-400 text-sm mt-2">
          90%
        </p>

      </div>


      {/* CSS */}
      <div className="bg-slate-900 border border-slate-700 rounded-2xl p-7 hover:border-cyan-400 hover:-translate-y-2 transition duration-300">

        <div className="text-5xl mb-5">
          🎨
        </div>

        <h3 className="text-2xl font-semibold">
          CSS
        </h3>

        <p className="text-slate-400 mt-3">
          Creating responsive and modern user interfaces.
        </p>

        <div className="w-full bg-slate-700 rounded-full h-2 mt-6">
          <div className="bg-cyan-400 h-2 rounded-full w-[85%]"></div>
        </div>

        <p className="text-cyan-400 text-sm mt-2">
          85%
        </p>

      </div>


      {/* JavaScript */}
      <div className="bg-slate-900 border border-slate-700 rounded-2xl p-7 hover:border-cyan-400 hover:-translate-y-2 transition duration-300">

        <div className="text-5xl mb-5">
          ⚡
        </div>

        <h3 className="text-2xl font-semibold">
          JavaScript
        </h3>

        <p className="text-slate-400 mt-3">
          Adding logic and interactivity to applications.
        </p>

        <div className="w-full bg-slate-700 rounded-full h-2 mt-6">
          <div className="bg-cyan-400 h-2 rounded-full w-[80%]"></div>
        </div>

        <p className="text-cyan-400 text-sm mt-2">
          80%
        </p>

      </div>


      {/* React */}
      <div className="bg-slate-900 border border-slate-700 rounded-2xl p-7 hover:border-cyan-400 hover:-translate-y-2 transition duration-300">

        <div className="text-5xl mb-5">
          ⚛️
        </div>

        <h3 className="text-2xl font-semibold">
          React JS
        </h3>

        <p className="text-slate-400 mt-3">
          Building reusable and interactive components.
        </p>

        <div className="w-full bg-slate-700 rounded-full h-2 mt-6">
          <div className="bg-cyan-400 h-2 rounded-full w-[75%]"></div>
        </div>

        <p className="text-cyan-400 text-sm mt-2">
          75%
        </p>

      </div>


      {/* Tailwind */}
      <div className="bg-slate-900 border border-slate-700 rounded-2xl p-7 hover:border-cyan-400 hover:-translate-y-2 transition duration-300">

        <div className="text-5xl mb-5">
          💨
        </div>

        <h3 className="text-2xl font-semibold">
          Tailwind CSS
        </h3>

        <p className="text-slate-400 mt-3">
          Designing modern interfaces using utility classes.
        </p>

        <div className="w-full bg-slate-700 rounded-full h-2 mt-6">
          <div className="bg-cyan-400 h-2 rounded-full w-[75%]"></div>
        </div>

        <p className="text-cyan-400 text-sm mt-2">
          75%
        </p>

      </div>


      {/* GitHub */}
      <div className="bg-slate-900 border border-slate-700 rounded-2xl p-7 hover:border-cyan-400 hover:-translate-y-2 transition duration-300">

        <div className="text-5xl mb-5">
          🐙
        </div>

        <h3 className="text-2xl font-semibold">
          Git & GitHub
        </h3>

        <p className="text-slate-400 mt-3">
          Managing code and collaborating on projects.
        </p>

        <div className="w-full bg-slate-700 rounded-full h-2 mt-6">
          <div className="bg-cyan-400 h-2 rounded-full w-[70%]"></div>
        </div>

        <p className="text-cyan-400 text-sm mt-2">
          70%
        </p>

      </div>

    </div>

  </div>
</section>
{/* Projects Section */}
<section
  id="projects"
  className="min-h-screen bg-slate-900 px-8 md:px-16 py-24"
>
  <div className="max-w-6xl mx-auto">

    {/* Heading */}
    <div className="text-center mb-16">

      <h2 className="text-4xl md:text-5xl font-bold">
        My <span className="text-cyan-400">Projects</span>
      </h2>

      <div className="w-20 h-1 bg-cyan-400 mx-auto mt-4"></div>

      <p className="text-slate-400 mt-5">
        Some of the projects I have built
      </p>

    </div>


    {/* Project Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">


      {/* Project 1 */}
      <div className="bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden hover:border-cyan-400 hover:-translate-y-2 transition duration-300">

        {/* Project Image */}
        <div className="h-48 bg-gradient-to-br from-cyan-900 to-slate-900 flex items-center justify-center">

          <span className="text-7xl">
            💻
          </span>

        </div>


        {/* Project Content */}
        <div className="p-6">

          <h3 className="text-2xl font-bold">
            Portfolio Website
          </h3>

          <p className="text-slate-400 mt-3 leading-7">
            A responsive developer portfolio built using
            React JS and Tailwind CSS.
          </p>


          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mt-5">

            <span className="px-3 py-1 text-sm rounded-full bg-cyan-900 text-cyan-300">
              React
            </span>

            <span className="px-3 py-1 text-sm rounded-full bg-cyan-900 text-cyan-300">
              Tailwind
            </span>

            <span className="px-3 py-1 text-sm rounded-full bg-cyan-900 text-cyan-300">
              JavaScript
            </span>

          </div>


          {/* Buttons */}
          <div className="flex gap-3 mt-6">

            <a
              href="#"
              className="flex-1 text-center bg-cyan-500 text-slate-900 py-2 rounded-lg font-semibold hover:bg-cyan-400 transition"
            >
              Live Demo
            </a>

            <a
              href="#"
              className="flex-1 text-center border border-slate-600 py-2 rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition"
            >
              GitHub
            </a>

          </div>

        </div>

      </div>


      {/* Project 2 */}
      <div className="bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden hover:border-cyan-400 hover:-translate-y-2 transition duration-300">

        <div className="h-48 bg-gradient-to-br from-purple-900 to-slate-900 flex items-center justify-center">

          <span className="text-7xl">
            📝
          </span>

        </div>


        <div className="p-6">

          <h3 className="text-2xl font-bold">
            To-Do Application
          </h3>

          <p className="text-slate-400 mt-3 leading-7">
            A task management application where users
            can add, delete and manage their daily tasks.
          </p>


          <div className="flex flex-wrap gap-2 mt-5">

            <span className="px-3 py-1 text-sm rounded-full bg-cyan-900 text-cyan-300">
              React
            </span>

            <span className="px-3 py-1 text-sm rounded-full bg-cyan-900 text-cyan-300">
              JavaScript
            </span>

            <span className="px-3 py-1 text-sm rounded-full bg-cyan-900 text-cyan-300">
              CSS
            </span>

          </div>


          <div className="flex gap-3 mt-6">

            <a
              href="#"
              className="flex-1 text-center bg-cyan-500 text-slate-900 py-2 rounded-lg font-semibold hover:bg-cyan-400 transition"
            >
              Live Demo
            </a>

            <a
              href="#"
              className="flex-1 text-center border border-slate-600 py-2 rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition"
            >
              GitHub
            </a>

          </div>

        </div>

      </div>


      {/* Project 3 */}
      <div className="bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden hover:border-cyan-400 hover:-translate-y-2 transition duration-300">

        <div className="h-48 bg-gradient-to-br from-blue-900 to-slate-900 flex items-center justify-center">

          <span className="text-7xl">
            ☁️
          </span>

        </div>


        <div className="p-6">

          <h3 className="text-2xl font-bold">
            Weather Application
          </h3>

          <p className="text-slate-400 mt-3 leading-7">
            A weather application that displays current
            weather information using an API.
          </p>


          <div className="flex flex-wrap gap-2 mt-5">

            <span className="px-3 py-1 text-sm rounded-full bg-cyan-900 text-cyan-300">
              React
            </span>

            <span className="px-3 py-1 text-sm rounded-full bg-cyan-900 text-cyan-300">
              API
            </span>

            <span className="px-3 py-1 text-sm rounded-full bg-cyan-900 text-cyan-300">
              JavaScript
            </span>

          </div>


          <div className="flex gap-3 mt-6">

            <a
              href="#"
              className="flex-1 text-center bg-cyan-500 text-slate-900 py-2 rounded-lg font-semibold hover:bg-cyan-400 transition"
            >
              Live Demo
            </a>

            <a
              href="#"
              className="flex-1 text-center border border-slate-600 py-2 rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition"
            >
              GitHub
            </a>

          </div>

        </div>

      </div>

    </div>

  </div>
</section>
{/* Learning Section */}
<section
  id="learning"
  className="min-h-screen bg-slate-950 px-8 md:px-16 py-24"
>
  <div className="max-w-6xl mx-auto">

    {/* Heading */}
    <div className="text-center mb-16">

      <h2 className="text-4xl md:text-5xl font-bold">
        Currently <span className="text-cyan-400">Learning</span>
      </h2>

      <div className="w-20 h-1 bg-cyan-400 mx-auto mt-4"></div>

      <p className="text-slate-400 mt-5">
        Technologies and concepts I am currently exploring
      </p>

    </div>


    {/* Learning Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">


      {/* React */}
      <div className="bg-slate-900 border border-slate-700 rounded-2xl p-8 text-center hover:border-cyan-400 hover:-translate-y-2 transition duration-300">

        <div className="text-6xl mb-6">
          ⚛️
        </div>

        <h3 className="text-2xl font-bold">
          Advanced React
        </h3>

        <p className="text-slate-400 mt-4 leading-7">
          Learning advanced React concepts including
          hooks, reusable components and state management.
        </p>

        <span className="inline-block mt-6 px-4 py-2 rounded-full bg-cyan-900 text-cyan-300">
          In Progress
        </span>

      </div>


      {/* Node */}
      <div className="bg-slate-900 border border-slate-700 rounded-2xl p-8 text-center hover:border-cyan-400 hover:-translate-y-2 transition duration-300">

        <div className="text-6xl mb-6">
          🟢
        </div>

        <h3 className="text-2xl font-bold">
          Node.js
        </h3>

        <p className="text-slate-400 mt-4 leading-7">
          Learning backend development, APIs, Express
          and server-side JavaScript.
        </p>

        <span className="inline-block mt-6 px-4 py-2 rounded-full bg-cyan-900 text-cyan-300">
          In Progress
        </span>

      </div>


      {/* MongoDB */}
      <div className="bg-slate-900 border border-slate-700 rounded-2xl p-8 text-center hover:border-cyan-400 hover:-translate-y-2 transition duration-300">

        <div className="text-6xl mb-6">
          🍃
        </div>

        <h3 className="text-2xl font-bold">
          MongoDB
        </h3>

        <p className="text-slate-400 mt-4 leading-7">
          Learning database concepts, CRUD operations
          and working with MongoDB.
        </p>

        <span className="inline-block mt-6 px-4 py-2 rounded-full bg-cyan-900 text-cyan-300">
          Learning
        </span>

      </div>

    </div>


    {/* Learning Journey */}
    <div className="mt-16 bg-slate-900 border border-slate-700 rounded-2xl p-8">

      <h3 className="text-2xl font-bold text-cyan-400 mb-5">
        My Learning Journey
      </h3>

      <p className="text-slate-300 leading-8">
        I started my journey with HTML and CSS, then moved
        to JavaScript and React JS. Currently, I am expanding
        my knowledge of modern frontend development and
        exploring backend technologies to become a
        full-stack developer.
      </p>

    </div>

  </div>
</section>

{/* Achievements Section */}
<section
  id="achievements"
  className="min-h-screen bg-slate-900 px-8 md:px-16 py-24"
>
  <div className="max-w-6xl mx-auto">

    {/* Heading */}
    <div className="text-center mb-16">

      <h2 className="text-4xl md:text-5xl font-bold">
        My <span className="text-cyan-400">Achievements</span>
      </h2>

      <div className="w-20 h-1 bg-cyan-400 mx-auto mt-4"></div>

      <p className="text-slate-400 mt-5">
        Certifications and milestones from my learning journey
      </p>

    </div>


    {/* Achievement Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">


      {/* Achievement 1 */}
      <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 hover:border-cyan-400 transition">

        <div className="flex items-start gap-6">

          <div className="w-16 h-16 shrink-0 flex items-center justify-center rounded-xl bg-cyan-900 text-3xl">
            🏆
          </div>

          <div>

            <h3 className="text-2xl font-bold">
              Web Development
            </h3>

            <p className="text-cyan-400 mt-2">
              Frontend Development
            </p>

            <p className="text-slate-400 mt-3 leading-7">
              Completed learning and practical projects
              using HTML, CSS, JavaScript and React JS.
            </p>

          </div>

        </div>

      </div>


      {/* Achievement 2 */}
      <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 hover:border-cyan-400 transition">

        <div className="flex items-start gap-6">

          <div className="w-16 h-16 shrink-0 flex items-center justify-center rounded-xl bg-cyan-900 text-3xl">
            📜
          </div>

          <div>

            <h3 className="text-2xl font-bold">
              React JS
            </h3>

            <p className="text-cyan-400 mt-2">
              React Development
            </p>

            <p className="text-slate-400 mt-3 leading-7">
              Built interactive applications using React
              components, props, state and hooks.
            </p>

          </div>

        </div>

      </div>


      {/* Achievement 3 */}
      <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 hover:border-cyan-400 transition">

        <div className="flex items-start gap-6">

          <div className="w-16 h-16 shrink-0 flex items-center justify-center rounded-xl bg-cyan-900 text-3xl">
            💻
          </div>

          <div>

            <h3 className="text-2xl font-bold">
              Project Development
            </h3>

            <p className="text-cyan-400 mt-2">
              Practical Experience
            </p>

            <p className="text-slate-400 mt-3 leading-7">
              Created multiple frontend projects to
              strengthen practical development skills.
            </p>

          </div>

        </div>

      </div>


      {/* Achievement 4 */}
      <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 hover:border-cyan-400 transition">

        <div className="flex items-start gap-6">

          <div className="w-16 h-16 shrink-0 flex items-center justify-center rounded-xl bg-cyan-900 text-3xl">
            🚀
          </div>

          <div>

            <h3 className="text-2xl font-bold">
              Continuous Learning
            </h3>

            <p className="text-cyan-400 mt-2">
              Developer Growth
            </p>

            <p className="text-slate-400 mt-3 leading-7">
              Continuously learning new technologies and
              improving my development skills.
            </p>

          </div>

        </div>

      </div>

    </div>

  </div>
</section>


{/* Education Section */}
<section
  id="education"
  className="min-h-screen bg-slate-950 px-8 md:px-16 py-24"
>
  <div className="max-w-5xl mx-auto">

    {/* Heading */}
    <div className="text-center mb-16">

      <h2 className="text-4xl md:text-5xl font-bold">
        My <span className="text-cyan-400">Education</span>
      </h2>

      <div className="w-20 h-1 bg-cyan-400 mx-auto mt-4"></div>

      <p className="text-slate-400 mt-5">
        My academic journey
      </p>

    </div>


    {/* Timeline */}
    <div className="relative">

      {/* Timeline Line */}
      <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-cyan-400 hidden md:block"></div>


      {/* B.Tech */}
      <div className="relative md:pl-16 mb-10">

        <div className="hidden md:flex absolute left-0 top-8 w-10 h-10 rounded-full bg-cyan-500 items-center justify-center text-slate-900">
          🎓
        </div>

        <div className="bg-slate-900 border border-slate-700 rounded-2xl p-8 hover:border-cyan-400 transition">

          <div className="flex flex-col md:flex-row md:justify-between gap-3">

            <div>
              <h3 className="text-2xl font-bold">
                Bachelor of Technology
              </h3>

              <p className="text-cyan-400 text-lg mt-2">
                Computer Science & Engineering
              </p>
            </div>

            <span className="w-fit px-4 py-2 rounded-full bg-cyan-900 text-cyan-300">
              2021 - 2025
            </span>

          </div>

          <p className="text-slate-300 text-lg mt-5">
            Krishna Institute of Technology, Kanpur
          </p>

        </div>
      </div>


      {/* Class 12 */}
      <div className="relative md:pl-16 mb-10">

        <div className="hidden md:flex absolute left-0 top-8 w-10 h-10 rounded-full bg-cyan-500 items-center justify-center text-slate-900">
          🏫
        </div>

        <div className="bg-slate-900 border border-slate-700 rounded-2xl p-8 hover:border-cyan-400 transition">

          <div className="flex flex-col md:flex-row md:justify-between gap-3">

            <div>
              <h3 className="text-2xl font-bold">
                Class 12th
              </h3>

              <p className="text-cyan-400 text-lg mt-2">
                CBSE
              </p>
            </div>

            <span className="w-fit px-4 py-2 rounded-full bg-cyan-900 text-cyan-300">
              2020 - 2021
            </span>

          </div>

          <p className="text-slate-300 text-lg mt-5">
            Kendriya Vidyalaya IIT Kanpur
          </p>

          <p className="text-slate-400 mt-3">
            Percentage: 68%
          </p>

        </div>
      </div>


      {/* Class 10 */}
      <div className="relative md:pl-16">

        <div className="hidden md:flex absolute left-0 top-8 w-10 h-10 rounded-full bg-cyan-500 items-center justify-center text-slate-900">
          🏫
        </div>

        <div className="bg-slate-900 border border-slate-700 rounded-2xl p-8 hover:border-cyan-400 transition">

          <div className="flex flex-col md:flex-row md:justify-between gap-3">

            <div>
              <h3 className="text-2xl font-bold">
                Class 10th
              </h3>

              <p className="text-cyan-400 text-lg mt-2">
                CBSE
              </p>
            </div>

            <span className="w-fit px-4 py-2 rounded-full bg-cyan-900 text-cyan-300 ">
              2018 - 2019
            </span>

          </div>

          <p className="text-slate-300 text-lg mt-5">
            Kendriya Vidyalaya IIT Kanpur
          </p>

          <p className="text-slate-400 mt-3">
            Percentage: 82%
          </p>

        </div>
      </div>

    </div>

  </div>
</section>

{/* Contact Section */}
<section
  id="contact"
  className="min-h-screen bg-slate-900 px-8 md:px-16 py-24"
>
  <div className="max-w-6xl mx-auto">

    {/* Heading */}
    <div className="text-center mb-16">

      <h2 className="text-4xl md:text-5xl font-bold">
        Get In <span className="text-cyan-400">Touch</span>
      </h2>

      <div className="w-20 h-1 bg-cyan-400 mx-auto mt-4"></div>

      <p className="text-slate-400 mt-5">
        Let's connect and build something amazing together
      </p>

    </div>


    {/* Contact Content */}
    <div className="grid md:grid-cols-2 gap-12">

      {/* Left Side */}
      <div>

        <h3 className="text-3xl font-bold mb-6">
          Let's <span className="text-cyan-400">Connect</span>
        </h3>

        <p className="text-slate-300 text-lg leading-8 mb-8">
          I'm always open to discussing new projects, opportunities,
          ideas or collaborations. Feel free to reach out to me.
        </p>


        {/* Email */}
        <div className="flex items-center gap-5 bg-slate-800 border border-slate-700 rounded-xl p-5 mb-5 hover:border-cyan-400 transition">

          <div className="text-3xl">
            📧
          </div>

          <div>
            <p className="text-slate-400 text-sm">
              Email
            </p>

            <p className="text-white">
              manshi13082001@gmail.co
            </p>
          </div>

        </div>


        {/* Phone */}
        <div className="flex items-center gap-5 bg-slate-800 border border-slate-700 rounded-xl p-5 mb-5 hover:border-cyan-400 transition">

          <div className="text-3xl">
            📱
          </div>

          <div>
            <p className="text-slate-400 text-sm">
              Phone
            </p>

            <p className="text-white">
              +91 9695784308
            </p>
          </div>

        </div>


        {/* Location */}
        <div className="flex items-center gap-5 bg-slate-800 border border-slate-700 rounded-xl p-5 hover:border-cyan-400 transition">

          <div className="text-3xl">
            📍
          </div>

          <div>
            <p className="text-slate-400 text-sm">
              Location
            </p>

            <p className="text-white">
              Noida, India
            </p>
          </div>

        </div>

      </div>


      {/* Contact Form */}
      <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8">

        <h3 className="text-2xl font-bold mb-6">
          Send Me a <span className="text-cyan-400">Message</span>
        </h3>


        <form
  className="space-y-5"
  onSubmit={(e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_y8fvg79",
        "template_w21hgaf",
        e.currentTarget,
        {
          publicKey: "CgbAKMSjN-6RJKVx9",
        }
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          e.currentTarget.reset();
        },
        (error) => {
          console.log("FAILED...", error);
          alert("❌ Failed to send message.");
        }
      );
  }}
>
  <input
    type="text"
    name="name"
    placeholder="Your Name"
    className="w-full px-5 py-4 bg-slate-900 border border-slate-700 rounded-xl outline-none focus:border-cyan-400 text-white"
    required
  />

  <input
    type="email"
    name="email"
    placeholder="Your Email"
    className="w-full px-5 py-4 bg-slate-900 border border-slate-700 rounded-xl outline-none focus:border-cyan-400 text-white"
    required
  />

  <input
    type="text"
    name="title"
    placeholder="Subject"
    className="w-full px-5 py-4 bg-slate-900 border border-slate-700 rounded-xl outline-none focus:border-cyan-400 text-white"
    required
  />

  <textarea
    name="message"
    rows="5"
    placeholder="Your Message"
    className="w-full px-5 py-4 bg-slate-900 border border-slate-700 rounded-xl outline-none focus:border-cyan-400 text-white resize-none"
    required
  ></textarea>

  <button
    type="submit"
    className="w-full bg-cyan-500 text-slate-900 py-4 rounded-xl font-semibold hover:bg-cyan-400 transition"
  >
    Send Message →
  </button>
</form>

      </div>

    </div>

  </div>
</section>
{/* Footer */}
<footer className="bg-slate-950 border-t border-slate-800 px-8 md:px-16 py-10">

  <div className="max-w-6xl mx-auto">

    <div className="flex flex-col md:flex-row items-center justify-between gap-6">

      {/* Logo / Name */}
      <div className="text-center md:text-left">
        <h2 className="text-2xl font-bold text-cyan-400">
          Manshi
        </h2>

        <p className="text-slate-400 text-sm mt-1">
          Frontend Developer
        </p>
      </div>


      {/* Social Links */}
      <div className="flex gap-4">

        <a
          href="#"
          className="w-11 h-11 flex items-center justify-center rounded-full border border-slate-700 text-slate-300 hover:border-cyan-400 hover:text-cyan-400 transition"
        >
          in
        </a>

        <a
          href="#"
          className="w-11 h-11 flex items-center justify-center rounded-full border border-slate-700 text-slate-300 hover:border-cyan-400 hover:text-cyan-400 transition"
        >
          ●
        </a>

        <a
          href="#contact"
          className="w-11 h-11 flex items-center justify-center rounded-full border border-slate-700 text-slate-300 hover:border-cyan-400 hover:text-cyan-400 transition"
        >
          ☎
        </a>

      </div>

    </div>


    {/* Divider */}
    <div className="border-t border-slate-800 mt-8 pt-6 text-center">

      <p className="text-slate-500 text-sm">
        © 2026 Manshi. All rights reserved.
      </p>

      <p className="text-slate-600 text-sm mt-2">
        Built with React JS & Tailwind CSS
      </p>

    </div>

  </div>

</footer>
      

    </div>
  );
}

export default App;