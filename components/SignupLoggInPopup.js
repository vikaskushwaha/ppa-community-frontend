import Image from "next/image";

import popUpImg from '../public/resources/images/loginpopimg.svg'
import Button from "./Button";
import crossImg from '../public/resources/images/crossImg.svg'
import { usePopupToggle } from "@/hooks/usePopupToggle";

function SignUpLoggInPopup({ PopupToggle }) {


    function handleLonginAndSignupButton() {
        PopupToggle(false)
        window.scrollTo({ top: 0, behavior: 'smooth' })

    }

    const handlePopupClick = (e) => {
        e.stopPropagation(); // Prevent the parent click event from being triggered
    };

    return (

        <div className=" flex flex-col  bg-[#3A3C43] rounded-[1.25rem] p-[3.75rem] gap-5 relative h-fit items-center  z-50" onClick={handlePopupClick}>
            <div className="absolute right-5 top-5" onClick={() => PopupToggle(false)}>
                <Image src={crossImg} alt="crossImg" />
            </div>
            <div>
                <Image src={popUpImg} alt="popImg" />
            </div>
            <h1 className="text-center text-[#FFFFFF] font-gilroybold leading-8 text-[1.5rem] tracking-wide ">Please log In/ Sign Up First</h1>
            <div className="flex gap-x-3">
                <Button className="bg-[#F1F5F9]  rounded-[0.625rem] flex py-3 px-8" onClick={handleLonginAndSignupButton}>
                    <p className="text-center text-[#020617] font-gilroybold text-[1rem] leading-6 tracking-wide ">Log In</p>
                </Button>
                <Button className="bg-[#3940A0] rounded-[0.625rem] flex py-3 px-8" onClick={handleLonginAndSignupButton}>
                    <p className="text-center text-[#FFFFFF] font-gilroybold text-[1rem] leading-6 tracking-wide ">Sign Up</p>
                </Button>
            </div>
        </div>
    )
}

export default SignUpLoggInPopup;