import PointsEarnedData from "@/constants/PointsEarnedData";
import PointsEarnedCard from "./PointsEarnedCard";
import PointsEarnedReferralCard from "./PointsEarnedReferrelCard";
import ReferredData from "@/constants/ReferralData";
import ReferralLink from "./PointEarnedRefferalLink";

function PointErned() {
    return (
        <div className="bg-[#14171F] py-10 px-5  rounded-[1.25rem]  ">
            <div className="flex flex-col gap-10">
                <h1 className="text-[#F1F5F9] text-center text-[1.5rem] leading-8 font-gilroybold tracking-wide">Activity & Points Earned</h1>
                <div className="flex flex-col gap-y-10 items-center">
                    <div className="flex flex-row ">
                        {PointsEarnedData.map((data, indx) => (
                            <PointsEarnedCard
                                key={indx}
                                index={indx}
                                activity={data.activity}
                                img={data.img}
                            />

                        ))}
                    </div>
                    <div className="flex flex-row gap-x-10 ">
                        {ReferredData.map((data, idx) => (
                            <PointsEarnedReferralCard
                                key={idx}
                                noOfPeople={data.noOfPeple}
                                conditions={data.conditons}
                                img={data.img}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PointErned;