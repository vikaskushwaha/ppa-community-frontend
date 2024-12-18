'use client'
import React, { useState } from "react";
import Image from "next/image"; 
import styles from "./certification.module.css"; 
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { courses } from "../../constants/HeaderConstants";

export default function CertificationHoverBox({isMobileCerti=false}) {
    const [hoveredBlock, setHoveredBlock] = useState(null);
    const [open,isOpen]=useState(false);

    // Function to disable scroll
    const disableScroll = () => {
        document.body.style.overflow = 'hidden'; // Disable scrolling
    };

    // Function to enable scroll
    const enableScroll = () => {
        document.body.style.overflow = 'auto'; // Enable scrolling
    };

    const arrowStyle = {
        transition: "transform 0.3s ease",
        transformOrigin: "center",
        transform: open ? "rotate(180deg)" : "rotate(90deg)",
    };

    return (
        <div className={styles.certificationContainer}
            onClick={isMobileCerti ? ()=>{isOpen(prevState => !prevState)} : null}
            onMouseEnter={!isMobileCerti ? disableScroll : null}
            onMouseLeave={!isMobileCerti ? enableScroll : null}
        >
        <div className={styles.certificationText}>
            <div className={styles.certificationDiv}>
                <div>
                    <div className={styles.certificationCoursesTitle}>Certification Courses</div>
                    <div className={styles.skillsLink}>In-Demand Skills</div>
                </div>
                <KeyboardArrowUpIcon className={!isMobileCerti ? styles.arrowKeyStyle : null} style={isMobileCerti ? arrowStyle : null}/>
            </div>
        </div>
            <div
                className={`${styles.hoverBox} ${open ? styles.hoverBoxOpen : ''}`}
                onMouseEnter={!isMobileCerti ? disableScroll : null}
                onMouseLeave={!isMobileCerti ? enableScroll : null}
            >
                {/* Doubt Resolution Heading */}
                <div className={styles.doubtHeading}>
                    <p>Doubt resolution included in all the Certifications</p>
                </div>

                <div className={styles.courseItemContainer}>
                    {courses.map((course) => (
                        <div
                            key={course.id}
                            className={`${styles.courseItem} ${hoveredBlock === course.id ? styles.hovered : ""}`}
                            onClick={() =>
                                window.open(`${course.link}`,"_blank")
                            }
                            onMouseEnter={!isMobileCerti ? () => setHoveredBlock(course.id) : null}
                            onMouseLeave={!isMobileCerti ? () => setHoveredBlock(null) : null}
                        >
                            <Image src={course.icon} alt={course.name} width={40} height={40} className={styles.icon} />
                            <p className={styles.coursepara}>{course.name}</p>

                            {/* Small info box */}
        {hoveredBlock === course.id && (
            <div className={styles.additionalInfo}>
                <span className={styles.infoDetail}>{course.duration}  |</span>
                <span className={styles.infoDetail}>{course.lectures}  |</span>
                <span className={styles.infoDetail}>{course.caseStudies}</span>
            </div>
        )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}