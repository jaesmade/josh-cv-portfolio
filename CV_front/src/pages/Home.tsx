import { useEffect, useState } from "react";
import "./App.css";
import download from "/public/download.svg";

const projects = {
  skilldis: {
    category: "AI / Job Matching",
    title: "SkillDis",
    description:
      "An inclusive hybrid intelligent job matching system designed to help Persons With Disabilities find employment opportunities based on their skills, education, experience, and accessibility requirements.",
    tech: ["PHP", "MySQL", "JavaScript", "NLP", "Content-Based Filtering"],
    link: "#",
  },

  hitovest: {
    category: "AI / Agriculture",
    title: "Hitovest",
    description:
      "A catfish farming management system combining production management, biomass forecasting, farm geolocation, and water quality monitoring.",
    tech: ["Python", "Decision Tree", "Sensors", "Data Analysis", "Web"],
    link: "#",
  },

  irrigation: {
    category: "IoT / System",
    title: "Smart Irrigation System",
    description:
      "An automated irrigation system that uses sensors to monitor environmental conditions and assist with efficient water management for agricultural applications.",
    tech: ["Arduino", "Sensors", "IoT", "C++", "Web"],
    link: "#",
  },

  siniloan: {
    category: "Web Development",
    title: "Municipal Siniloan Website",
    description:
      "A responsive municipal website concept created to make local government information, tourism content, announcements, and community resources easier to access.",
    tech: ["React", "JavaScript", "CSS", "React Router", "Responsive Design"],
    link: "#",
  },

  bao: {
    category: "UI / E-Commerce",
    title: "BAO Express",
    description:
      "An e-commerce interface concept featuring modern authentication, product browsing, navigation, and a clean user experience.",
    tech: ["HTML", "CSS", "JavaScript", "UI/UX"],
    link: "#",
  },

  attendance: {
    category: "Information System",
    title: "Attendance & Monitoring System",
    description:
      "An information system designed to organize attendance records, monitor users, and simplify the management of attendance information.",
    tech: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    link: "#",
  },
};

