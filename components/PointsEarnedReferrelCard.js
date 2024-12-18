
import Image from "next/image"
function PointsEarnedReferralCard({ noOfPeople, conditions, para, img }) {
    return (
        <div className="w-full">
            <div className="flex md:flex-col flex-row rounded-[0.375rem] p-3 bg-[#F8FAFC] justify-center items-center gap-[12px]">
                <div className="flex flex-col gap-y-[4px]">
                    <p className="font-gilroymedium text-[0.875rem] leading-4 text-center tracking-wide">
                        {noOfPeople}
                    </p>
                    <p className="font-gilroymedium text-[0.875rem] leading-4 text-center tracking-wide text-nowrap">
                        {conditions}
                    </p>
                </div>
                <div className="flex flex-col items-center gap-y-[4px]">
                    <p className="font-gilroybold text-[12px] leading-[16px] tracking-wide text-[#94A3B8]">
                        {para}
                    </p>
                    <Image src={img} alt='img' />
                </div>
            </div>
        </div>
    )
}
export default PointsEarnedReferralCard;