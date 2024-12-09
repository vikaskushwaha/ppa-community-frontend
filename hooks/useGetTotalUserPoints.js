import axios from "axios";
import { useEffect, useState } from "react";


export function useGetUserPoints() {
    const [totalPoints, setTotalPoints] = useState(0);
    async function fetchUsersTotalPoints() {
        console.log("totalPointsbutton clicked");

        const totalPoints = await axios("http://localhost:2000/api/getuserpoints", {
            withCredentials: true,
        })


        if (totalPoints.data) {

            setTotalPoints(totalPoints.data);

        }

    }
    return { totalPoints, fetchUsersTotalPoints };
}