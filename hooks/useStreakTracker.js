import axios from "axios";

export function useStreakTracker() {

    async function StreakTracker() {


        try {
            const response = await axios.post("http://localhost:2000/api/videostreak",
                {},
                { withCredentials: true },

            )
            console.log(response.data);
        }
        catch (erro) {
            console.log(erro);

        }


    }
    return { StreakTracker }
}