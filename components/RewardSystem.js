import CardData from "@/constants/RewardSystemData";
import RewardCards from "./RewardSystemCards";
import PointErned from "./PointEarned";
import ReferralLink from "./PointEarnedRefferalLink";

function RewardSystem() {
    return (
        <div className="flex flex-col items-center py-[3.75rem] gap-y-10 bg-[#292C33]">
            <h1 className="text-center text-[3rem] leading-[4rem] tracking-wider text-[#F8FAFC] font-gilroybold">How does it work?</h1>
            <div className="flex flex-row px-16 gap-x-10 justify-center ">
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