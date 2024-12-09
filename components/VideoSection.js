'use client'
import { FaChevronRight } from "react-icons/fa";
import { useState, useEffect } from "react";
import VideoPlayer from "./VideoPlayer.js";
import { FaArrowLeft } from 'react-icons/fa';
import {Videos} from '../constants/VideoPlayerConstants'
import SideBar from "./SideBar.js";

const VideoSection = () => {
    const [videos, setVideos] = useState([...Videos]);
    const [currentVideo, setCurrentVideo] = useState(0);
    const [videoId, setVideoId] = useState(Videos[currentVideo].videoId);
    const [watchedCount, setWatchedCount] = useState(0);

    const handleCurrentVideo = (index) => {
        setCurrentVideo(index);
        setVideoId(videos[currentVideo].videoId);
        console.log(index);
    }

    const handleThresholdReached = () => {
        Videos[currentVideo].isWatched=true;
        setVideos((prevVideos) =>
            prevVideos.map((video, i) =>
                i === currentVideo ? { ...video, isWatched: true } : video
            )
        );
        console.log("User watched 20% of the video.");
    };

    const handleNext = () => {
        if (currentVideo < videos.length - 1) {
            setCurrentVideo(currentVideo + 1);
            setVideoId(videos[currentVideo].videoId);
        }
      };
    
      const handlePrev = () => {
        if (currentVideo > 0) {
            setCurrentVideo(currentVideo - 1);
            setVideoId(videos[currentVideo].videoId);
        }
      };

      useEffect(() => {
        const count = videos.filter((video) => video.isWatched).length;
        setWatchedCount(count);
    }, [videos]);

    return (
        <div className="flex h-screen bg-[#14171F] py-[20px] text-white">
            {/* Sidebar */}
            <SideBar Videos={videos} handleCurrentVideo={handleCurrentVideo} currentVideo={currentVideo} watchedCount={watchedCount} />
            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Header */}
                <div className="bg-[#14171F]">
                    <div className="flex justify-between items-center p-4">
                        <div className="flex gap-[20px]">
                            <button onClick={handlePrev} className="inline-block"><FaArrowLeft size={24} color="white" /></button>
                            <h2 className="text-xl font-bold text-[#F8FAFC] text-[18px] leading-[32px]">{Videos[currentVideo].title}</h2>
                        </div>
                        <button onClick={handleNext} className="flex items-center justify-center gap-[4px] bg-[#FBBF24] w-[285px] px-4 py-3 rounded-[10px] text-[#020617] text-[16px] leading-[24px] font-gilroysemibold hover:bg-yellow-600">
                            <span>Complete and Continue</span>
                            <span><FaChevronRight className="w-[24px]" /></span>
                        </button>
                    </div>
                </div>

                {/* Video Player */}
                <div className="flex-1 flex items-center justify-center bg-[#14171F] rounded-[20px] pt-[12px] pr-[12px] pl-[20px]">
                    <div className="w-[100%] h-[100%] bg-gray-700 flex items-center justify-center rounded-[20px] border border-[#94A3B8]">
                        <VideoPlayer videoId={videoId} onThresholdReached={handleThresholdReached} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoSection;
