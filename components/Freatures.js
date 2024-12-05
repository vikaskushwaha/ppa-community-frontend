
import featuresArr from "@/constants/CommunityBannerFeatures"

function CommunityFeatures() {
    return (
        <div className="flex flex-wrap sm:gap-x-3 sm-gap-y-5 gap-x-2 gap-y-2 flex-wrap max-w-[36.4375rem]">
            {featuresArr.map((ele) => (
                <span className="py-[0.75rem] px-6 bg-[#020617] rounded-[2rem]" >
                    <p className="font-gilroymedium sm:text-[1rem] sm:leading-6 text-[0.75rem] leading-[1rem] -tracking-tight text-white">{ele}</p>
                </span>
            ))}
        </div>

    )
}

export default CommunityFeatures