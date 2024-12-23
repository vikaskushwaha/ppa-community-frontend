import { React, useState, useEffect } from 'react'
import { Authcontext } from '@/context/UserContext'
import { useContext } from 'react'
import Button from './Button';
import { useGetUserPoints } from '@/hooks/useGetTotalUserPoints'
import { MdClose } from "react-icons/md";

function SideBar({ Videos, handleCurrentVideo, currentVideo, isOpenSlider, handleSliderMenu }) {
    const { totalPoints, fetchUsersTotalPoints } = useGetUserPoints();
    const [buttonTxt, setButtonTxt] = useState("Check Points")
    const { user } = useContext(Authcontext)

    async function handleOnclick() {
        await fetchUsersTotalPoints();
    }
    // console.log(Videos)
    useEffect(() => {
        if (totalPoints) {
            setButtonTxt(`Total Points: ${totalPoints.TotalPoints} Points`)
        }

    }, [totalPoints])

    const no_of_watchedVidos = user?.usersInfo?.ListOfWatchedVideos || [];

    const total_watchedVideos_percent = user?.usersInfo?.totalpercent || 0;
    return (
        <div className={`${isOpenSlider ? 'top-0 block h-dvh w-full rounded-e-0' : 'hidden'} md:block w-1/4 h-[100%] bg-[#292C33] md:rounded-e-[20px] p-4 md:relative absolute`} >
            <div className="md:hidden block flex justify-end" onClick={() => { handleSliderMenu(false) }}>
                <MdClose className='text-[24px] mb-[22px]' />
            </div>
            <div className='flex justify-between'>
                <h2 className="text-lg font-gilroybold mb-4 text-[16px] leading-[24px] tracking-wide text-[#ffffff]">{!no_of_watchedVidos ? `${0}` : `${no_of_watchedVidos.length}/111 Videos`}</h2>
                <p className='font-gilroyregular text-[#FFFFFF] text-[14px] leading-[20px] tracking-wide'>{total_watchedVideos_percent}% Completed</p>
            </div>
            <div className="h-2 w-full bg-[#3A3C43] rounded">
                <div className="h-2 bg-[#14171F] rounded" style={{ width: `${total_watchedVideos_percent}%` }}></div>
            </div>
            <div className="space-y-4 mt-[20px] w-full md:h-[75%] h-[68%] pr-[12px] overflow-y-auto scrollbar-custom">
                {Videos.map((video, index) => (
                    <div
                        key={video.id}
                        className={`p-3 rounded-lg ${index === currentVideo
                            ? "bg-[#14171F]"
                            : "bg-[#292C33] hover:bg-[#3A3C43]"
                            } cursor-pointer`}
                        onClick={() => { handleCurrentVideo(index) }}

                    >
                        <div className="flex justify-between items-center">
                            <p className="font-semibold w-10/12 text-[14px] leading-[20px] text-wrap tracking-wide text-[#ffffff]">{video.title}</p>
                            <div
                                className="flex items-center justify-center w-5 h-5 bg-gray-800 rounded-full cursor-pointer transition-all duration-300 hover:scale-105"
                            >
                                {(video.iswatched) ? (
                                    <div className="flex items-center justify-center w-5 h-5 bg-green-500 rounded-full animate-scale-up">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 text-white"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-7.414 7.414a1 1 0 01-1.414 0L3.293 9.707a1 1 0 011.414-1.414L9 12.586l6.293-6.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                ) : (
                                    <div className="w-5 h-5 border-2 border-dashed border-[#F1F5F9] bg-[#292C33] rounded-full animate-pulse"></div>
                                )}
                            </div>
                        </div>
                        <p className="mt-[4px] text-[12px] leading-[12px] font-gilroymedium tracking-wide text-[#CBD5E1]">{video.duration}</p>
                    </div>
                ))}
            </div>
            <Button
                className="absolute bottom-[3%] left-[5%] w-[90%] bg-[#FBBF24] text-[#020617] font-semibold text-[16px] leading-[24px] py-3 mt-4 rounded-[12px] hover:bg-yellow-600"
                onClick={handleOnclick}
            >
                {buttonTxt}
            </Button>
        </div>
    )
}

export default SideBar