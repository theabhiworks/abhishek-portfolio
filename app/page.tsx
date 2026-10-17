import { ArrowDownRight, ArrowRight, Github, Linkedin, CodeXml, Mail, ExternalLink, Code2, Layers3, Leaf, BriefcaseBusiness, Terminal, Sparkles } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    number: "01",
    name: "Karigro",
    type: "FULL-STACK WEB APPLICATION",
    description: "A full-stack skilled-worker marketplace connecting customers with service professionals. Built with Next.js, Prisma, and PostgreSQL, with worker discovery, service requests, dashboards, and notification workflows.",
    stack: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS"],
    icon: BriefcaseBusiness,
    github: "https://github.com/theabhiworks/karigro",
    demo: "https://karigro.vercel.app",
  },
  {
    number: "02",
    name: "AI Plant Doctor",
    type: "AI-POWERED PLANT IDENTIFICATION",
    description: "An AI-powered plant identification app that accepts leaf images and uses the Plant.id API to return plant identification information through a Streamlit interface.",
    stack: ["Python", "Streamlit", "Plant.id API"],
    icon: Leaf,
    github: "https://github.com/theabhiworks/plant-identifier",
    demo: "https://plant-identifier-abhishekgupta.streamlit.app/",
  },
];

const skills = [
  { title: "Languages", items: "Java · Python · JavaScript · TypeScript" },
  { title: "Frontend", items: "React · Next.js · HTML · CSS · Tailwind CSS" },
  { title: "Backend & Data", items: "Node.js · REST APIs · Prisma · PostgreSQL" },
  { title: "Tools & Foundations", items: "Git · GitHub · OOP · Data Structures & Algorithms" },
];

