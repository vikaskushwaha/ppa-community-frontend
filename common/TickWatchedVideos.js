
import { Videos } from "@/constants/VideoPlayerConstants";
import { Authcontext } from "@/context/UserContext";
import { useContext } from "react";


function TickWatchedVidos() {
    const { user } = useContext(Authcontext)
    const watchedVideos = user.userInfo.ListOfWatchedVideos;
    console.log("watchedVidos", watchedVideos);

    for (let i = 0; i < watchedVideos.length; i++) {
        for (let j = 0; j < Videos.length; j++) {
            if (watchedVideos[j] === Videos[i].id) {
                Videos[j].isWatched = true;
                // console.log(`hello ${Videos[j].isWatched}`)
            }
        }
    }
}



export { Videos };