import {React, useRef} from 'react'
import Image from 'next/image'
import DummyVideoSectionWeb from '../public/resources/images/dummy-video-section-web.svg'
import DummyVideoSectionMobile from '../public/resources/images/dummy-video-section-mobile.svg'
import SignUpLoggInPopup from "./SignupLoggInPopup.js";
import { usePopupToggle } from "@/hooks/usePopupToggle.js";

function DummyVideoSection() {
    const { setToggle, PopupToggle, toggle } = usePopupToggle();
    const VideoSectionRef = useRef(null);

    const handlePopupToggle=()=>{
        VideoSectionRef.current.scrollIntoView({ behaviour: "smooth" });
        PopupToggle(true)
    }

    return (
        <div className='flex justify-center bg-[#14171F] cursor-pointer md:h-dvh' ref={VideoSectionRef}>
            <div className=" flex bg-transparent h-[100vh] w-[100vw] absolute  justify-center items-center "
                onClick={handlePopupToggle}
            >
                {toggle && (<SignUpLoggInPopup PopupToggle={PopupToggle} />)}

            </div>
            <Image className='sm:block hidden' src={DummyVideoSectionWeb} alt='dummy-video-section-web' />
            <Image className='sm:hidden block' src={DummyVideoSectionMobile} alt='dummy-video-section-mobile' />
        </div>
    )
}

export default DummyVideoSection