export default function Home() {
  return (
    <main>
      <nav className="nav shell">
        <a className="brand" href="#home" aria-label="Abhishek home">
          <span className="brand-mark">A.</span>
          <span>abhishek<span className="muted">.dev</span></span></a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a className="nav-contact" href="#contact">Contact <ArrowRight size={14} /></a>
        </div>
      </nav>

      <section id="home" className="hero shell">
        <div className="hero-copy">
          <div className="availability"><span className="status-dot" /> OPEN TO SDE INTERNSHIP OPPORTUNITIES</div>
          <p className="eyebrow">COMPUTER SCIENCE STUDENT · DEVELOPER</p>
          <h1>Turning ideas<br />into <span className="green-text">useful software.</span></h1>
          <p className="hero-description">
            Hey, I’m Abhishek — a CSE student who enjoys building web applications, solving problems, and learning how reliable software works behind the scenes.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">Explore my work <ArrowRight size={16} /></a>
            <a className="button button-secondary" href="/resume.pdf" target="_blank" rel="noopener noreferrer">View Resume <ArrowDownRight size={16} /></a>
          </div>
          <div className="social-links">
            <a href="https://github.com/theabhiworks" target="_blank" rel="noreferrer"><Github size={16} /> GitHub</a>
            <a href="https://www.linkedin.com/in/abhishekgupta1873" target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn</a>
            <a href="mailto:abhishekgupta746120@gmail.com"><Mail size={16} /> Email</a>
          </div>
        </div>
        <div className="hero-art profile-art">
          <div className="profile-orbit" aria-hidden="true" />

          <div className="profile-photo-ring">
            <Image
              src="/images/profile.jpg"
              alt="Abhishek Gupta"
              width={320}
              height={320}
              priority
              className="profile-image"
            />
          </div>

          <div className="profile-info">
            <span className="profile-label">
              <span className="status-dot" />
              SOFTWARE DEVELOPER
            </span>

            <h2>Abhishek Gupta</h2>
            <p>Aspiring Software Engineer</p>

            <div className="profile-tags">
              <span>Java & DSA</span>
              <span>Full-Stack</span>
              <span>Problem Solving</span>
            </div>
          </div>

          <div className="profile-caption">
            <Code2 size={15} />
            Building. Learning. Improving.
          </div>
        </div>
        <a className="scroll-cue" href="#about"><span /> SCROLL TO EXPLORE</a>
      </section>

      <section id="about" className="section shell">
        <div className="section-heading">
          <p className="eyebrow">01 / A LITTLE ABOUT ME</p>
          <h2>Curious mind.<br /><span className="muted-heading">Builder’s mindset.</span></h2>
        </div>
        <div className="about-grid">
          <p className="about-lead">I’m a Computer Science Engineering student interested in software development, backend systems, and building products that solve real problems.</p>
          <div className="about-detail">
            <p>I learn best by building. From a service marketplace to an AI-powered plant identifier, my projects help me turn concepts into working applications and understand the engineering decisions behind them.</p>
            <p>Right now, I’m strengthening my Java, data structures and algorithms, and full-stack development skills while looking for opportunities to learn from experienced engineering teams.</p>
            <div className="mini-stats">
              <div><strong>02<span>+</span></strong><small>Projects to explore</small></div>
              <div><strong>∞</strong><small>Things to learn</small></div>
              <div><strong>01</strong><small>Step at a time</small></div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="section projects-section">
        <div className="shell"><div className="section-heading project-heading">
          <div>
            <p className="eyebrow">02 / SELECTED WORK</p>
            <h2>
              Things I’ve <span className="green-text">built.</span>
            </h2>
          </div>
          <p className="heading-note">Real projects, practical learning, and plenty of room to improve.</p>
        </div>
          <div className="project-grid">{projects.map((project) => {
            const Icon = project.icon;
            return <article className="project-card" key={project.number}>
              <div className="project-card-top"><span className="project-number">/{project.number}</span>
                <div className="project-icon"><Icon size={23} />
                </div>
                <a className="external-icon" href={project.github} target="_blank" rel="noreferrer" aria-label={`GitHub repository for ${project.name}`}><ExternalLink size={17} /></a>
              </div>
              <p className="project-type">{project.type}</p><h3>{project.name}</h3><p className="project-description">{project.description}</p>
              <div className="tag-list">
                {project.stack.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noreferrer"><Github size={16} /> Source code <ArrowRight size={14} /></a><a href={project.demo} target="_blank" rel="noreferrer">Live demo <ArrowRight size={14} /></a>
              </div>
            </article>;
          })}
          </div>
          <div className="project-footnote"><span className="status-dot" /> Explore the source code and live applications.</div>
        </div>
      </section>

      <section id="skills" className="section shell">
        <div className="section-heading">
          <p className="eyebrow">03 / MY TOOLKIT</p>
          <h2>Tools I use to<br /><span className="muted-heading">make things work.</span></h2>
        </div>
        <div className="skills-layout">
          <div className="skills-intro">
            <div className="skills-icon">
              <Layers3 size={25} />
            </div>
            <h3>Learning by doing.</h3>
            <p>
              My toolkit grows with every project. I’m focused on understanding fundamentals rather than collecting technologies.
            </p>
            <div className="learning-pill">
              <Terminal size={15} /> Currently deepening Java + DSA
            </div>
          </div>
          <div className="skill-list">{skills.map((skill, i) => <div className="skill-row" key={skill.title}>
            <span className="skill-index">0{i + 1}</span>
            <div><h4>{skill.title}</h4><p>{skill.items}</p></div><ArrowDownRight className="skill-arrow" size={18} />
          </div>)}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="shell cta-inner">
          <div>
            <p className="eyebrow">04 / WHAT’S NEXT?</p><h2>Let’s build something<br /><span className="green-text">worth talking about.</span></h2>
            <p className="cta-copy">I’m open to SDE internship opportunities, collaborative projects, and conversations about software engineering.</p>
          </div><a className="button button-primary" href="mailto:abhishekgupta746120@gmail.com">Say hello <ArrowRight size={16} /></a><div className="cta-decoration">A.</div>
        </div>
      </section>

      <footer id="contact" className="footer shell">
        <a className="brand" href="#home"><span className="brand-mark">A.</span><span>abhishek<span className="muted">.dev</span></span></a>
        <p>Designed & built with curiosity. © {new Date().getFullYear()} Abhishek Gupta</p>
        <div className="footer-socials">
          <a href="https://github.com/theabhiworks" aria-label="GitHub"><Github size={17} /></a>
          <a href="https://www.linkedin.com/in/abhishekgupta1873" aria-label="LinkedIn"><Linkedin size={17} /></a>
          <a
            href="https://leetcode.com/u/theabhiworks/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LeetCode profile"
            title="LeetCode"
          >
            <CodeXml size={17} />
          </a><a href="mailto:abhishekgupta746120@gmail.com" aria-label="Email"><Mail size={17} /></a>
        </div>
      </footer>
    </main>
  );
}
