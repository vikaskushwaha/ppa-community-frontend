'use client'
import axios from "axios";
import { useContext, createContext, useState, useEffect, Children } from "react";
export const Authcontext = createContext();

export function UserProvider({ children }) {
    const [user, setUser] = useState(null);
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [watchedVideoId, setWatchedVidoId] = useState(null)
    useEffect(() => {
        if (isLoggedIn) {
            fetchUserDetails();
        }

    }, [watchedVideoId])

    async function fetchUserDetails() {
        try {

            const response = await axios.get("http://localhost:2000/api/welcome", {
                withCredentials: true,
            })
            console.log("listOfWatchtd", response.data.usersInfo.ListOfWatchedVideos);

            if (response.data) {
                setUser(response.data)
                setLoggedIn(true);
            }
        } catch (error) {
            console.log(error);
            setUser(null)
            setLoggedIn(false);
        }
    }

    async function signUp(name, email, phone) {
        try {
            const response = await axios.post("http://localhost:2000/auth/signup",
                { name, email, phone },
                { withCredentials: true },


            );
            fetchUserDetails()

        } catch (error) {
            setUser(null)
            setLoggedIn(false);
        }
    }
    async function logIn(email) {
        try {
            const response = await axios.post("http://localhost:2000/auth/login",
                { email },
                { withCredentials: true },
            );

            fetchUserDetails()

        } catch (error) {
            setUser(null)
            setLoggedIn(false);
        }
    }


    return (
        <Authcontext.Provider value={{ user, setUser, isLoggedIn, setLoggedIn, signUp, logIn, setWatchedVidoId }}>
            {children}
        </Authcontext.Provider>
    )
}






