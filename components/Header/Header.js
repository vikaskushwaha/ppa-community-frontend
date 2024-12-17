'use client'
import React from "react";
import logo from "../../public/resources/images/PpaLogo.svg";
import HeaderForMob  from "./HeaderForMob";
import Link from "next/link";
import Image from "next/image";
import { useMediaQuery } from "./useMediaQuery";
import HeaderForDesktop from "./HeaderForDesktop";
const Header = () => {
    const mobileView = useMediaQuery(600);

    return (
        <div className=" header-container">
            {mobileView ? <HeaderForMob /> : <HeaderForDesktop/>}

            {mobileView ? (
                <>
                    <div className="ppa-header-logo-wrapper">
                        <Link href="/">
                            <Image
                                className="ppa-logo"
                                priority
                                quality={50}
                                src={logo}
                                alt="ppa-logo"
                                width={220}
                                height={35}
                            />
                        </Link>
                    </div>
                </>
            ) : null}
        </div>
    );
};

export default Header;
