'use client'
import CommunityBanner from "@/components/CommunityBanner";
import RewardSystem from "@/components/RewardSystem";

import { useState, useContext } from "react";
import { UserProvider, Authcontext } from "@/context/UserContext";
export default function Home() {
  const { user, setUser, isLoggedIn, setLoggedIn } = useContext(Authcontext)
  console.log("user", user);

  return (
    <div className="flex flex-col w-full">
      {isLoggedIn && user ? (<RewardSystem />) : (<div> <CommunityBanner /> <RewardSystem /></div>)}
      {/* <CommunityBanner /> */}
      {/* {!isLoggedIn && <CommunityBanner />}
      <RewardSystem /> */}



    </div>
  );
}