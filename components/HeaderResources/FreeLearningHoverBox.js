'use client'
import React, { useState } from "react";
import Image from "next/image";
import youtubeIcon from "../../public/resources/images/youtubeIcon.svg";
import youtubeWhiteIcon from "../../public/resources/images/youtubeWhiteIcon.svg";
import communityIcon from "../../public/resources/images/communityIcon.svg";
import eventsIcon from "../../public/resources/images/eventsIcon.svg";
import blogsIcon from "../../public/resources/images/blogsIcon.svg";
import styles from "./freelearning.module.css";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { NAV_LINK_CONSTANTS } from "../Header/NavLinksContants";

export default function FreeLearningHoverBox({ isMobileFree = false }) {
    const [open, isOpen] = useState(false);
    const arrowStyle = {
        transition: "transform 0.3s ease",
        transformOrigin: "center",
        transform: open ? "rotate(180deg)" : "rotate(90deg)",
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
        <div className={styles.resourcesContainer}>
            <div
                className={styles.resourcesText}
                onClick={
                    isMobileFree
                        ? () => {
                              isOpen((prevState) => !prevState);
                          }
                        : null
                }
                onMouseEnter={!isMobileFree ? disableScroll : null}
                onMouseLeave={!isMobileFree ? enableScroll : null}
            >
                <div className={styles.resourcesDiv}>
                    <div>
                        <div className={styles.resourcesHeading}>Resources</div>
                        <div className={styles.freeLearningLink}>Free Learning</div>
                    </div>
                    <KeyboardArrowUpIcon
                        style={isMobileFree ? arrowStyle : null}
                        className={!isMobileFree && styles.arrowStyle}
                    />
                </div>
            </div>
            <div
                className={`${styles.hoverBox} ${open ? styles.hoverBoxOpen : ""}`}
                onMouseEnter={!isMobileFree ? disableScroll : null}
                onMouseLeave={!isMobileFree ? enableScroll : null}
            >
                <a
                    href={NAV_LINK_CONSTANTS.PROGRAMMING_PATHSHALA_YOUTUBE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.courseItem}
                >
                    <div className={styles.redIcon}>
                        <Image src={youtubeIcon} alt="YouTube Icon" width={40} height={40} />
                    </div>
                    <div className={styles.whiteIcon}>
                        <Image src={youtubeWhiteIcon} alt="YouTube Icon" width={40} height={40} />
                    </div>
                    <div className={styles.textContainer}>
                        <h4>YouTube</h4>
                        <p>Access our high-quality tutorials and courses, all for free.</p>
                    </div>
                </a>

                <a
                    href={NAV_LINK_CONSTANTS.PUBLIC_COMMUNITY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.courseItem}
                >
                    <Image src={communityIcon} alt="Community Icon" className={styles.icon} width={40} height={40} />
                    <div className={styles.textContainer}>
                        <h4>Community</h4>
                        <p>Connect with fellow learners in a supportive environment.</p>
                    </div>
                </a>

                <a
                    href={NAV_LINK_CONSTANTS.PUBLIC_EVENTS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.courseItem}
                >
                    <Image src={eventsIcon} alt="Events Icon" className={styles.icon} width={40} height={40} />
                    <div className={styles.textContainer}>
                        <h4>Events</h4>
                        <p>Join live & recorded sessions with project-based learning.</p>
                    </div>
                </a>

                <a
                    href={NAV_LINK_CONSTANTS.PUBLIC_BLOGS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.courseItem}
                >
                    <Image src={blogsIcon} alt="Blogs Icon" className={styles.icon} width={40} height={40} />
                    <div className={styles.textContainer}>
                        <h4>Blogs</h4>
                        <p>Stay updated with the latest trends and skills in tech.</p>
                    </div>
                </a>
            </div>
        </div>
    );
}
