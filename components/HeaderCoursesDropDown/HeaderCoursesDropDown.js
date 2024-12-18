import React from "react";
import Image from "next/image";
import launchCareerImage from "../../public/resources/images/fellowship.svg"; // Update the path as per your structure
import styles from "./fellowship.module.css"; // CSS module
import { NAV_LINK_CONSTANTS } from "../Header/NavLinksContants";

export default function FellowshipProgramHoverBox({ isMobile = false }) {
    const handleExploreClick = () => {
        window.open(NAV_LINK_CONSTANTS.TECH_FELLOWSHIP_PROGRAM_URL, "_blank");
    };

    // Function to disable scroll
    const disableScroll = () => {
        document.body.style.overflow = "hidden"; // Disable scrolling
    };

    // Function to enable scroll
    const enableScroll = () => {
        document.body.style.overflow = "auto"; // Enable scrolling
    };

    return (
        <div
            className={styles.fellowshipContainer}
            onClick={handleExploreClick}
            onMouseEnter={!isMobile ? disableScroll : null}
            onMouseLeave={!isMobile ? enableScroll : null}
        >
            <div className={styles.fellowshipText}>
                <div className={styles.fellowshipProgramTitle}>Fellowship Program</div>
                <div className={styles.launchTechCareerText}>Launch Tech Career</div>
            </div>
            <div
                className={styles.hoverBox}
                onMouseEnter={!isMobile ? disableScroll : null}
                onMouseLeave={!isMobile ? enableScroll : null}
            >
                <h4 className={styles.launchCareerhead}>Launch Your Career:</h4>
                <p className={styles.launchCareerpara}>On-Ground Experience, Real-World Skills</p>
                <div className={styles.launchCareerImage}>
                    <Image src={launchCareerImage} alt="Launch Tech Career" width={200} height={150} />
                </div>
                <div className={styles.hoverBoxButtons}>
                    <button>Project-Based Learning</button>
                    <button>In-Person Mentoring</button>
                    <button>Corporate Exposure</button>
                    <button>Assured Internship</button>
                </div>
                <button className={styles.exploreProgramBtn}>Explore the Program</button>
            </div>
        </div>
    );
}
