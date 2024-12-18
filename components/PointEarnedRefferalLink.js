import Button from "./Button";
import { Authcontext } from "@/context/UserContext";
import { CopyToClipBoard } from "@/hooks/CopyToClipboard";
import { useContext, useRef } from "react";


function ReferralLink() {
    const { user } = useContext(Authcontext)
    const textRef = useRef(null);
    return (
        <div className="flex flex-col justify-center md:items-start items-center gap-y-[12px]">
            <h2 className="text-[1.25rem] mb-[8px] font-gilroybold leading-[1.75rem] tracking-wide text-[#F8FAFC]">
                Your Referral Link
            </h2>
            <div className=" flex  rounded-[1rem] p-2 gap-[0.4375rem] bg-[#E1E7F8]">
                <input
                    value={user?.usersInfo?.ShortenedLink || "programming.com"}
                    disabled
                    className="bg-[#FFFF] py-3 px-6 md:w-[25rem] w-[20.55rem] rounded-[12px]"
                    ref={textRef}
                />
                <Button
                    onClick={() => CopyToClipBoard(textRef)}
                    className="bg-[#3940A0] hover:bg-[#7997E1] py-3 px-6 rounded-xl md:block hidden"

                >

                    <p className="text-[1rem] leading-6 tracking-wide text-[#FFFFFF] font-gilroybold">
                        Copy Referral Link
                    </p>
                </Button>
            </div>
            <Button
                onClick={() => CopyToClipBoard(textRef)}
                className="bg-[#3940A0] hover:bg-[#7997E1] py-3 px-6 rounded-xl md:hidden block"

            >

                <p className="text-[1rem] leading-6 tracking-wide text-[#FFFFFF] font-gilroybold">
                    Copy Referral Link
                </p>
            </Button>
        </div >
    )
}
export default ReferralLink;