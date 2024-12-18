import React from "react";
import HeaderCoursesDropDown from "../HeaderCoursesDropDown/HeaderCoursesDropDown";
import RenaissanceHoverBox from "../Renaissance/RenaissanceHoverBox";
import CertificationHoverBox from "../CourseCertification/CertificationHoverBox";
import FreeLearningHoverBox from "../HeaderResources/FreeLearningHoverBox";

const NavLinks = () => {

    return (
        <div className="header-nav-links-container new-header-nav-links-container">
            <HeaderCoursesDropDown className="new-header-nav-link"/>
            <RenaissanceHoverBox className="new-header-nav-link"/>
            <CertificationHoverBox className="new-header-nav-link"/>
            <FreeLearningHoverBox className="new-header-nav-link"/>
            <div className="nav-backdrop">
            </div>
        </div>
    );
};

export default NavLinks;
