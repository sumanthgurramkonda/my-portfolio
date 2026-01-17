import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Terminal, 
  Database, 
  Cpu, 
  Globe, 
  User, 
  Briefcase, 
  FolderGit2, 
  Send,
  Menu,
  X,
  ChevronDown,
  FileText,
  Download
} from 'lucide-react';

// --- DATA CONFIGURATION ---
// Edit this object to update all content across the site
const DATA = {
  hero: {
    name: "Sumanth Gurramkonda",
    role: "Full Stack Developer",
    tagline: "Building digital experiences that merge art with engineering.",
    cta: "View My Work"
  },
  about: {
    description: "I am a passionate developer with a knack for building scalable web applications. With a strong foundation in both frontend and backend technologies, I enjoy bridging the gap between engineering and design. My goal is to build software that provides intuitive, pixel-perfect user experiences.",
    stats: [
      { label: "Years Exp", value: "3+" },
      { label: "Projects", value: "10+" }
    ]
  },
  skills: [
    { category: "Frontend", items: ["ReactJS","Redux","JavaScript", "HTML", "CSS"] },
    { category: "Backend", items: ["Java", "SpringBoot", "Hibernate", "Apache Kafka",,"MySQL", "PostgreSQL","Python"] },
    { category: "Tools & DevOps", items: ["Git", "Docker", "AWS", "CI/CD"] },
  ],
  experience: [
    {
      id: 1,
      role: "Software Engineer",
      company: "L&T Technology Services",
      date: "2023 - Present",
      description: "Designed robust full-stack solutions processing millions of records with Spring Boot and React. Streamlined development workflows through DevOps automation including Jenkins, Docker, and AWS integration."
    }
  ],
  projects: [
    {
      id: 1,
      title: "VisualDFS: Number of Islands",
      description: "Interactive visualization of the 'Number of Islands' DFS algorithm featuring step-by-step execution to demonstrate recursive logic and backtracking concepts.",
      tags: ["React", "JavaScript","HTML/CSS","Algorithms"],
      link: "https://graph-dfs-traversal-animi.netlify.app/",
      github: "https://github.com/sumanthgurramkonda/Graphs/tree/main/islands"
    },
    {
      id: 2,
      title: "Spring Security",
      description: "This project was designed to deepen my understanding of Spring Security by building secure REST APIs, leveraging Spring's robust authentication and authorization capabilities.",
      tags: ["Java", "SpringBoot", "Spring Security", "JWT"],
      link: "#",
      github: "https://github.com/sumanthgurramkonda/spring-security"
    },
    {
      id: 3,
      title: "AI Chatbot APP",
      description: "An AI-powered chatbot that answers user queries using large language models, optionally enhanced with document-based context through retrieval-augmented generation (RAG), allowing users to switch models and enable or disable RAG in real time",
      tags: ["Java", "SpringBoot", "ReactJS", "Ollama LLM", "pgvector/PLSQL"],
      link: "#",
      github: "https://github.com/sumanthgurramkonda/ai-chatbot-app"
    }
  ],
  social: {
    email: "mailto:sumanth.gurramkonda.789@gmail.com",
    github: "https://github.com/sumanthgurramkonda",
    linkedin: "https://www.linkedin.com/in/sumanth-gurramkonda-739570174/",
    leetcode: "https://leetcode.com/u/sumanthgurramkonda/", // Add your LeetCode URL here
    resume: "https://drive.google.com/file/d/1fhNCNWR6ZOSSTuAKQjUrpeCC2ZKV16tR/view?usp=drive_link" // Add your Google Drive Link here
  }
};

// --- ICONS ---
const LeetCodeIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.156a6.3 6.3 0 0 0-2.55.184zM21.306 10.93a1.378 1.378 0 0 0-1.104.46l-2.905 3.103a1.378 1.378 0 0 0 .19 2.05c.57.426 1.37.347 1.862-.177l2.906-3.104a1.383 1.383 0 0 0-.949-2.332z" />
  </svg>
);

