'use client'
import { useState } from "react";
import VideoPlayer from "./VideoPlayer.js";
import { FaArrowLeft } from 'react-icons/fa';
import {Videos} from '../constants/VideoPlayerConstants'
import SideBar from "./SideBar.js";

const VideoSection = () => {
    const [currentVideo, setCurrentVideo] = useState(0);
    const [videoId, setVideoId] = useState(Videos[currentVideo].videoId);
    // const [isChecked, setIsChecked] = useState(false);

    const handleCurrentVideo = (index) => {
        setCurrentVideo(index);
        setVideoId(Videos[index].videoId);
        console.log(index);
    }

    const handleThresholdReached = () => {
        // setIsChecked(!isChecked);
        Videos[currentVideo].isWatched=true;
        console.log("User watched 20% of the video.");
    };

    return (
        <div className="flex h-screen bg-[#14171F] py-[20px] text-white">
            {/* Sidebar */}
            <SideBar Videos={Videos} handleCurrentVideo={handleCurrentVideo} currentVideo={currentVideo}/>
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
                        <VideoPlayer videoId={videoId} onThresholdReached={handleThresholdReached} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoSection;
