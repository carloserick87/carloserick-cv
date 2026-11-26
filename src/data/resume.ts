import type { Resume_types } from "./resume_types";

export const resume: Resume_types = {

    profile: {
        name: "Carlos Erick",
        headline: "Front-End Developer",
        summary: "Frontend Developer passionate about building modern, responsive and user-focused digital experiences.\nFocused on clean code, scalable architecture, performance and creating intuitive interfaces that combine\nfunctionality with thoughtful design.",
        location: "Dublin, Ireland"
          },



    education: [
        {
        qualification: "Master Degree in Web User Interface Design and Development\n(Front-End Design & Development).",
        institution: "Universidad Internacional de la Rioja.",
        startDate: "2025",
        endDate: "2026",
        city: "La Rioja, Spain."
        },
        {
        qualification: "Bachelor Degree in Computer Systems Engineering.",
        institution: "Instituto de Estudios Superiores de Chiapas.",
        startDate: "2015",
        endDate: "2018",
        city: "Chiapas, Mexico."
        }
     ],

    experience: [
        {
        position: "Programming Instructor",
        company: "Instituto de Estudios Superiores de Chiapas.",
        startDate: "2021",
        endDate: "2024",
        location: "Chiapas, Mexico."
        },
        {
         position: "Programming Instructor",
         company: "CBTIS 170",
         startDate: "2019",
         endDate: "2023",
         location: "Chiapas, Mexico."
        }
    ],

    projects: [
        {
         name: "Little Paws of the Hope",
         description: "A cross-platform mobile application designed to connect\n" +
             "homeless pets with loving families through an accessible\n" +
             "pet adoption experience.",
            technologies:[
                "React Native",
                "Expo",
                "Nativewind",
                "TanStack Query"
            ],
            url: "https://github.com/carloserick87/Little_Paws_of_Hope_App"
        },
        {
            name: "Nexus Bookstore",
            description: "A modern digital platform designed to promote reading\n" +
                "and connect people through culture, technology, and design.\n" +
                "Developed as part of a Front-End Development and UX/UI Master's program,\n" +
                "integrating usability, accessibility, and responsive design principles.",
            technologies:[
                "React",
                "Vite",
                "Tailwind CSS",
                "React Router DOM",
                "Lucide React (icons SVG)",
                "Vercel (Deployment)"
            ],
            url: "https://github.com/carloserick87/Cross-Platform-Mobile-APPS/tree/main/Project_2/Act_2"
        }
    ],

    skills: [
        {
            category: "Front-end",
            items:[
                "Angular",
                "React",
                "React Native",
                "Vue 3",
                "Bootstrap",
                "WordPress",
                "HTML",
                "JavaScript",
                "TypeScript"
            ]
        },
        {
            category: "Styling",
            items:[
                "CSS3",
                "Tailwind CSS",
                "Sass / SCSS"
            ]
        },
        {
            category: "Tools",
            items: [
                "Git",
                "Vite",
                "Playwright",
                "PostMan",
                "Figma",
                "Docker"
            ]
        },
        {
            category: "AI Tools",
            items:[
                "GitHub Copilot",
                "Claude Code",
                "Cursor",
                "Ollama"
            ]
        }
    ],

    contact:
          {
            email: "contact@carloserickdev.com",
            linkedin: "https://www.linkedin.com/in/carlos-erick-mandujano"
          }

};