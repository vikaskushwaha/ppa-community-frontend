'use client'
import { FaChevronRight } from "react-icons/fa";
import { useState, useEffect, use, useContext } from "react";
import VideoPlayer from "./VideoPlayer.js";
import { FaArrowLeft } from 'react-icons/fa';
import { Videos } from '../constants/VideoPlayerConstants'
import SideBar from "./SideBar.js";
import { usePostWatchedVideos } from "@/hooks/usePostWatchedVideos.js";
import { Authcontext } from "@/context/UserContext.js";
import { useStreakTracker } from "@/hooks/useStreakTracker.js";
import SignUpLoggInPopup from "./SignupLoggInPopup.js";
import { usePopupToggle } from "@/hooks/usePopupToggle.js";

const VideoSection = () => {
    const { setWatchedVidoId, isLoggedIn } = useContext(Authcontext)
    const { postWatchedVideo } = usePostWatchedVideos();
    const { StreakTracker } = useStreakTracker();
    const [videos, setVideos] = useState([...Videos]);
    const [currentVideo, setCurrentVideo] = useState(0);
    const { setToggle, PopupToggle, toggle } = usePopupToggle();
    const [videoId, setVideoId] = useState(Videos[currentVideo].videoId);




    const handleCurrentVideo = (index) => {
        setCurrentVideo(index);
        setVideoId(videos[index].videoId);

    }
    console.log("isloggedIn", isLoggedIn)
    const handleThresholdReached = async (VideoData) => {
        Videos[currentVideo].isWatched = true;


        setVideos((prevVideos) =>
            prevVideos.map((video, i) =>
                i === currentVideo ? { ...video, isWatched: true } : video
            )
        );
        console.log("User watched 20% of the video.");
        await StreakTracker();
        await postWatchedVideo(VideoData)
        setWatchedVidoId(VideoData) // api call for updating the count of watched video in side



    };

    const handleNext = () => {
        if (currentVideo < videos.length - 1) {
            const nextVideoIndex = currentVideo + 1; // Calculate the next video index
            setCurrentVideo(nextVideoIndex); // Update current video index
            setVideoId(videos[nextVideoIndex].videoId); // Update videoId immediately
        }
    };

    const handlePrev = () => {
        if (currentVideo > 0) {
            const prevVideoIndex = currentVideo - 1; // Calculate the previous video index
            setCurrentVideo(prevVideoIndex); // Update current video index
            setVideoId(videos[prevVideoIndex].videoId); // Update videoId immediately
        }
    };

    return (
        <div className="flex h-screen bg-[#14171F] py-[20px] text-white">
            {!isLoggedIn && (
                <div className=" flex bg-transparent h-[100vh] w-[100vw] absolute  justify-center items-center "
                    onClick={() => PopupToggle(true)}
                >
                    {toggle && (<SignUpLoggInPopup PopupToggle={PopupToggle} />)}

                </div>
            )}
            {/* Sidebar */}
            <SideBar Videos={Videos} handleCurrentVideo={handleCurrentVideo} currentVideo={currentVideo} />
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
