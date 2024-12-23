import axiosInstance from "@/services/axiosInstance";
import axios from "axios";

export function useStreakTracker() {

    async function StreakTracker() {


        try {
            const response = await axiosInstance.post("http://localhost:2000/api/videostreak",



            )
            console.log(response.data);
        }
        catch (erro) {
            console.log(erro);

        }


    }
    return { StreakTracker }
}