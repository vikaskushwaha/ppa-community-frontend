import CardData from "@/constants/RewardSystemData";
import RewardCards from "./RewardSystemCards";
import PointErned from "./PointEarned";
import ReferralLink from "./PointEarnedRefferalLink";

function RewardSystem() {
    return (
        <div className="flex flex-col items-center md:py-[3.75rem] py-[3.33rem] gap-y-10 bg-[#292C33]">
            <h1 className="text-center md:text-[3rem] md:leading-[4rem] text-[1.5rem] leading-[2rem] tracking-wider text-[#F8FAFC] font-gilroybold">How does it work?</h1>
            <div className="flex md:flex-row flex-col md:px-16 px-5 gap-10 justify-center ">
                {CardData.map((card, indx) => (
                    <RewardCards
                        key={indx}
                        steps1={card.steps}
                        img={card.img}
                        instructions={card.instructions}
                    />
                ))}
            </div>
            <PointErned />
            <ReferralLink />

        </div>

    )
}

export default RewardSystem;