// =====================================================================
//  THIS IS THE ONLY FILE YOU NEED TO EDIT TO UPDATE YOUR PORTFOLIO.
//  Change the text between the quotation marks "like this".
//  Keep the commas, brackets and quotation marks in place.
//  Anything that starts with YOUR_ is a placeholder: replace it.
// =====================================================================

// ---------- BASIC INFO (hero section) ----------
export const site = {
  name: "Ahmed Mohamed Salah Mwafy",
  shortName: "Ahmed Mwafy",
  title: "Mechatronics Engineering Student | Robotics & Autonomous Systems",
  description:
    "Building intelligent machines at the intersection of robotics, artificial intelligence, embedded systems, and autonomous systems.",
  cvFile: "/CV.pdf", // put your PDF at public/CV.pdf
};

// ---------- SOCIAL LINKS ----------
// Replace each YOUR_... value. Examples:
//   GitHub:   "https://github.com/yourname"
//   LinkedIn: "https://www.linkedin.com/in/yourname"
//   Email:    "yourname@example.com"   (just the address, no "mailto:")
export const socials = [
  { label: "GitHub", type: "github", url: "https://github.com/AhmedMwafy" },
  { label: "LinkedIn", type: "linkedin", url: "https://www.linkedin.com/in/ahmedmwafy41/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bl1hVctKmT6Clc89x8zde2g%3D%3D" },
  { label: "Email", type: "email", url: "ahmedmwafy41@gmail.com" },
];

// ---------- NAVIGATION ----------
export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

// ---------- ABOUT ME ----------

export const about = {
  paragraphs: [
    "I am a Robotics Engineer and Mechatronics Engineering undergraduate, passionate about designing intelligent machines and autonomous systems.",

    "I combine robotics, AI, embedded systems, computer vision, and control to solve engineering problems from the ground up. My approach is practical: understand the problem, design the system, build it, test it, and improve it.",

    "Whether you're looking to develop a robotic system, automate a process, or turn an idea into a working prototype, I bring the technical skills and problem-solving mindset needed to move from concept to reality.",
  ],

  stats: [
    { label: "GPA", value: "3.98 / 4.0" },
    { label: "Academic Rank", value: "1st" },
    { label: "Degree", value: "B.Sc. Mechatronics Engineering" },
    { label: "Graduation", value: "2027" },
  ],
};

// ---------- PROJECTS ----------
// TO ADD A NEW PROJECT: copy one whole block { ... }, paste it below the
// last one (keep the comma after each block) and change the text.
//
//   title        - project name
//   description  - one or two sentences
//   technologies - list of badges
//   image        - path to a picture inside public/images (see below)
//   github       - link to the repository. Leave "" to hide the button.
//   demo         - link to a video or live demo. Leave "" to hide the button.
//
// IMAGE: save your picture as public/images/some-name.jpg and write
// image: "/images/some-name.jpg". If the file is missing or image is "",
// a neat placeholder is shown instead.
export const projects = [
  {
    title: "Autonomous Racing Car",
    description:
      "Developed an autonomous racing platform combining perception, localization, motion planning, and vehicle control.",
    technologies: ["ROS 2", "C++", "Python", "LiDAR", "Camera", "PID", "Pure Pursuit"],
    image: "/images/autonomous-racing-car.jpg",
    github: "https://github.com/MMSAutonomousTeam/F1tenth_Wallfollower_PID",
    demo: "",
  },
  {
    title: "ROS-Based Camera Line Follower",
    description:
      "Designed a camera-based line-following robot using vision-based control and ROS.",
    technologies: ["ROS", "Python", "C++", "Computer Vision", "Embedded Systems"],
    image: "/images/line-follower.jpg",
    github: "https://github.com/AhmedMwafy19/Robotics_Project",
    demo: "",
  },
];

// ---------- TECHNICAL SKILLS ----------
// Each group has a title and a list of items. Add or remove items freely.
export const skillGroups = [
  {
    title: "Robotics",
    items: ["ROS 2", "Gazebo", "RViz", "Motion Planning", "PID", "Pure Pursuit"],
  },
  { title: "Programming", items: ["C", "C++", "Python", "MATLAB"] },
  { title: "Embedded Systems", items: ["AVR", "UART", "SPI", "I2C"] },
  { title: "Tools", items: ["Linux", "MATLAB/Simulink"] },
];

// ---------- EXPERIENCE ----------
// Newest first or oldest first: your choice, it shows in this order.
// period: "" hides the dates. Lines starting with [Placeholder] are
// reminders: replace them with your real responsibilities/results.
export const experience = [
  {
    organization: "Karthikesh Robotics",
    role: "ROS Developer Intern",
    period: "Jun 2025 – Aug 2025",
    points: [
      "Worked on ROS development as an intern in multiple projects."
    ],
  },
  {
    organization: "Mansoura Motorsport",
    role: "Autonomous Systems Member",
    period: "Nov 2024 – Sep 2026", // [Placeholder] add dates, e.g. "2023 – Present"
    points: [
      "Autonomous racing work, including the F1TENTH ICRA qualifiers."
    ],
  },
  {
    organization: "Momentum",
    role: "Technical Director",
    period: "Sep 2025 – Sep 2026", // [Placeholder] add dates
    points: [
      "Technical leadership and robotics projects mentoring."
    ],
  },
];

// ---------- EDUCATION ----------
export const education = [
  {
    school: "Mansoura University",
    degree: "B.Sc. Mechatronics Engineering",
    period: "2022 – 2027",
    details: ["GPA: 3.98 / 4.0", "Rank: 1st"],
  },
];

// ---------- TRAINING ----------
// provider and year are optional: fill them in, or leave "" to hide them.
export const training = [
  { title: "Embedded Systems & Linux", provider: "", year: "" },
  { title: "MATLAB Onramp", provider: "", year: "" },
  { title: "Industrial Automation", provider: "", year: "" },
  { title: "ROS", provider: "", year: "" },
  { title: "Training of Trainers", provider: "", year: "" },
  { title: "Management", provider: "", year: "" },
];

// ---------- CONTACT SECTION ----------
export const contact = {
  heading: "Let's Build Something",
  text: "Interested in robotics, autonomous systems, and intelligent machines.",
};
