
import Image from "next/image"
function PointsEarnedReferralCard({ noOfPeople, conditions, img }) {
    return (
        <div className="flex">
            <div className="flex flex-col rounded-[0.375rem] p-3 bg-[#F8FAFC] items-center">
                <p className="font-gilroymedium text-[0.875rem] leading-4 text-center tracking-wide">
                    {noOfPeople}
                </p>
                <p className="font-gilroymedium text-[0.875rem] leading-4 text-center tracking-wide">
                    {conditions}
                </p>
                <Image src={img} alt='img' />
            </div>
        </div>
    )
}
export default PointsEarnedReferralCard;