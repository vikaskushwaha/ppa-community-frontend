import { gaCourseNameMap } from "../../googleAnalytics/gtmConstants";

const coursesDetails = [
    {
        courseName: "Tech Fellowship Program",
        courseDescription:
            "Become a next-gen software engineer by building projects with tech leaders.",
        courseLink: `${process.env.NEXT_PUBLIC_FRONTEND_MAIN_URL}tech-fellowship-program`,
        clickable: true,
        showNewRibbon: true,
    },
    {
        courseName: "Renaissance",
        courseDescription:
            "Master Data Structures & Algorithms and System Design. Crack Top-notch Tech roles.",

        courseLink: `${process.env.NEXT_PUBLIC_FRONTEND_RENAISSANCE_PAGE_URL}crack-coding-interviews`,
        clickable: true,
        showNewRibbon: false,
        gaCourseTracker: gaCourseNameMap.RENAISSANCE,
    },
    {
        courseName: "Low Level Design for Professionals",
        courseDescription:
            "Crack Design and Machine Coding rounds for Senior Software Engineer Roles",
        courseLink: `${process.env.NEXT_PUBLIC_FRONTEND_RENAISSANCE_PAGE_URL}low-level-design`,
        clickable: true,
        showNewRibbon: false,
        gaCourseTracker: gaCourseNameMap.LOW_LEVEL_DESIGN,
    },
    {
        courseName: "Learn Backend Engineering in JAVA Spring Boot Framework",
        courseDescription:
            "Learn backend enginneering in java spring boot, most widely used framework in software industry",
        courseLink: `${process.env.NEXT_PUBLIC_FRONTEND_RENAISSANCE_PAGE_URL}java-springboot`,
        clickable: true,
        showNewRibbon: gaCourseNameMap.JAVA,
    },
    {
        courseName: "Begin with Programming in C++",
        courseDescription:
            "A practical and hands-on course for those who are eager to master C++. Beginner-friendly.",
        courseLink: `${process.env.NEXT_PUBLIC_FRONTEND_RENAISSANCE_PAGE_URL}begin-with-c++`,
        clickable: true,
        showNewRibbon: false,
        gaCourseTracker: gaCourseNameMap.CPP,
    },
    {
        courseName: "Become a Python Expert",
        courseDescription:
            "Become a Python pro and unlock the door to endless career opportunities in Data Science and Software Development.",
        courseLink: `${process.env.NEXT_PUBLIC_FRONTEND_RENAISSANCE_PAGE_URL}begin-with-python`,
        clickable: true,
        showNewRibbon: false,
        gaCourseTracker: gaCourseNameMap.PYTHON,
    },
    {
        courseName: "Become a brilliant Frontend Engineer",
        courseDescription:
            "Master the skills of a front-end engineer and build modern & responsive website applications.",
        courseLink: `${process.env.NEXT_PUBLIC_FRONTEND_RENAISSANCE_PAGE_URL}become-a-frontend-engineer`,
        clickable: true,
        showNewRibbon: false,
    },
    // {
    //     courseName: "Be a Data Engineer",
    //     courseDescription:
    //         "Deep dive in Databases and learn tools to manipulate data as per industry standards.",
    //     courseLink: `${process.env.NEXT_PUBLIC_FRONTEND_RENAISSANCE_PAGE_URL}`,
    //     clickable: false,
    //     showNewRibbon: true,
    // },
    {
        courseName: "Crash Course in Data Structures & Algorithms",
        courseDescription:
            "A very concise program with curated and handpicked concepts, for you to master DSA quickly and crack your dream job.",
        courseLink: `${process.env.NEXT_PUBLIC_FRONTEND_RENAISSANCE_PAGE_URL}dsa-and-algorithms-essentials`,
        clickable: true,
        showNewRibbon: false,
        gaCourseTracker: gaCourseNameMap.CRASH_COURSE,
    },

    
    // {
    //     courseName: "System Design for Professionals",
    //     courseDescription:
    //         "Build skills in designing large scale systems and prepare for System Design rounds for Senior Engineer Roles",
    //     courseLink: `${process.env.NEXT_PUBLIC_FRONTEND_RENAISSANCE_PAGE_URL}`,
    //     clickable: false,
    //     showNewRibbon: true,
    // },
];
export { coursesDetails };
