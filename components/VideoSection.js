'use client'
import { useState } from "react";
import VideoPlayer from "./VideoPlayer.js";
import { FaArrowLeft } from 'react-icons/fa';
import {Videos} from '../constants/VideoPlayerConstants'

const VideoSection = () => {
    const [currentVideo, setCurrentVideo] = useState(0);
    const [isChecked, setIsChecked] = useState(false);
    const handleClick = () => {
        setIsChecked(!isChecked);
    };
    // console.log(VideoPlayerConstants);
    // const videoList = [
    //     { id: 1, title: "Marvolo Gaunt's Ring Part-1", duration: "16 mins" },
    //     { id: 2, title: "Marvolo Gaunt's Ring Part-2", duration: "16 mins" },
    //     { id: 3, title: "Marvolo Gaunt's Ring Part-3", duration: "16 mins" },
    //     { id: 4, title: "Marvolo Gaunt's Ring Part-4", duration: "16 mins" },
    // ];

    return (
        <div className="flex h-screen bg-[#14171F] py-[20px] text-white">
            {/* Sidebar */}
            <div className="w-1/4 bg-[#292C33] rounded-e-[20px] p-4 overflow-y-auto">
                <h2 className="text-lg font-bold mb-4">25/100 Videos</h2>
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
                            onClick={() => setCurrentVideo(index)}
                            
                        >
                            <div className="flex justify-between items-center">
                                <p className="font-semibold">{video.title}</p>
                                <div
                                    onClick={handleClick}
                                    className="flex items-center justify-center w-10 h-10 bg-gray-800 rounded-full cursor-pointer transition-all duration-300 hover:scale-105"
                                >
                                    {isChecked ? (
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
                <button className="w-full bg-yellow-500 text-black font-semibold py-2 mt-4 rounded hover:bg-yellow-600">
                    Check Points
                </button>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Header */}
                <div className="bg-[#14171F]">
                    <div className="flex justify-between items-center p-4">
                        <div className="flex gap-[20px]">
                            <button className="inline-block"><FaArrowLeft size={24} color="white" /></button>
                            <h2 className="text-xl font-semibold">{Videos[currentVideo].title}</h2>
                        </div>
                        <button className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-600">
                            Complete and Continue
                        </button>
                    </div>
                </div>

                {/* Video Player */}
                <div className="flex-1 flex items-center justify-center bg-[#14171F] rounded-[20px] p-[12px]">
                    <div className="w-[100%] h-[100%] bg-gray-700 flex items-center justify-center rounded-[20px]">
                        <VideoPlayer videoId={Videos[currentVideo].videoId} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoSection;
