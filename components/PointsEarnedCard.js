import Image from "next/image"

function PointsEarnedCard({ index, activity, img }) {
    console.log(activity);
    return (
        <div className="flex ">
            <div className="flex flex-col  rounded-[0.375rem] py-3 px-3 bg-[#3A3C43] items-center justify-center">
                <p className="text-[#F8FAFC] text-[0.875rem] leading-5 tracking-wide font-gilroymedium">{activity}</p>
                {index == 4 ? <Image src={img} alt="img" /> : null}

            </div>
            {
                index == 4 ? null : <div>
                    <Image src={img} alt="img" />
                </div>
            }

        </div>

    )

}

export default PointsEarnedCard;