type ProjectId = keyof typeof projects;
type Filter = "all" | "web" | "system" | "ai";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState<Filter>("all");
  const [selectedProject, setSelectedProject] = useState<ProjectId | null>(
    null,
  );
  const [isScrolled, setIsScrolled] = useState(false);
  const closeModal = () => setSelectedProject(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    const revealElements = document.querySelectorAll(".reveal");

    window.addEventListener("scroll", handleScroll);

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    revealElements.forEach((element) => revealObserver.observe(element));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      revealObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : "";
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeModal();
    };

    if (selectedProject) document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  const selectedProjectDetails = selectedProject
    ? projects[selectedProject]
    : null;

  return (
    <>
      <header className={isScrolled ? "scrolled" : ""}>
        <div className="container navbar">
          <a
            className="nav-cta"
            href="#home"
            onClick={() => setIsMenuOpen(false)}
          >
            Download Resume
          </a>
          <nav
            className={`nav-links${isMenuOpen ? " open" : ""}`}
            id="navLinks"
          >
            <a href="#home" onClick={() => setIsMenuOpen(false)}>
              Home
            </a>
            <a href="#about" onClick={() => setIsMenuOpen(false)}>
              About
            </a>
            <a href="#projects" onClick={() => setIsMenuOpen(false)}>
              Projects
            </a>
            <a href="#skills" onClick={() => setIsMenuOpen(false)}>
              Skills
            </a>
            <a
              className="nav-cta"
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </nav>
          <button
            className="menu-btn"
            type="button"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? "×" : "☰"}
          </button>
        </div>
      </header>
      <main>
        <section className="hero" id="home">
          <div className="container hero-grid">
            <div className="hero-content reveal">
              <div className="eyebrow">
                <span className="status-dot"></span>
                Available for opportunities
              </div>

              <h1>
                Building
                <span>digital</span>
                experiences.
              </h1>

              <p className="hero-description">
                I'm a Computer Science student and aspiring developer who enjoys
                creating useful systems, intelligent applications, and clean
                digital experiences.
              </p>

              <div className="hero-actions">
                <a href="#projects" className="btn btn-primary">
                  View Projects
                  <span>↓</span>
                </a>

                <a href="#contact" className="btn btn-secondary">
                  {" "}
                  Let's Connect{" "}
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="about">
          <div className="container">
            <div className="section-header reveal">
              <div>
                <div className="section-label">About</div>

                <h2 className="section-title">A little about me.</h2>
              </div>
            </div>

            <div className="about-grid">
              <div className="about-number reveal">01</div>

              <div className="about-text reveal">
                <p>
                  I'm a graduate of Bachelor of Science in Computer Science
                  Major in Intelligent Systems at Laguna State Polytechnic
                  University student with a passion for software development,
                  web technologies, and intelligent systems.
                </p>

                <p>
                  I enjoy turning ideas into functional applications — from
                  information systems and responsive websites to projects
                  involving machine learning and data processing.
                </p>

                <p>
                  My goal is to build technology that is not only functional,
                  but also accessible, practical, and easy for people to use.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="projects">
          <div className="container">
            <div className="section-header reveal">
              <div>
                <div className="section-label">Selected Work</div>

                <h2 className="section-title">Things I've built.</h2>
              </div>

              <p className="section-description">
                A collection of academic, personal, and software development
                projects.
              </p>
            </div>

            <div className="filter-bar reveal">
              <button
                className={`filter-btn${activeFilter === "all" ? " active" : ""}`}
                onClick={() => setActiveFilter("all")}
              >
                All
              </button>

              <button
                className={`filter-btn${activeFilter === "web" ? " active" : ""}`}
                onClick={() => setActiveFilter("web")}
              >
                Web
              </button>

              <button
                className={`filter-btn${activeFilter === "system" ? " active" : ""}`}
                onClick={() => setActiveFilter("system")}
              >
                Systems
              </button>

              <button
                className={`filter-btn${activeFilter === "ai" ? " active" : ""}`}
                onClick={() => setActiveFilter("ai")}
              >
                AI / Data
              </button>
            </div>

            <div className="projects-grid">
              <article
                className={`project-card reveal${activeFilter !== "all" && activeFilter !== "ai" ? " hidden" : ""}`}
                data-category="ai"
                data-project="skilldis"
                onClick={() => setSelectedProject("skilldis")}
              >
                <div className="project-image">
                  <div className="project-pattern"></div>

                  <div className="project-icon">SD</div>
                </div>

                <div className="project-content">
                  <div className="project-top">
                    <span className="project-category">
                      {" "}
                      AI / Job Matching{" "}
                    </span>

                    <span className="project-arrow"> ↗ </span>
                  </div>

                  <h3 className="project-title">SkillDis</h3>

                  <p className="project-description">
                    An inclusive intelligent job matching system designed to
                    connect PWD job seekers with suitable employment
                    opportunities.
                  </p>

                  <div className="tech-stack">
                    <span className="tech">PHP</span>
                    <span className="tech">MySQL</span>
                    <span className="tech">NLP</span>
                    <span className="tech">JavaScript</span>
                  </div>
                </div>
              </article>

              <article
                className={`project-card reveal${activeFilter !== "all" && activeFilter !== "ai" ? " hidden" : ""}`}
                data-category="ai"
                data-project="hitovest"
                onClick={() => setSelectedProject("hitovest")}
              >
                <div className="project-image">
                  <div className="project-pattern"></div>

                  <div className="project-icon">HV</div>
                </div>

                <div className="project-content">
                  <div className="project-top">
                    <span className="project-category"> AI / Agriculture </span>

                    <span className="project-arrow"> ↗ </span>
                  </div>

                  <h3 className="project-title">Hitovest</h3>

                  <p className="project-description">
                    A catfish farming management system featuring biomass
                    forecasting, farm information, water quality monitoring, and
                    production tools.
                  </p>

                  <div className="tech-stack">
                    <span className="tech">Python</span>
                    <span className="tech">Decision Tree</span>
                    <span className="tech">Sensors</span>
                    <span className="tech">Web</span>
                  </div>
                </div>
              </article>

              <article
                className={`project-card reveal${activeFilter !== "all" && activeFilter !== "system" ? " hidden" : ""}`}
                data-category="system"
                data-project="irrigation"
                onClick={() => setSelectedProject("irrigation")}
              >
                <div className="project-image">
                  <div className="project-pattern"></div>

                  <div className="project-icon">SI</div>
                </div>

                <div className="project-content">
                  <div className="project-top">
                    <span className="project-category"> IoT / System </span>

                    <span className="project-arrow"> ↗ </span>
                  </div>

                  <h3 className="project-title">Smart Irrigation System</h3>

                  <p className="project-description">
                    An automated irrigation solution using sensors and
                    intelligent monitoring to improve water management for
                    crops.
                  </p>

                  <div className="tech-stack">
                    <span className="tech">Arduino</span>
                    <span className="tech">Sensors</span>
                    <span className="tech">IoT</span>
                    <span className="tech">Web</span>
                  </div>
                </div>
              </article>

              <article
                className={`project-card reveal${activeFilter !== "all" && activeFilter !== "web" ? " hidden" : ""}`}
                data-category="web"
                data-project="siniloan"
                onClick={() => setSelectedProject("siniloan")}
              >
                <div className="project-image">
                  <div className="project-pattern"></div>

                  <div className="project-icon">MS</div>
                </div>

                <div className="project-content">
                  <div className="project-top">
                    <span className="project-category"> Web Development </span>

                    <span className="project-arrow"> ↗ </span>
                  </div>

                  <h3 className="project-title">Municipal Siniloan Website</h3>

                  <p className="project-description">
                    A modern municipal website concept designed to provide
                    residents and visitors with accessible information about
                    Siniloan.
                  </p>

                  <div className="tech-stack">
                    <span className="tech">React</span>
                    <span className="tech">JavaScript</span>
                    <span className="tech">CSS</span>
                    <span className="tech">Responsive</span>
                  </div>
                </div>
              </article>

              <article
                className={`project-card reveal${activeFilter !== "all" && activeFilter !== "web" ? " hidden" : ""}`}
                data-category="web"
                data-project="bao"
                onClick={() => setSelectedProject("bao")}
              >
                <div className="project-image">
                  <div className="project-pattern"></div>

                  <div className="project-icon">BAO</div>
                </div>

                <div className="project-content">
                  <div className="project-top">
                    <span className="project-category"> UI / E-Commerce </span>

                    <span className="project-arrow"> ↗ </span>
                  </div>

                  <h3 className="project-title">BAO Express</h3>

                  <p className="project-description">
                    A modern e-commerce interface concept focused on clean
                    navigation, product discovery, and user-friendly
                    authentication.
                  </p>

                  <div className="tech-stack">
                    <span className="tech">HTML</span>
                    <span className="tech">CSS</span>
                    <span className="tech">JavaScript</span>
                    <span className="tech">UI/UX</span>
                  </div>
                </div>
              </article>

              <article
                className={`project-card reveal${activeFilter !== "all" && activeFilter !== "system" ? " hidden" : ""}`}
                data-category="system"
                data-project="attendance"
                onClick={() => setSelectedProject("attendance")}
              >
                <div className="project-image">
                  <div className="project-pattern"></div>

                  <div className="project-icon">AT</div>
                </div>

                <div className="project-content">
                  <div className="project-top">
                    <span className="project-category">
                      {" "}
                      Information System{" "}
                    </span>

                    <span className="project-arrow"> ↗ </span>
                  </div>

                  <h3 className="project-title">
                    Attendance & Monitoring System
                  </h3>

                  <p className="project-description">
                    An information system concept for recording, organizing, and
                    monitoring attendance data.
                  </p>

                  <div className="tech-stack">
                    <span className="tech">PHP</span>
                    <span className="tech">MySQL</span>
                    <span className="tech">JavaScript</span>
                    <span className="tech">Bootstrap</span>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="stats-grid reveal">
              <div className="stat">
                <div className="stat-number">06+</div>
                <div className="stat-label">Featured Projects</div>
              </div>

              <div className="stat">
                <div className="stat-number">10+</div>
                <div className="stat-label">Technologies Used</div>
              </div>

              <div className="stat">
                <div className="stat-number">01</div>
                <div className="stat-label">Goal — Build Better</div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills">
          <div className="container">
            <div className="section-header reveal">
              <div>
                <div className="section-label">Skills</div>

                <h2 className="section-title">Tools I work with.</h2>
              </div>
            </div>

            <div className="skills-grid reveal">
              <span className="skill">HTML</span>
              <span className="skill">CSS</span>
              <span className="skill">JavaScript</span>
              <span className="skill">PHP</span>
              <span className="skill">Python</span>
              <span className="skill">React</span>
              <span className="skill">MySQL</span>
              <span className="skill">Git</span>
              <span className="skill">GitHub</span>
              <span className="skill">Figma</span>
              <span className="skill">Arduino</span>
              <span className="skill">Machine Learning</span>
              <span className="skill">NLP</span>
              <span className="skill">UI/UX Design</span>
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="container">
            <div className="contact-box reveal">
              <div className="section-label">Contact</div>

              <h2>Let's build something.</h2>

              <p>
                Have an idea, project, or opportunity? I'd love to hear about
                it.
              </p>

              <a href="mailto:jaesmade@gmail.com" className="btn btn-primary">
                Get In Touch →
              </a>

              <div className="socials">
                <a href="#" className="social">
                  {" "}
                  GitHub{" "}
                </a>

                <a href="#" className="social">
                  {" "}
                  LinkedIn{" "}
                </a>

                <a href="#" className="social">
                  {" "}
                  Facebook{" "}
                </a>
              </div>
            </div>
          </div>
        </section>

        <div
          className={`modal${selectedProjectDetails ? " active" : ""}`}
          aria-hidden={!selectedProjectDetails}
          onClick={(event) => {
            if (event.target === event.currentTarget) closeModal();
          }}
        >
          {selectedProjectDetails && (
            <div
              className="modal-content"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modalTitle"
            >
              <button
                className="modal-close"
                type="button"
                aria-label="Close project details"
                onClick={closeModal}
              >
                ×
              </button>
              <div className="modal-category">
                {selectedProjectDetails.category}
              </div>
              <h2 id="modalTitle">{selectedProjectDetails.title}</h2>
              <p>{selectedProjectDetails.description}</p>
              <div className="tech-stack">
                {selectedProjectDetails.tech.map((technology) => (
                  <span className="tech" key={technology}>
                    {technology}
                  </span>
                ))}
              </div>
              <a
                className="btn btn-primary"
                href={selectedProjectDetails.link}
                onClick={closeModal}
              >
                View Project →
              </a>
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default Home;
