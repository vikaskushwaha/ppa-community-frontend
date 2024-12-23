import axiosInstance from "@/services/axiosInstance";
import axios from "axios";
import { useEffect, useState } from "react";

export function usePostWatchedVideos() {


    async function postWatchedVideo(videoId) {
        if (videoId) {
            console.log("VideoId form postWatched", videoId);

            const response = await axiosInstance.post("http://localhost:2000/api/videoWatched",
                { videoId }

            )
            console.log("video has been sent", videoId);

        }

    }

    return { postWatchedVideo };
}