import React from 'react'
import Link from "next/link";
import Image from 'next/image';
import logo from "../../public/resources/images/PpaLogo.svg";
import NavLinks from './NavLinks';

function HeaderForDesktop() {
  return (
    <div className="header-links">
        <div className="ppa-logo-container">
            <Link href="/">
                <Image className={"ppa-header-logo"} src={logo} alt="ppa-header-logo" />
            </Link>
        </div>
        <NavLinks/>
        <div>
            <button className="text-[#1F2358] text-[16px] leading-[24px] tracking-wide font-gilroybold w-[134px] rounded-[10px] bg-[#F2F4FC] py-[12px]">Log Out</button>
        </div>
    </div>
  )
}

export default HeaderForDesktop
