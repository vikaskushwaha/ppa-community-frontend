import React, { useState } from 'react'
import { Authcontext } from '@/context/UserContext'
import { useContext } from 'react'
import Button from './Button';
import { useGetUserPoints } from '@/hooks/useGetTotalUserPoints';
function SideBar({ Videos, handleCurrentVideo, currentVideo }) {
    const { totalPoints, fetchUsersTotalPoints } = useGetUserPoints();
    const [buttonTxt, setButtonTxt] = useState("Check Points")
    const { user } = useContext(Authcontext)

    async function handleOnclick() {
        await fetchUsersTotalPoints();
        if (totalPoints) {
            setButtonTxt(`Total Points: ${totalPoints.TotalPoints} Points`)
        }

    }

    const no_of_watchedVidos = user?.usersInfo?.ListOfWatchedVideos || [];



    return (
        <div className="w-1/4 bg-[#292C33] rounded-e-[20px] p-4 overflow-y-auto">
            <h2 className="text-lg font-bold mb-4">{!no_of_watchedVidos ? `${0}` : `${no_of_watchedVidos.length}`}/111 Videos</h2>
            <div className="h-2 w-full bg-[#3A3C43] rounded">
                <div className="h-2 bg-[#14171F] rounded" style={{ width: "50%" }}></div>
            </div>
            <div className="space-y-4 mt-[20px]">
                {Videos.map((video, index) => (
                    <div
                        key={video.id}
                        className={`p-3 rounded-lg ${index === currentVideo
                            ? "bg-[#14171F]"
                            : "bg-[#292C33] hover:bg-[#14171F]"
                            } cursor-pointer`}
                        onClick={() => { handleCurrentVideo(index) }}

                    >
                        <div className="flex justify-between items-center">
                            <p className="font-semibold">{video.title}</p>
                            <div
                                className="flex items-center justify-center w-10 h-10 bg-gray-800 rounded-full cursor-pointer transition-all duration-300 hover:scale-105"
                            >
                                {(video.isWatched) ? (
                                    <div className="flex items-center justify-center w-10 h-10 bg-green-500 rounded-full animate-scale-up">
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
                                    <div className="w-10 h-10 border-2 border-dashed border-[#F1F5F9] bg-[#292C33] rounded-full animate-pulse"></div>
                                )}
                            </div>
                        </div>
                        <p className="text-sm">{video.duration}</p>

                        {/* <div className="mt-2">
    {index === currentVideo ? (
      <span className="text-green-400">✓ Watched</span>
    ) : (
      <div className="h-1 w-full bg-gray-600 rounded">
        <div className="h-1 bg-yellow-500 rounded" style={{ width: "50%" }}></div>
      </div>
    )}
  </div> */}
                    </div>
                ))}
            </div>
            <Button
                className="w-full bg-yellow-500 text-black font-semibold py-2 mt-4 rounded hover:bg-yellow-600"
                onClick={handleOnclick}
            >
                {buttonTxt}
            </Button>
        </div>
    )
}

export default SideBar