// --- COMPONENTS ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/80 backdrop-blur-md border-b border-slate-800 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-white tracking-tighter">
          SG
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-900 border-b border-slate-800 p-6 flex flex-col space-y-4 shadow-2xl">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-slate-300 hover:text-cyan-400"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-950">
      {/* Background Gradients */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-cyan-600/20 rounded-full blur-[120px] animate-pulse-slow delay-1000" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-medium">
            <span className="flex h-2 w-2 rounded-full bg-cyan-400 mr-2 animate-ping"></span>
            Available for work
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight">
            Hi, I'm <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              {DATA.hero.name}
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-lg leading-relaxed">
            {DATA.hero.tagline}
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <a 
              href="#projects" 
              className="px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-all shadow-lg shadow-cyan-500/25 flex items-center gap-2"
            >
              {DATA.hero.cta} <ChevronDown size={18} />
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg transition-all border border-slate-700"
            >
              Contact Me
            </a>
          </div>
          
          <div className="flex items-center gap-6 pt-8 text-slate-400">
            <a href={DATA.social.github} title="GitHub" className="hover:text-white transition-colors"><Github size={24} /></a>
            <a href={DATA.social.linkedin} title="LinkedIn" className="hover:text-white transition-colors"><Linkedin size={24} /></a>
            <a href={DATA.social.leetcode} title="LeetCode" className="hover:text-white transition-colors"><LeetCodeIcon size={24} /></a>
            <a href={DATA.social.email} title="Email" className="hover:text-white transition-colors"><Mail size={24} /></a>
          </div>
        </div>

        {/* Abstract Visual - Right Side */}
        <div className="hidden md:block relative">
           <div className="relative z-10 bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-500">
             <div className="flex items-center gap-2 mb-6 border-b border-slate-700 pb-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
             </div>
             <div className="space-y-3 font-mono text-sm">
               <div className="flex">
                 <span className="text-purple-400 mr-2">const</span>
                 <span className="text-yellow-400 mr-2">developer</span>
                 <span className="text-white">=</span>
                 <span className="text-white ml-2">{'{'}</span>
               </div>
               <div className="pl-6">
                 <span className="text-cyan-400">name:</span> <span className="text-green-400">"{DATA.hero.name}"</span>,
               </div>
               <div className="pl-6">
                 <span className="text-cyan-400">role:</span> <span className="text-green-400">"{DATA.hero.role}"</span>,
               </div>
               <div className="pl-6">
                 <span className="text-cyan-400">skills:</span> <span className="text-white">[</span>
                 <span className="text-green-400">"React"</span>, <span className="text-green-400">"SpringBoot"</span>
                 <span className="text-white">]</span>
               </div>
               <div className="text-white">{'}'}</div>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-purple-600 rounded-2xl blur-sm transform -rotate-2 opacity-70"></div>
            <div className="relative bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-xl">
              <User className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">About Me</h3>
              <p className="leading-relaxed text-slate-300 mb-6">
                {DATA.about.description}
              </p>
              <div className="grid grid-cols-3 gap-4 border-t border-slate-700 pt-6">
                {DATA.about.stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <h4 className="text-3xl font-bold text-white">{stat.value}</h4>
                    <p className="text-xs uppercase tracking-wider text-slate-500 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Engineering with a <span className="text-purple-400">Creative Edge</span>
            </h2>
            <p className="text-lg text-slate-400 mb-8">
              I don't just write code; I build solutions. My approach to development is holistic, considering the user experience, performance, and scalability from day one.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-cyan-500/10 rounded-lg text-cyan-400"><Globe size={20} /></div>
                <div>
                  <h4 className="font-semibold text-white">Web Development</h4>
                  <p className="text-sm text-slate-500">Modern, responsive websites.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400"><Database size={20} /></div>
                <div>
                  <h4 className="font-semibold text-white">Backend Systems</h4>
                  <p className="text-sm text-slate-500">Robust APIs and architecture.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  const getIcon = (cat) => {
    if (cat.includes("Frontend")) return <Code2 size={20} />;
    if (cat.includes("Backend")) return <Terminal size={20} />;
    return <Cpu size={20} />;
  };

  return (
    <section id="skills" className="py-24 bg-slate-950 relative overflow-hidden">
       {/* Subtle Grid Background */}
       <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-soft-light"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical <span className="text-cyan-400">Skills</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto">A comprehensive toolkit that enables me to turn ideas into reality.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {DATA.skills.map((group, idx) => (
            <div key={idx} className="bg-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-800 hover:border-cyan-500/30 transition-all duration-300 group hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-slate-800 rounded-lg text-cyan-400 group-hover:text-white group-hover:bg-cyan-500 transition-colors">
                  {getIcon(group.category)}
                </div>
                <h3 className="text-xl font-bold text-white">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {group.items.map((skill, sIdx) => (
                  <span key={sIdx} className="px-3 py-1.5 bg-slate-800 rounded-full text-sm text-slate-300 border border-slate-700 hover:border-cyan-500/50 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-slate-900">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Work <span className="text-purple-400">Experience</span></h2>
        </div>

        <div className="space-y-12">
          {DATA.experience.map((job) => (
            <div key={job.id} className="relative pl-8 md:pl-0">
              {/* Timeline Line (Desktop) */}
              <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-slate-800 -translate-x-1/2"></div>
              
              <div className={`md:flex items-center justify-between w-full ${job.id % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Date Side */}
                <div className="md:w-5/12 mb-2 md:mb-0 text-right">
                  <div className={`inline-block px-4 py-1 rounded-full bg-slate-800 border border-slate-700 text-sm text-slate-300 mb-2 ${job.id % 2 === 0 ? 'md:float-left' : 'md:float-right'}`}>
                    {job.date}
                  </div>
                </div>

                {/* Center Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-cyan-500 rounded-full border-4 border-slate-900 -translate-x-[5px] md:-translate-x-1/2 z-10"></div>

                {/* Content Side */}
                <div className="md:w-5/12 bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-cyan-500/30 transition-all">
                  <h3 className="text-xl font-bold text-white">{job.role}</h3>
                  <div className="text-cyan-400 mb-2 font-medium flex items-center gap-2">
                    <Briefcase size={14} /> {job.company}
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {job.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured <span className="text-cyan-400">Projects</span></h2>
        </div>

        {/* Added justify-center to center project cards horizontally when fewer than 3 are present */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {DATA.projects.map((project) => (
            <div key={project.id} className="group bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-2 flex flex-col h-full">
              {/* Mock Image Placeholder */}
              <div className="h-48 bg-slate-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-800 group-hover:scale-110 transition-transform duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-900/60 backdrop-blur-sm">
                  <div className="flex gap-4">
                    <a href={project.github} className="p-2 bg-white text-slate-900 rounded-full hover:bg-cyan-400 transition-colors" target="blank"><Github size={20} /></a>
                    <a href={project.link} className="p-2 bg-white text-slate-900 rounded-full hover:bg-cyan-400 transition-colors" target="blank"><ExternalLink size={20} /></a>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
                <FolderGit2 className="absolute bottom-4 right-4 text-slate-600 w-12 h-12 rotate-12 opacity-20" />
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-6 flex-1 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto ">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs font-medium px-2 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};



const ResumeSection = () => {
  return (
    <section id="resume" className="py-16 bg-slate-900/50 border-t border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-gradient-to-r from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 shadow-lg">
          <div className="flex items-center gap-6">
            <div className="p-4 bg-cyan-500/20 rounded-full text-cyan-400 hidden sm:block">
              <FileText size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Check out my Résumé</h3>
              <p className="text-slate-400">Grab a copy of my resume to see the full picture of my professional journey.</p>
            </div>
          </div>
          <a 
            href={DATA.social.resume} 
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white text-slate-900 hover:bg-cyan-400 font-bold rounded-lg transition-colors shadow-lg flex items-center gap-2 whitespace-nowrap"
          >
            Download Resume <Download size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Let's Work <span className="text-purple-400">Together</span></h2>
        <p className="text-slate-400 mb-12 text-lg">
          I'm currently available for freelance work and full-time positions. <br/>
          If you have a project that needs some creative touch, feel free to reach out.
        </p>
        
        {/* <div className="bg-slate-800/50 backdrop-blur-lg p-8 rounded-3xl border border-slate-700 shadow-2xl">
          <form className="space-y-6 text-left" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Name</label>
                <input type="text" placeholder="John Doe" className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Email</label>
                <input type="email" placeholder="john@example.com" className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Message</label>
              <textarea rows="4" placeholder="Tell me about your project..." className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"></textarea>
            </div>
            <button className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-lg hover:opacity-90 transition-opacity shadow-lg flex items-center justify-center gap-2">
              Send Message <Send size={18} />
            </button>
          </form>
        </div> */}

        <div className="mt-12 pt-12 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="text-slate-500">© 2024 {DATA.hero.name}. All rights reserved.</span>
          <div className="flex gap-6 text-slate-400">
            <a href={DATA.social.github} className="hover:text-white transition-colors" target='blank'>GitHub</a>
            <a href={DATA.social.linkedin} className="hover:text-white transition-colors" target='blank'>LinkedIn</a>
            <a href={DATA.social.email} className="hover:text-white transition-colors" target='blank'>Email</a>
          </div>
        </div>
      </div>
    </section>
  );
};

const App = () => {
  return (
    <>
      {/* Global style to reset body margin and set background color.
        This fixes the "gray bar" issue if the container width doesn't perfectly match the window width.
      */}
      <style>{`
        body, html { 
          background-color: #020617; /* Matches slate-950 */
          margin: 0;
          padding: 0;
          overflow-x: hidden;
          width: 100%;
        }
      `}</style>
      <div className="bg-slate-950 min-h-screen w-full overflow-x-hidden font-sans selection:bg-cyan-500/30 selection:text-cyan-200 relative">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <ResumeSection />
          <Contact />
        </main>
      </div>
    </>
  );
};

export default App;
