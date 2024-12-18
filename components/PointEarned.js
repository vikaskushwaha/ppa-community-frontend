import PointsEarnedData from "@/constants/PointsEarnedData";
import PointsEarnedCard from "./PointsEarnedCard";
import PointsEarnedReferralCard from "./PointsEarnedReferrelCard";
import ReferredData from "@/constants/ReferralData";
import ReferralLink from "./PointEarnedRefferalLink";
import Image from "next/image";

function PointErned() {
    return (
        <div className="md:bg-[#14171F] py-10 px-5  rounded-[1.25rem]  ">
            <div className="flex flex-col gap-10">
                <h1 className="text-[#F1F5F9] text-center text-[1.5rem] leading-8 font-gilroybold tracking-wide">Activity & Points Earned</h1>
                <div className="flex flex-col gap-y-10 items-center">
                    <div className="md:flex flex-row hidden">
                        {PointsEarnedData.map((data, indx) => (
                            <PointsEarnedCard
                                key={indx}
                                index={indx}
                                activity={data.activity}
                                img={data.img}
                            />

                        ))}
                    </div>
                    <div className="md:hidden block border border-[#E2E8F0] rounded-[6px] w-full">
                        {
                            PointsEarnedData.map((data, idx) => (
                                <div className="flex border-b border-[#E2E8F0]">
                                    <div className="border-r w-[65%] p-3 text-[14px] leading-[20px] tracking-wide text-[#F8FAFC] font-gilroymedium">{data.activity}</div>
                                    <div className="w-[35%] flex justify-center">
                                        <div className="overflow-hidden relative top-[-10px]">
                                            <Image className={`${idx == 4 ? 'hidden' : 'block'} ${((idx == 0)||(idx == 3)) ? 'left-[-20px]':'left-0'} relative top-[22px] h-[44px]`} src={data.img} alt="coin-img" />
                                        </div>
                                        <Image className={`${idx == 4 ? 'block' : 'hidden'} relative top-[10px] left-[-18px] h-[44px]`} src={data.img} alt="coin-img" />
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="flex md:flex-row flex-col md:gap-10 gap-3">
                        {ReferredData.map((data, idx) => (
                            <PointsEarnedReferralCard
                                key={idx}
                                noOfPeople={data.noOfPeple}
                                conditions={data.conditons}
                                para={data.para}
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