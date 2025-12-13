// Skills Section Logos
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import webverseLogo from './assets/company_logo/bitnest.jpeg';
// Experience Logos
import syb from './assets/company_logo/syb_ecosystem.jpeg';
import agcLogo from './assets/company_logo/bitnest.jpeg';
import newtonschoolLogo from './assets/company_logo/bitnest.jpeg';

// Education Logos
import pny from './assets/education_logo/pny.png';
import uos from './assets/education_logo/uos.png';


import movierecLogo from './assets/work_logo/movie_rec.png';
import taskremLogo from './assets/work_logo/task_rem.png';
import webverLogo from './assets/work_logo/web_dig.png';
import cmLogo from './assets/work_logo/cm.png';
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';

// Skills Data
export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo }
    ]
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo }
    ]
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo }
    ]
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Figma', logo: figmaLogo }
    ]
  }
];

// Experience Data
export const experiences = [
  {
    id: 0,
    img: webverseLogo,
    role: "MERN Stack",
    company: "Freelancing",
    date: "June 2024 - Present",
    desc: "Developed several personal and academic web projects using React.js, Node.js, Express.js, and MongoDB. Built responsive and user-friendly interfaces with HTML, CSS, JavaScript, and modern frameworks. Focused on creating scalable, performance-optimized applications with clean and maintainable code. Gained hands-on experience in full-stack development, RESTful APIs, and project deployment.",
    skills: ["HTML", "CSS", "JavaScript", "React JS", "TypeScript", "Node JS", "Tailwind CSS", "MongoDB", "Redux", "Next JS"]
  },
  {
    id: 1,
    img: syb,
    role: "Full Stack Developer",
    company: "SYB Ecosystem",
    date: "July 2025 - Present",
    desc: "Developed several personal and academic web projects using React.js, Node.js, Express.js, and MongoDB. Built responsive and user-friendly interfaces with HTML, CSS, JavaScript, and modern frameworks. Focused on creating scalable, performance-optimized applications with clean and maintainable code. Gained hands-on experience in full-stack development, RESTful APIs, and project deployment.",
    skills: ["HTML", "CSS", "JavaScript", "React JS", "TypeScript", "Node JS", "Tailwind CSS", "MongoDB", "Redux", "Wordpress","SEO"]
  },
  {
    id: 2,
    img: agcLogo,
    role: "Digital Marketing",
    company: "Independent",
    date: "Oct 2021 - March 2024",
    desc: "Managed end-to-end digital marketing projects, including content strategy, SEO, and targeted advertising campaigns. Planned and executed social media campaigns to increase engagement and brand visibility. Analyzed campaign performance and optimized strategies for better ROI and audience reach. Built and maintained strong client relationships through regular updates, reporting, and timely delivery of marketing results.",
    skills: ["Social Media Marketing", "Campaigns", "Accounts Management", "SEO", "Accounts Growth"]
  },
  {
    id: 3,
    img: newtonschoolLogo,
    role: "Graphic Design",
    company: "Independent",
    date: "Sept 2021 - Aug 2022",
    desc: "Designed creative visuals, logos, posters, and branding assets tailored to client requirements. Collaborated with diverse clients to bring their ideas to life through visually appealing and professional designs. Ensured high-quality deliverables while maintaining brand consistency across all design materials. Developed a strong understanding of design principles, typography, and color theory to create impactful visuals.",
    skills: ["Canva", "Calligraphy", "Logo", "Posters", "UI", "Branding Assets"]
  }
];

// Education Data
export const education = [
  {
    id: 0,
    img: uos,
    school: "University of Sargodha",
    date: "Sept 2021 - June 2025",
    grade: "3.4/4 CGPA",
    desc: "Completed BS in Information Technology with courses in Data Structures, OOP, Operating Systems, Database Systems, Networking, Cloud Computing, and Information Security. Participated in academic projects and activities to strengthen practical skills.",
    degree: "Information Technology"
  },
  {
    id: 1,
    img: pny,
    school: "PNY Trainings Arfa Tower Lahore",
    date: "June 2024 - November 2024",
    grade: "73.2%",
    desc: "Completed MERN Stack Development training covering MongoDB, Express.js, React.js, and Node.js. Worked on hands-on projects including front-end and back-end development, API integration, and deployment.",
    certificate: "MERN Stack Development"
  }
];

// Projects Data
export const projects = [
  {
    id: 2,
    title: "Movie Recommendation App",
    description: "A React-based web app providing movie recommendations based on genres, user preferences, and popular trends.",
    image: movierecLogo,
    tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
    github: "#",
    webapp: "https://movie-recommendation-app-jet.vercel.app/"
  },
  {
    id: 4,
    title: "Task Reminder Chrome Extension Tool",
    description: "A productivity Chrome extension for managing and remembering daily tasks.",
    image: taskremLogo,
    tags: ["JavaScript", "Chrome Extension", "HTML", "CSS"],
    github: "#",
    webapp: "#"
  },
  {
    id: 5,
    title: "HMS (FYP)",
    description: "Hospital Management System for managing patient info, staff schedules, and resources efficiently.",
    image: webverLogo,
    tags: ["HTML", "Tailwind CSS", "JavaScript", "React JS", "Node JS", "Express JS", "MongoDB", "RESTful APIs", "Shadecn UI"],
    github: "#",
    webapp: "#"
  },
  {
    id: 6,
    title: "Age Calculator",
    description: "A simple JavaScript app that calculates a user’s exact age based on their date of birth.",
    image: cmLogo,
    tags: ["HTML", "CSS", "JavaScript"],
    github: "#",
    webapp: "#"
  },
  {
    id: 7,
    title: "Image Search App",
    description: "React.js-based image search app using external APIs for high-quality results.",
    image: imagesearchLogo,
    tags: ["React JS", "API", "Search Feature", "CSS", "JavaScript"],
    github: "#",
    webapp: "https://imagsearch.netlify.app/"
  },
  {
    id: 8,
    title: "Image Background Remover",
    description: "Background removal app built with React.js and API integration.",
    image: removebgLogo,
    tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "JavaScript"],
    github: "#",
    webapp: "https://removeyourbg.netlify.app/"
  }
];
