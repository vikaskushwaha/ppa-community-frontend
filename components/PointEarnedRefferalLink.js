import Button from "./Button";
import { Authcontext } from "@/context/UserContext";
import { CopyToClipBoard } from "@/hooks/CopyToClipboard";
import { useContext, useRef } from "react";


function ReferralLink() {
    const { user } = useContext(Authcontext)
    const textRef = useRef(null);
    return (
        <div className="">
            <h2 className="text-[1.25rem] font-gilroybold leading-[1.75rem] tracking-wide text-[#F8FAFC]">
                Your Referral Link
            </h2>
            <div className=" flex  rounded-[1rem] p-2 gap-[0.4375rem] bg-[#E1E7F8]">
                <input
                    value={user ? `${user.message.ShortenedLink}` : "programming.com"}
                    disabled
                    className="bg-[#FFFF] py-3 px-6 w-[25rem]"
                    ref={textRef}
                />
                <Button
                    onClick={() => CopyToClipBoard(textRef)}
                    className="bg-[#7997E1] py-3 px-6 rounded-xl"

                >

                    <p className="text-[1rem] leading-6 tracking-wide text-[#FFFFFF] font-gilroybold">
                        Copy Referral Link
                    </p>
                </Button>
            </div>
        </div >
    )
}
export default ReferralLink;