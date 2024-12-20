import { Authcontext } from "@/context/UserContext";
import { useContext, useEffect, useState } from "react";


export function useVideo() {

    const { user } = useContext(Authcontext)



    const [videosFromLocalStorage, setVideosFromLocalStorage] = useState([]);

    console.log("hixyz");

    useEffect(() => {

        const LocalStorageVideo = localStorage.getItem("dsaPlayList");
        // console.log("form localStorage", LocalStorageVideo);

        let Videos;
        if (LocalStorageVideo) {
            Videos = JSON.parse(LocalStorageVideo)
            // console.log("form useVideo", Videos.data);

            setVideosFromLocalStorage((JSON.parse(LocalStorageVideo)).data)
            console.log("useVido", Array.isArray(Videos.data));

        }




    }, [])

    return videosFromLocalStorage;

}



