'use client'
import axios from "axios";
import { useContext, createContext, useState, useEffect, Children } from "react";
export const Authcontext = createContext();
export function UserProvider({ children }) {
    const [user, setUser] = useState(null);
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [watchedVideoId, setWatchedVidoId] = useState(null)
    const [loginError, SetLoginError] = useState();
    const [signUpError, setSignUpError] = useState();
    const [emailId, setEmailId] = useState(null)

    useEffect(() => {
        if (localStorage.getItem('id')) {
            fetchUserDetails();
        }
    }, [watchedVideoId])

    async function fetchUserDetails() {
        try {

            const response = await axios.get("http://localhost:2000/api/welcome", {
                withCredentials: true,
            })

            if (response.data) {
                setUser(response.data)
                setLoggedIn(true);
            }
        } catch (error) {

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

            if (response.data) {
                console.log(response.data.newId);

                localStorage.setItem('id', response.data.newId)
                setLoggedIn(true)
            }
            const dsaPlayList = await axios.get("http://localhost:2000/api/fetchDsaPlaylist")
            if (dsaPlayList.data) {
                console.log("fromLogin", dsaPlayList.data);

                localStorage.setItem('dsaPlayList', JSON.stringify(dsaPlayList.data));
            }
            fetchUserDetails()

        } catch (error) {
            console.log(error);
            setSignUpError(error)
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

            if (response.data) {
                setLoggedIn(true);
                localStorage.setItem('id', response.data.newId)

            }
            const dsaPlayList = await axios.get("http://localhost:2000/api/fetchDsaPlaylist")
            if (dsaPlayList.data) {
                console.log("fromLogin", dsaPlayList.data);

                localStorage.setItem('dsaPlayList', JSON.stringify(dsaPlayList.data));
            }
            fetchUserDetails()


        } catch (error) {

            SetLoginError(error);
            setUser(null)
            setLoggedIn(false);
        }
    }

    async function logOut() {
        await axios.post('http://localhost:2000/auth/logOut',
            {},
            { withCredentials: true }

        )
        localStorage.clear();
        setLoggedIn(false)
        setUser(null)
    }


    return (
        <Authcontext.Provider value={{ user, setUser, isLoggedIn, setLoggedIn, signUp, logIn, setWatchedVidoId, loginError, signUpError, setEmailId, logOut }}>
            {children}
        </Authcontext.Provider>
    )
}






