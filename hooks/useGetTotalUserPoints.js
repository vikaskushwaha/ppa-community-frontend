import axios from "axios";
import { useEffect, useState } from "react";


export function useGetUserPoints() {
    const [totalPoints, setTotalPoints] = useState(0);
    async function fetchUsersTotalPoints() {


        const response = await axios("http://localhost:2000/api/getuserpoints", {
            withCredentials: true,
        })

        if (response.data) {
            setTotalPoints(response.data);
        }

    }
    return { totalPoints, fetchUsersTotalPoints };
}