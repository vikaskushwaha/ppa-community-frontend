import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import DehazeIcon from "@mui/icons-material/Dehaze";
import logo from "./../../public/resources/images/PpaLogo.svg";
import Link from "next/link";
import Image from "next/image";
import closeDrawer from "../../public/resources/images/close.svg";
import HeaderCoursesDropDown from "../HeaderCoursesDropDown/HeaderCoursesDropDown";
import RenaissanceHoverBox from "../Renaissance/RenaissanceHoverBox";
import CertificationHoverBox from "../CourseCertification/CertificationHoverBox";
import FreeLearningHoverBox from "../HeaderResources/FreeLearningHoverBox";

export default function TemporaryDrawer() {
    const [isOpen, setIsOpen] = useState(false);
    const [state, setState] = React.useState({
        left: false,
    });


    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
            return;
        }
        setIsOpen(open);
        setState({ ...state, [anchor]: open });
    };

    const NavigationList = (anchor) => (
        <Box
            sx={{
                background: "#FFFFFF",
                width: anchor === "top" || anchor === "bottom" ? "auto" : 325,
            }}
            role="presentation"
            onClick={toggleDrawer(anchor, true)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <div className="side-nagivation-list-mob">
                <HeaderCoursesDropDown isMobile={true}/>
                <RenaissanceHoverBox isMobile={true}/>
                <CertificationHoverBox isMobileCerti={true}/>
                <FreeLearningHoverBox isMobileFree={true}/>
            </div>
            {/* <div className="side-nagivation-login-trail-btn">{getButtons()}</div> */}
            <div className="w-[full] text-center mt-[32px] pl-[20px]">
                <button className="text-[#1F2358] text-[16px] leading-[24px] tracking-wide font-gilroybold w-[100%] rounded-[10px] bg-[#F2F4FC] py-[12px]">Log Out</button>
            </div>
        </Box>
    );

    return (
        <div>
            {["left"].map((anchor, index) => (
                <React.Fragment key={index}>
                    <Button onClick={toggleDrawer(anchor, true)}>
                        <DehazeIcon sx={{ color: "#333" }} />
                    </Button>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        <div className="side-navigation-header-wrapper">
                            <Link href="/#">
                                <Image
                                    className={"ppa-logo-mob"}
                                    width={200}
                                    height={35}
                                    src={logo}
                                    alt="PPA-logo"
                                    priority
                                    quality={70}
                                />
                            </Link>
                            <Button onClick={toggleDrawer(anchor, false)}>
                                <Image src={closeDrawer} height={35} alt="close-drawer" />
                            </Button>
                        </div>
                        {NavigationList(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}
