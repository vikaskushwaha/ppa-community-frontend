
import Image from "next/image"


function RewardCards({ steps1, img, instructions }) {
    return (
        <div className="flex flex-col rounded-[1.25rem] p-5 gap-y-5 bg-[#14171F]">
            <span className="py-2 px-8 bg-[#ECFDF5] text-[#059669] font-gilroybold text-[1rem] leading-6 text-center tracking-wide w-fit rounded-[0.375rem]">
                {steps1}
            </span>
            <div className="flex flex-col gap-y-5">
                <Image src={img} alt="img" />
                <p className="text-[1rem] leading-5 text-center tracking-wide font-gilroysemibold text-[#ECFDF5]">{instructions}</p>
            </div>

        </div>
    )
}

export default RewardCards;