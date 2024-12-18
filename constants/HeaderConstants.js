import lowLevelDesignIcon from "../public/resources/images/lowLevelDesign.svg";
import javaSpringIcon from "../public/resources/images/javaSpring.svg";
import dsaIcon from "../public/resources/images/dsa.svg";
import cppIcon from "../public/resources/images/cpp.svg";
import pythonIcon from "../public/resources/images/pythonmastery.svg";
import frontendIcon from "../public/resources/images/frontend.svg";
import { NAV_LINK_CONSTANTS } from "../components/Header/NavLinksContants";

const header = <h3 className="PPNameHeader">Programming Pathshala</h3>;

const courses = [
    {
        id: 1,
        icon: lowLevelDesignIcon,
        name: "Low Level Design & Concurrency",
        duration: "12 Weeks Program",
        lectures: "200+ Lectures",
        caseStudies: "15+ Case Studies",
        projects: "Multi-threading systems",
        link: NAV_LINK_CONSTANTS.LOW_LEVEL_DESIGN_COURSE_URL,
    },
    {
        id: 2,
        icon: javaSpringIcon,
        name: "Java Spring Boot Backend",
        duration: "12 Weeks Program",
        lectures: "200+ Lectures",
        caseStudies: "3 Projects",
        projects: "RESTful APIs",
        link: NAV_LINK_CONSTANTS.JAVA_SPRINGBOOT_COURSE_URL,
    },
    {
        id: 3,
        icon: dsaIcon,
        name: "DSA Crash Course",
        duration: "12 Weeks Program",
        lectures: "120+ Lectures",
        caseStudies: "150+ Problems",
        projects: "Algorithm challenges",
        link: NAV_LINK_CONSTANTS.DSA_AND_ALGORITHMS_ESSENTIALS_COURSE_URL,
    },
    {
        id: 4,
        icon: cppIcon,
        name: "C++ Programming Essentials",
        duration: "12 Weeks Program",
        lectures: "150+ Lectures",
        caseStudies: "100+ Problems",
        projects: "OOP design patterns",
        link: NAV_LINK_CONSTANTS.BEGIN_WITH_CPP_COURSE_URL,
    },
    {
        id: 5,
        icon: pythonIcon,
        name: "Python Mastery",
        duration: "12 Weeks Program",
        lectures: "150+ Lectures",
        caseStudies: "100+ Problems",
        projects: "Data analysis tools",
        link: NAV_LINK_CONSTANTS.BEGIN_WITH_PYTHON_COURSE_URL,
    },
    {
        id: 6,
        icon: frontendIcon,
        name: "Frontend Engineering Pro",
        duration: "12 Weeks Program",
        lectures: "1 Major Projects",
        caseStudies: "5+ Mini Projects",
        projects: "Web UI Components",
        link: NAV_LINK_CONSTANTS.BEGIN_WITH_BECOME_A_FRONTEND_ENGINEER_URL,
    },
];

export { header, courses };
