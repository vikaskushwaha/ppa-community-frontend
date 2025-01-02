'use client'
import { FaChevronRight } from "react-icons/fa";
import { useState, useEffect, useRef, useContext, useCallback} from "react";
import VideoPlayer from "./VideoPlayer.js";
// import { FaArrowLeft } from 'react-icons/fa';
import { RiMenuUnfold3Line } from "react-icons/ri";
import { FaChevronLeft } from "react-icons/fa";
import { useVideo } from "@/hooks/useVideo.js";
import SideBar from "./SideBar.js";
import { usePostWatchedVideos } from "@/hooks/usePostWatchedVideos.js";
import { Authcontext } from "@/context/UserContext.js";
import { useStreakTracker } from "@/hooks/useStreakTracker.js";
import UserBar from "./UserBar.js";
// import SignUpLoggInPopup from "./SignupLoggInPopup.js";
// import { usePopupToggle } from "@/hooks/usePopupToggle.js";

const VideoSection = () => {
    const Videos = useVideo();
    const { setWatchedVidoId, isLoggedIn, user } = useContext(Authcontext);
    // console.log(user)
    const { postWatchedVideo } = usePostWatchedVideos();
    const { StreakTracker } = useStreakTracker();

    const [videos, setVideos] = useState([]);
    const [currentVideo, setCurrentVideo] = useState(0);
    const [videoId, setVideoId] = useState('Hu-EPelY7Yo');
    const [isOpenSlider, setIsOpenSlider] = useState(false);
    const videoSectionRef = useRef(null);

    // Mark videos as watched
    const updateWatchedVideos = useCallback(() => {
        if (Videos?.length > 0 && user?.usersInfo?.ListOfWatchedVideos) {
            const watchedVideos = user.usersInfo.ListOfWatchedVideos;
            const updatedVideos = Videos.map((video) => ({
                ...video,
                iswatched: watchedVideos.includes(video.videoid),
            }));
            setVideos(updatedVideos);
        }
    }, [Videos, user]);

    // Effect for updating videos
    useEffect(() => {
        if (Videos?.length > 0) {
            setVideos(Videos);
            if (user) updateWatchedVideos();
        }
    }, [Videos, user, updateWatchedVideos]);

    // Handle video navigation
    const handleCurrentVideo = useCallback((index) => {
        setCurrentVideo(index);
        setVideoId(videos[index]?.videoid || null);
        setIsOpenSlider(false);
        document.body.style.overflow = 'auto';
    }, [videos]);

    const handleNext = useCallback(() => {
        if (currentVideo < videos.length - 1) {
            handleCurrentVideo(currentVideo + 1);
        }
    }, [currentVideo, videos.length, handleCurrentVideo]);

    const handlePrev = useCallback(() => {
        if (currentVideo > 0) {
            handleCurrentVideo(currentVideo - 1);
        }
    }, [currentVideo, handleCurrentVideo]);

    // Video threshold reached
    const handleThresholdReached = async (VideoData) => {
        console.log("start sending watched video",currentVideo)

        setVideos((prevVideos) =>
            prevVideos.map((video, i) =>
                i === currentVideo ? { ...video, iswatched: true } : video
            )
        );
        await StreakTracker();
        await postWatchedVideo(VideoData);
        console.log("videowatchedSend");
        setWatchedVidoId(VideoData);
    }

    // Slider menu handling
    const handleSliderMenu = useCallback((isTrue) => {
        setIsOpenSlider(isTrue);
        document.body.style.overflow = isTrue ? 'hidden' : 'auto';
        // navigateToVideoSection();
    }, []);

    const navigateToVideoSection = useCallback(() => {
        videoSectionRef.current?.scrollIntoView({ behavior: "smooth" });
    }, []);


    return (
        <div className="bg-[#14171F] text-white relative" ref={videoSectionRef}>
            <UserBar/>
            <div className="flex md:h-screen py-[20px]">
                {/* Sidebar */}
                <SideBar Videos={videos} handleCurrentVideo={handleCurrentVideo} currentVideo={currentVideo} isOpenSlider={isOpenSlider} handleSliderMenu={handleSliderMenu} />
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
        </div>
    );
};

export default VideoSection;


