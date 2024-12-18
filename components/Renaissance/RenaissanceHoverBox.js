import React, { useState } from "react";
import Image from "next/image";
import interviewPrepImage from "../../public/resources/images/renaissance.svg"; // Update the path
import styles from "./renaissance.module.css"; // Create a new CSS module for Renaissance
import { NAV_LINK_CONSTANTS } from "../Header/NavLinksContants";

export default function RenaissanceHoverBox({ isMobile = false }) {
    const handleExploreClick = () => {
        window.open(NAV_LINK_CONSTANTS.RENAISSANCE_COURSE_URL, "_blank");
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
            className={styles.renaissanceContainer}
            onClick={handleExploreClick}
            onMouseEnter={!isMobile ? disableScroll : null}
            onMouseLeave={!isMobile ? enableScroll : null}
        >
            <div className={styles.renaissanceText}>
                <div className={styles.renaissanceProgramTitle}>Renaissance</div>
                <div className={styles.interviewPrepLink}>Interview Preparation</div>
            </div>
            <div
                className={styles.hoverBox}
                onMouseEnter={!isMobile ? disableScroll : null}
                onMouseLeave={!isMobile ? enableScroll : null}
            >
                <h4 className={styles.interviewhead}>Ace Coding Interview:</h4>
                <p className={styles.interviewpara}>Crack Top Tech Firms and Startups</p>
                <div className={styles.interviewImg}>
                    <Image src={interviewPrepImage} alt="Ace Coding Interview" width={180} height={130} />
                </div>
                <div className={styles.hoverBoxButtons}>
                    <div className={styles.buttonDivOne}>
                        <button>All-in-One Learning</button>
                        <button>Personalized Mentoring</button>
                    </div>
                    <div className={styles.buttonDivTwo}>
                        <button>Mock Interviews</button>
                        <button>Self Paced</button>
                    </div>
                </div>
                <button className={styles.exploreProgramBtn}>Explore the Program</button>
            </div>
        </div>
    );
}
