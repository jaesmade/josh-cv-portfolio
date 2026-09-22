import { useEffect, useState } from "react";
import { profile, projects } from "./data/portfolio";
import "./index.css";
const pages = ["home", "about", "portfolio", "resume", "contact"] as const;
type Page = (typeof pages)[number];
const getPage = (): Page => {
  const hash = location.hash.slice(1);
  return pages.includes(hash as Page) ? (hash as Page) : "home";
};
function Icon({ name }: { name: string }) {
  const paths: Record<string, string> = {
    home: "m3 10 9-7 9 7v11h-6v-7H9v7H3Z",
    about: "M20 21v-2a7 7 0 0 0-14 0v2M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z",
    portfolio: "M3 7h18v14H3ZM8 7V3h8v4M3 12h18M10 12v3h4v-3",
    resume: "M14 2H5v20h14V7ZM14 2v6h5M8 12h8M8 16h8",
    contact: "M3 5h18v14H3ZM3 5l9 8 9-8",
    sun: "M12 1v2m0 18v2M1 12h2m18 0h2M4 4l2 2m12 12 2 2M4 20l2-2M18 6l2-2M17 12a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z",
    moon: "M21 13A9 9 0 0 1 11 3a9 9 0 1 0 10 10Z",
    arrow: "M5 19 19 5M5 5h14v14",
    star: "m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.9-6.2-3.3-6.2 3.3L10 14.2 5 9.3l6.9-1Z",
    fork: "M6 3v4a3 3 0 0 0 3 3h7a3 3 0 0 1 3 3v4M6 17v4M3 4a3 3 0 1 0 6 0 3 3 0 0 0-6 0ZM16 18a3 3 0 1 0 6 0 3 3 0 0 0-6 0ZM3 19a3 3 0 1 0 6 0 3 3 0 0 0-6 0Z",
  };
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={paths[name] || paths.arrow} />
    </svg>
  );
}
function Divider() {
  return (
    <div className="divider" aria-hidden="true">
      <span>◆</span>
    </div>
  );
}
export default function App() {
  const [page, setPage] = useState<Page>(getPage);
  const [filter, setFilter] = useState("All");
  const [openProject, setOpenProject] = useState<string | null>(null);
  const [theme, setTheme] = useState(() => {
    return document.documentElement.dataset.theme === "light" ? "light" : "dark";
  });
  useEffect(() => {
    const update = () => {
      if (location.hash === "#main") return;
      setPage(getPage());
      window.scrollTo(0, 0);
    };
    window.addEventListener("hashchange", update);
    return () => window.removeEventListener("hashchange", update);
  }, []);
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem("cv-theme", theme);
    } catch {
      /* Optional storage. */
    }
  }, [theme]);
  useEffect(() => {
    document.title = `${profile.name} — ${page === "home" ? "Developer portfolio" : page}`;
  }, [page]);
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <a className="wordmark" href="#home">
          {profile.handle}
          <span>✳</span>
        </a>
        <span className="header-note">A little corner of the internet.</span>
        <a className="availability" href="#contact">
          <i />
          {profile.status}
        </a>
      </header>
      <main id="main" tabIndex={-1}>
        {page === "home" ? (
          <section className="home-layout">
            <div className="intro">
              <div className="eyebrow">
                HELLO, WORLD! <span>✧</span>
              </div>
              <h1>
                Hey, I'm
                <br />
                <span className="name-highlight">{profile.firstName}.</span>
                <span className="wave" aria-hidden="true">
                  ✌
                </span>
              </h1>
              <p className="intro-copy">{profile.intro}</p>
              <div className="rainbow-note">
                <span>✦</span>
                {profile.tagline}
              </div>
              <Divider />
              <nav className="card-nav" aria-label="Explore portfolio">
                {[
                  {
                    id: "about",
                    title: "About me",
                    text: "The person behind the pixels.",
                    color: "tone-warm",
                  },
                  {
                    id: "portfolio",
                    title: "My projects",
                    text: "Ideas turned into things that work.",
                    color: "tone-cool",
                  },
                  {
                    id: "contact",
                    title: "Let’s connect",
                    text: "Good things start with a hello.",
                    color: "tone-soft",
                  },
                ].map((item) => (
                  <a
                    className={`nav-card ${item.color}`}
                    href={`#${item.id}`}
                    key={item.id}
                  >
                    <span className="card-icon">
                      <Icon name={item.id} />
                    </span>
                    <span>
                      <strong>{item.title}</strong>
                      <small>{item.text}</small>
                    </span>
                    <Icon name="arrow" />
                  </a>
                ))}
              </nav>
              <Divider />
              <div className="social-row">
                <span>FIND ME ELSEWHERE</span>
                {profile.socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {s.label} ↗
                  </a>
                ))}
              </div>
            </div>
            <aside className="portrait-side">
              <div className="portrait-frame">
                <div className="photo-top">
                  <span>ME.JPG</span>
                  <span>─ &nbsp; □ &nbsp; ×</span>
                </div>
                <div className="portrait-image">
                  <img
                    src={profile.photo}
                    alt={`Portrait of ${profile.name}`}
                    width="1112"
                    height="1414"
                  />
                  <span className="photo-sticker">
                    always
                    <br />
                    creating ✦
                  </span>
                </div>
                <div className="photo-caption">
                  <span>
                    <i /> {profile.location}
                  </span>
                  <span>01 / 01</span>
                </div>
              </div>
              <span className="orbit-star" aria-hidden="true">
                ✳
              </span>
              <a className="resume-button" href="#resume">
                <Icon name="resume" />
                View my résumé <span>↗</span>
              </a>
              <p className="portrait-note">
                A curious mind. A work in progress.
              </p>
            </aside>
          </section>
        ) : (
          <section className="inner-page" key={page}>
            <a className="back-link" href="#home">
              ← Back to home
            </a>
            <h1>
              {
                {
                  about: "Behind the pixels.",
                  portfolio: "Things I’ve built.",
                  resume: "My résumé.",
                  contact: "Let’s make something.",
                  home: "",
                }[page]
              }
            </h1>
            <Divider />
            {page === "about" && (
              <>
                <div className="about-grid">
                  <div>
                    <h2>{profile.name}</h2>
                    {profile.about.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                    <a className="text-link" href="#portfolio">
                      Explore my projects ↗
                    </a>
                  </div>
                  <img
                    className="about-photo"
                    src={profile.photo}
                    alt={`Portrait of ${profile.name}`}
                    width="1112"
                    height="1414"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <h2 className="section-heading">My toolbox</h2>
                <div className="skills">
                  {profile.skills.map((s, i) => (
                    <span
                      className={["tone-warm", "tone-cool", "tone-soft"][i % 3]}
                      key={s}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </>
            )}
            {page === "portfolio" && (
              <>
                <p>A selection of applications, experiments, and systems.</p>
                <div className="filters" aria-label="Filter projects">
                  {["All", "Web", "AI / Data", "Systems"].map((f) => (
                    <button
                      aria-pressed={filter === f}
                      className={filter === f ? "selected" : ""}
                      onClick={() => {
                        setFilter(f);
                        setOpenProject(null);
                      }}
                      key={f}
                    >
                      {f}
                    </button>
                  ))}
                </div>
                <div className="project-grid">
                  {projects
                    .filter((p) => filter === "All" || p.category === filter)
                    .map((p) => (
                      <article
                        className={`project-card${openProject === p.title ? " is-open" : ""}`}
                        key={p.title}
                      >
                        <button
                          className="project-art"
                          type="button"
                          aria-expanded={openProject === p.title}
                          aria-label={`${openProject === p.title ? "Hide" : "Show"} details for ${p.title}`}
                          onClick={() =>
                            setOpenProject((current) =>
                              current === p.title ? null : p.title,
                            )
                          }
                        >
                          <img
                            src={`${import.meta.env.BASE_URL}${p.image}`}
                            alt={p.imageAlt}
                            width="1280"
                            height="720"
                            loading="lazy"
                            decoding="async"
                            onError={(event) => {
                              const fallback = `${import.meta.env.BASE_URL}projects/placeholder.svg`;
                              if (event.currentTarget.getAttribute("src") !== fallback) {
                                event.currentTarget.src = fallback;
                                event.currentTarget.alt = `Image unavailable for ${p.title}`;
                              }
                            }}
                          />
                          {(p.repository?.stars || p.repository?.forks) && (
                            <span className="repo-stats">
                              {p.repository.stars && (
                                <span title="GitHub stars"><Icon name="star" />{p.repository.stars}</span>
                              )}
                              {p.repository.forks && (
                                <span title="GitHub forks"><Icon name="fork" />{p.repository.forks}</span>
                              )}
                            </span>
                          )}
                          <span className="project-overlay">
                            <span className="project-overlay-inner">
                              <small className="project-category">{p.category}</small>
                              <strong>{p.title}</strong>
                              <span className="project-description">{p.description}</span>
                            </span>
                          </span>
                        </button>
                        {p.repository && (
                          <a className="project-link" href={p.repository.url} target="_blank" rel="noreferrer">
                            Open in GitHub <Icon name="arrow" />
                          </a>
                        )}
                      </article>
                    ))}
                </div>
              </>
            )}
            {page === "resume" && (
              <>
                <div className="resume-header">
                  <div>
                    <h2>{profile.name}</h2>
                    <p>
                      {profile.role} · {profile.location}
                    </p>
                    <a href={`mailto:${profile.email}`}>{profile.email}</a>
                  </div>
                  <button
                    className="primary-button print-button"
                    onClick={() => window.print()}
                  >
                    Print / Save PDF ↗
                  </button>
                </div>
                <h2 className="section-heading">Profile</h2>
                <p>{profile.about[0]}</p>
                <h2 className="section-heading">Education</h2>
                {profile.education.map((e) => (
                  <div className="resume-entry" key={e.degree}>
                    <h3>{e.degree}</h3>
                    <p>{e.school}</p>
                    <p>{e.detail}</p>
                  </div>
                ))}
                <h2 className="section-heading">Selected projects</h2>
                {projects.slice(0, 3).map((p) => (
                  <div className="resume-entry" key={p.title}>
                    <h3>{p.title}</h3>
                    <p>{p.description}</p>
                    <small>{p.tech.join(" · ")}</small>
                  </div>
                ))}
                <h2 className="section-heading">Skills</h2>
                <p>{profile.skills.join(" · ")}</p>
              </>
            )}
            {page === "contact" && (
              <div className="contact-panel">
                <p>
                  Have a project, an opportunity, or just something interesting
                  to share? I’d love to hear from you.
                </p>
                <a className="primary-button" href={`mailto:${profile.email}`}>
                  <Icon name="contact" />
                  {profile.email} ↗
                </a>
                <div className="contact-socials">
                  {profile.socials.map((s) => (
                    <a
                      href={s.url}
                      key={s.label}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {s.label} ↗
                    </a>
                  ))}
                </div>
              </div>
            )}
          </section>
        )}
      </main>
      <footer>
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span>
          Made with curiosity <span className="footer-star">✦</span> Built for
          the web.
        </span>
      </footer>
      <nav className="dock" aria-label="Main navigation">
        {pages.map((p) => (
          <a
            key={p}
            href={`#${p}`}
            className={page === p ? "active" : ""}
            aria-label={p.charAt(0).toUpperCase() + p.slice(1)}
            aria-current={page === p ? "page" : undefined}
            title={p.charAt(0).toUpperCase() + p.slice(1)}
          >
            <Icon name={p} />
          </a>
        ))}
        <span className="dock-separator" />
        <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
          title="Toggle theme"
        >
          <Icon name={theme === "light" ? "moon" : "sun"} />
        </button>
      </nav>
    </>
  );
}
