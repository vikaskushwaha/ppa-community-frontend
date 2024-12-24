
import axiosInstance from "@/services/axiosInstance";
import axios from "axios";
import { useContext, useEffect, useState } from "react";


export function useGetUserPoints() {
    const [totalPoints, setTotalPoints] = useState(0);
    async function fetchUsersTotalPoints() {
        const response = await axiosInstance.get("/api/getuserpoints")
        if (response.data) {
            setTotalPoints(response.data);
        }

    }
    return { totalPoints, fetchUsersTotalPoints };
}




