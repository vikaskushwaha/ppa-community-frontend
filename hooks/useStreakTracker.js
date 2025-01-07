import axiosInstance from "@/services/axiosInstance";
import axios from "axios";

export function useStreakTracker() {

    async function StreakTracker() {


        try {
            const response = await axiosInstance.post("/api/videostreak")
            console.log(response.data);
        }
        catch (error) {
            console.log(error);

        }


    }
    return { StreakTracker }
}