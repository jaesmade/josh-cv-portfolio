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
  image: string;
  imageAlt: string;
  category: string;
  description: string;
  tech: string[];
  repository?: {
    url: string;
    stars?: string;
    forks?: string;
  };
};
// Image paths are relative to public/. Replace a placeholder file, or point image
// to your own JPG/PNG/WebP (e.g. "projects/skilldis.webp") and update imageAlt.
// Add an optional repository with an accurate URL and counts to show the GitHub
// action and stat badges on the image, matching the DIMFLIX gallery behavior.
export const projects: Project[] = [
  {
    title: "SkillDis",
    image: "projects/skilldis.svg",
    imageAlt: "Screenshot placeholder for SkillDis",
    category: "AI / Data",
    description:
      "An inclusive intelligent job matching system connecting PWD job seekers with opportunities based on skills, experience, and accessibility requirements.",
    tech: ["PHP", "MySQL", "JavaScript", "NLP"],
  },
  {
    title: "Hitovest",
    image: "projects/hitovest.svg",
    imageAlt: "Screenshot placeholder for Hitovest",
    category: "AI / Data",
    description:
      "A catfish farming management system combining biomass forecasting, farm information, water quality monitoring, and production tools.",
    tech: ["Python", "Decision Tree", "Sensors"],
  },
  {
    title: "Smart Irrigation System",
    image: "projects/irrigation.svg",
    imageAlt: "Screenshot placeholder for Smart Irrigation System",
    category: "Systems",
    description:
      "An automated irrigation solution using sensors and environmental monitoring to improve water management in agriculture.",
    tech: ["Arduino", "IoT", "C++"],
  },
  {
    title: "Municipal Siniloan Website",
    image: "projects/siniloan.svg",
    imageAlt: "Screenshot placeholder for Municipal Siniloan Website",
    category: "Web",
    description:
      "A responsive municipal website concept making local information, tourism, and community resources easier to access.",
    tech: ["React", "JavaScript", "CSS"],
  },
  {
    title: "BAO Express",
    image: "projects/bao-express.svg",
    imageAlt: "Screenshot placeholder for BAO Express",
    category: "Web",
    description:
      "An e-commerce interface concept focused on clear navigation, product discovery, and user-friendly authentication.",
    tech: ["HTML", "CSS", "JavaScript", "UI/UX"],
  },
  {
    title: "Attendance & Monitoring",
    image: "projects/attendance.svg",
    imageAlt: "Screenshot placeholder for Attendance and Monitoring",
    category: "Systems",
    description:
      "An information system concept for recording, organizing, and monitoring attendance data.",
    tech: ["PHP", "MySQL", "Bootstrap"],
  },
];
