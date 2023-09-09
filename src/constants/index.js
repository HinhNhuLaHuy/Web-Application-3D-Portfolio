import {
    mobile,
    backend,
    creator,
    web,
    java,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    mysql,
    git,
    github,
    figma,
    docker,
    freecodecamp,
    coursera,
    bookstore,
    dalle,
    metaverse,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Mobile Developer",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "Java",
        icon: java,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "MySQL",
        icon: mysql,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "GitHub",
        icon: github,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "Responsive Web Design",
        company_name: "freeCodeCamp",
        icon: freecodecamp,
        iconBg: "#383E56",
        date: "March 2023",
        points: [
            "Begin with the basics, mastering HTML and CSS to structure and style web pages effectively.",
            "Explore responsive design principles, ensuring my websites adapt seamlessly to various screen sizes and devices.",
            "Dive into advanced topics like CSS Grid and Flexbox, enhancing my layout and design capabilities.",
            "Complete five real-world projects to showcase my skills and earn a valuable certificate, validating my web design expertise.",
        ],
    },
    {
        title: "Google Project Management",
        company_name: "Coursera",
        icon: coursera,
        iconBg: "#E6DEDD",
        date: "June 2023",
        points: [
            "Gain an immersive understanding of the practices and skills needed to succeed in an entry-level project management role.",
            "Learn how to create effective project documentation and artifacts throughout the various phases of a project.",
            "Learn the foundations of Agile project management, with a focus on implementing Scrum events, building Scrum artifacts, and understanding Scrum roles.",
            "Practice strategic communication, problem-solving, and stakeholder management through real-world scenarios.",
        ],
    },
    {
        title: "Google Data Analytics",
        company_name: "Coursera",
        icon: coursera,
        iconBg: "#383E56",
        date: "June 2023",
        points: [
            "Gain an immersive understanding of the practices and processes used by a junior or associate data analyst in their day-to-day job.",
            "Learn key analytical skills (data cleaning, analysis, & visualization) and tools (spreadsheets, SQL, R programming, Tableau).",
            "Understand how to clean and organize data for analysis, and complete analysis and calculations using spreadsheets, SQL and R programming.",
            "Learn how to visualize and present data findings in dashboards, presentations and commonly used visualization platforms.",
        ],
    },
    {
        title: "Google UX Design",
        company_name: "Coursera",
        icon: coursera,
        iconBg: "#E6DEDD",
        date: "September 2023",
        points: [
            "Follow the design process: empathize with users, define pain points, ideate solutions, create wireframes and prototypes, test and iterate on designs.",
            "Understand the basics of UX research, like planning research studies, conducting interviews and usability studies, and synthesizing research results.",
            "Apply foundational UX concepts, like user-centered design, accessibility, and equity-focused design.",
            "Create a professional UX portfolio that includes 3 end-to-end projects: a mobile app, a responsive website, and a cross-platform experience.",
        ],
    },
];

const greatMans = [
    {
        quote:
            "Give me six hours to chop down a tree and I will spend the first four sharpening the axe.",
        name: "Abraham Lincoln",
        designation: "U.S. president",
        image: "https://i0.wp.com/historycolored.com/wp-content/uploads/2021/12/Abe-LincolnColor.jpg?w=1008&ssl=1",
    },
    {
        quote:
            "Impossible is a word to be found only in the dictionary of fools.",
        name: "Napoleon Bonaparte",
        designation: "French military commander",
        image: "https://ehistory.osu.edu/sites/default/files/napoleon-bonaparte-600x600.jpg",
    },
    {
        quote:
            "The people who are crazy enough to think they can change the world are the ones who do.",
        name: "Steve Jobs",
        designation: "CEO of Apple",
        image: "https://i.pinimg.com/600x/27/09/7a/27097a6c6653a4d4f4f6933bb6b0a003.jpg",
    },
];

const projects = [
    {
        name: "Bookstore",
        description:
            "The Bookstore web application is a user-friendly platform for exploring, purchasing, interacting with a diverse book collection, and staying updated with literary trends.",
        tags: [
            {
                name: "reactjs",
                color: "blue-text-gradient",
            },
            {
                name: "nodejs",
                color: "green-text-gradient",
            },
            {
                name: "mongodb",
                color: "pink-text-gradient",
            },
        ],
        image: bookstore,
        source_code_link: "https://github.com/HinhNhuLaHuy/Web-Application-Bookstore",
    },
    {
        name: "DALL-E",
        description:
            "The DALL-E Clone web application is a faithful reproduction of OpenAI's DALL-E, allowing users to generate creative and unique images from text descriptions.",
        tags: [
            {
                name: "reactjs",
                color: "blue-text-gradient",
            },
            {
                name: "openai-api",
                color: "green-text-gradient",
            },
            {
                name: "tailwindcss",
                color: "pink-text-gradient",
            },
        ],
        image: dalle,
        source_code_link: "https://github.com/HinhNhuLaHuy/Web-Application-Dalle-Clone",
    },
    {
        name: "Metaverse",
        description:
            "The Metaverse web application is an immersive platform for socializing, creating, and experiencing a dynamic virtual world with limitless possibilities.",
        tags: [
            {
                name: "reactjs",
                color: "blue-text-gradient",
            },
            {
                name: "tailwindcss",
                color: "green-text-gradient",
            },
            {
                name: "figma",
                color: "pink-text-gradient",
            },
        ],
        image: metaverse,
        source_code_link: "https://github.com/HinhNhuLaHuy/Web-Application-Metaverse",
    },
];

export {services, technologies, experiences, greatMans, projects};