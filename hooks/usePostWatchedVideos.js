import axios from "axios";
import { useEffect, useState } from "react";

export function usePostWatchedVideos() {
    async function postWatchedVideo(videoId) {
        if (videoId) {
            console.log("VideoId form postWatched", videoId);

            const response = await axios.post("http://localhost:2000/api/videoWatched",
                { videoId },
                { withCredentials: true }

            )
        }

    }

    return { postWatchedVideo };
}