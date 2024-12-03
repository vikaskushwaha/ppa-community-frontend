
import featuresArr from "@/constants/CommunityBannerFeatures"

function CommunityFeatures() {
    return (
        <div className="flex flex-row gap-x-3 gap-y-5 flex-wrap max-w-[36.4375rem]">
            {featuresArr.map((ele) => (
                <span className="py-[0.75rem] px-6 bg-[#020617] rounded-[2rem]" >
                    <p className="font-gilroymedium text-[1rem] leading-6 -tracking-tight text-white">{ele}</p>
                </span>
            ))}
        </div>

    )
}

export default CommunityFeatures