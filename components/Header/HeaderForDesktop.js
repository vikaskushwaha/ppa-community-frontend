import React, { useContext } from 'react'
import Link from "next/link";
import Image from 'next/image';
import logo from "../../public/resources/images/PpaLogo.svg";
import NavLinks from './NavLinks';
import { Authcontext } from '@/context/UserContext';

function HeaderForDesktop() {
  const { isLoggedIn, logOut } = useContext(Authcontext)

  async function handleLogOut() {
    await logOut();
  }

  return (
    <div className="header-links">
      <div className="ppa-logo-container">
        <Link href="/">
          <Image className={"ppa-header-logo"} src={logo} alt="ppa-header-logo" />
        </Link>
      </div>
      <NavLinks />
      {isLoggedIn && (
        <div>
          <button className="text-[#3940A0] text-[16px] leading-[24px] tracking-wide font-gilroybold w-[134px] rounded-[10px] bg-[#F2F4FC] py-[12px]" onClick={handleLogOut}>Log Out</button>
        </div>
      )}
    </div>
  )
}

export default HeaderForDesktop
