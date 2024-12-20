'use client'
import { FaChevronRight } from "react-icons/fa";
import { useState, useEffect, useRef, useContext } from "react";
import VideoPlayer from "./VideoPlayer.js";
import { FaArrowLeft } from 'react-icons/fa';
import { RiMenuUnfold3Line } from "react-icons/ri";
import { FaChevronLeft } from "react-icons/fa";
import { useVideo } from "@/hooks/useVideo.js";
import SideBar from "./SideBar.js";
import { usePostWatchedVideos } from "@/hooks/usePostWatchedVideos.js";
import { Authcontext } from "@/context/UserContext.js";
import { useStreakTracker } from "@/hooks/useStreakTracker.js";
import SignUpLoggInPopup from "./SignupLoggInPopup.js";
import { usePopupToggle } from "@/hooks/usePopupToggle.js";

const VideoSection = () => {
    const Videos = useVideo();
    const { setWatchedVidoId, isLoggedIn, user } = useContext(Authcontext)
    const { postWatchedVideo } = usePostWatchedVideos();
    const { StreakTracker } = useStreakTracker();
    const [videos, setVideos] = useState([]);
    const [currentVideo, setCurrentVideo] = useState(0);
    const { setToggle, PopupToggle, toggle } = usePopupToggle();
    const [videoId, setVideoId] = useState(null);
    const [isOpenSlider, setIsOpenSlider] = useState(false);
    const videoSectionRef = useRef(null);

    useEffect(() => {      // this is because it might be the case that videos are not getting fetched 
        if (Videos && Videos.length > 0) {
            setVideos(Videos);
            setVideoId(Videos[0].videoid);
            console.log("usevido id", Videos)
            if (user) {
                const watchedVideos = user?.usersInfo?.ListOfWatchedVideos;
                let newVideos = [...Videos]
                for (let i = 0; i < watchedVideos.length; i++) {
                    console.log("useVido", watchedVideos[i]);

                    const currentIndex = Videos.findIndex((value, index, Videos) => value.videoid === watchedVideos[i])
                    console.log("useVido", currentIndex);

                    const updatedVidoes = {
                        ...Videos[currentIndex],
                        iswatched: true
                    }
                    newVideos = [...Videos]
                    // console.log("usevidoNewfull", newVideos);

                    newVideos[currentIndex].iswatched = true
                    // console.log("usevidoNew", newVideos[currentIndex]);

                }
                setVideos(newVideos)
                if (videos.length > 0) {
                    console.log("useVido", videos);

                }

            }

        }
    }, [Videos, user]);


    const handleCurrentVideo = (index) => {
        setCurrentVideo(index);
        setVideoId(videos[index].videoid);

    }

    const handleThresholdReached = async (VideoData) => {
        // console.log("fromThresHold", Videos[currentVideo].isWatched);
        // Videos[currentVideo].isWatched = true;

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
            setVideoId(videos[nextVideoIndex].videoid); // Update videoId immediately
        }
    };

    const handlePrev = () => {
        if (currentVideo > 0) {
            const prevVideoIndex = currentVideo - 1; // Calculate the previous video index
            setCurrentVideo(prevVideoIndex); // Update current video index
            setVideoId(videos[prevVideoIndex].videoid); // Update videoId immediately
        }
    };

    const handleSliderMenu = (isTrue) => {
        navigateToVideoSection();
        setIsOpenSlider(isTrue);
        document.body.style.overflow = isTrue ? 'hidden' : 'auto';
    }

    const navigateToVideoSection = () => {
        videoSectionRef.current.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="flex md:h-screen bg-[#14171F] py-[20px] text-white relative" ref={videoSectionRef}>
            {/* {!isLoggedIn && (
                <div className=" flex bg-transparent h-[100vh] w-[100vw] absolute  justify-center items-center "
                    onClick={() => PopupToggle(true)}
                >
                    {toggle && (<SignUpLoggInPopup PopupToggle={PopupToggle} />)}

                </div>
            )} */}
            {/* Sidebar */}
            <SideBar Videos={Videos} handleCurrentVideo={handleCurrentVideo} currentVideo={currentVideo} isOpenSlider={isOpenSlider} handleSliderMenu={handleSliderMenu} />
            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Header */}
                <div className="bg-[#14171F]">
                    <div className="flex justify-between items-center p-4 md:h-auto h-[92px]">
                        <div className="flex gap-[12px]">
                            <button onClick={() => { handleSliderMenu(true) }} className="md:hidden inline-block"><RiMenuUnfold3Line size={24} color="white" /></button>
                            <h2 className="md:w-auto w-[80%] md:text-xl font-gilroybold text-[#F8FAFC] md:text-[18px] md:leading-[32px] text-[16px] leading-[20px]">{Videos[currentVideo]?.title}</h2>
                        </div>
                        <div className="flex gap-[20px]">
                            <button onClick={handlePrev} className="md:hidden inline-block"><FaChevronLeft className="text-[24px] text-[#FBBF24]" /></button>
                            <button onClick={handleNext} className="flex items-center justify-center gap-[4px] md:bg-[#FBBF24] bg-transparent w-fit md:px-9 md:py-3 rounded-[10px] text-[#020617] text-[16px] leading-[24px] font-gilroysemibold md:hover:bg-yellow-600">
                                <span className="md:block hidden text-[#020617] text-[16px] leading-[24px] tracking-wide font-gilroysemibold text-nowrap">Next Video</span>
                                <span><FaChevronRight className="md:text-[16px] text-[24px] md:text-[#020617] text-[#FBBF24]" /></span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Video Player */}
                <div className="md:flex-1 sm:h-[350px] h-[240px] flex items-center justify-center bg-[#14171F] rounded-[20px] pt-[12px] pr-[12px] pl-[20px]">
                    <div className="w-[100%] h-[100%] bg-gray-700 flex items-center justify-center rounded-[20px] border border-[#94A3B8]">
                        <VideoPlayer videoId={videoId} onThresholdReached={handleThresholdReached} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoSection;


