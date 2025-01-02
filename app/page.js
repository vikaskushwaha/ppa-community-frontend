'use client'
import CommunityBanner from "@/components/CommunityBanner";
import RewardSystem from "@/components/RewardSystem";

import { useState, useContext } from "react";
import { UserProvider, Authcontext } from "@/context/UserContext";
import VideoSection from "@/components/VideoSection";
import WinSection from "@/components/WinSection";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import DummyVideoSection from "@/components/DummyVideoSection";
export default function Home() {
  const { user, setUser, isLoggedIn, setLoggedIn } = useContext(Authcontext)
  console.log("user", user);

  return (
    <div className="flex flex-col w-full">
      <Header />
      {(isLoggedIn && user) ? (<div> <VideoSection /> <RewardSystem />  <WinSection /></div>) : (<div> <CommunityBanner /> <RewardSystem /><DummyVideoSection /> <WinSection /></div>)}
      {/* <CommunityBanner /> */}
      {/* {!isLoggedIn && <CommunityBanner />}
      // <RewardSystem /> */}
      <Footer />
    </div>
  );
}