import photo from "../assets/me.png";
// Edit this file to personalize the template. Omit project URLs until a demo is available.
export const profile = {
  name: "Josh Andrew Esmade",
  firstName: "Josh",
  handle: "jaesmade",
  photo,
  role: "Developer & Computer Science graduate",
  location: "Philippines",
  email: "jaesmade@gmail.com",
  status: "Open to opportunities",
  tagline: "A little code. A lot of curiosity.",
  intro:
    "A developer with a curious mind. I build useful systems, intelligent applications, and thoughtful digital experiences.",
  about: [
    "I’m a Computer Science graduate specializing in Intelligent Systems from Laguna State Polytechnic University, with a passion for software development, web technologies, and intelligent applications.",
    "I enjoy turning real-world problems into practical tools — from inclusive job matching to smarter farming. My work brings together clean interfaces, data, and a desire to keep learning.",
  ],
  socials: [
    { label: "GitHub", url: "https://github.com/jaesmade" },
    { label: "Facebook", url: "https://www.facebook.com/joshandrew.esmade/" },
  ],
  education: [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "Laguna State Polytechnic University",
      detail: "Major in Intelligent Systems",
    },
  ],
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "PHP",
    "Python",
    "MySQL",
    "Node.js",
    "Git",
    "Figma",
    "Arduino",
    "Machine Learning",
    "NLP",
    "UI/UX Design",
  ],
};
type Project = {
  title: string;
  initials: string;
  category: string;
  color: string;
  description: string;
  tech: string[];
  url?: string;
};
export const projects: Project[] = [
  {
    title: "SkillDis",
    initials: "SD",
    category: "AI / Data",
    color: "tone-cool",
    description:
      "An inclusive intelligent job matching system connecting PWD job seekers with opportunities based on skills, experience, and accessibility requirements.",
    tech: ["PHP", "MySQL", "JavaScript", "NLP"],
  },
  {
    title: "Hitovest",
    initials: "HV",
    category: "AI / Data",
    color: "tone-soft",
    description:
      "A catfish farming management system combining biomass forecasting, farm information, water quality monitoring, and production tools.",
    tech: ["Python", "Decision Tree", "Sensors"],
  },
  {
    title: "Smart Irrigation System",
    initials: "SI",
    category: "Systems",
    color: "tone-warm",
    description:
      "An automated irrigation solution using sensors and environmental monitoring to improve water management in agriculture.",
    tech: ["Arduino", "IoT", "C++"],
  },
  {
    title: "Municipal Siniloan Website",
    initials: "MS",
    category: "Web",
    color: "tone-soft",
    description:
      "A responsive municipal website concept making local information, tourism, and community resources easier to access.",
    tech: ["React", "JavaScript", "CSS"],
  },
  {
    title: "BAO Express",
    initials: "BAO",
    category: "Web",
    color: "tone-warm",
    description:
      "An e-commerce interface concept focused on clear navigation, product discovery, and user-friendly authentication.",
    tech: ["HTML", "CSS", "JavaScript", "UI/UX"],
  },
  {
    title: "Attendance & Monitoring",
    initials: "AM",
    category: "Systems",
    color: "tone-cool",
    description:
      "An information system concept for recording, organizing, and monitoring attendance data.",
    tech: ["PHP", "MySQL", "Bootstrap"],
  },
];
