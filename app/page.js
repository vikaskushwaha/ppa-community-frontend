import Image from "next/image";
import CommunityBanner from "@/components/CommunityBanner";
import RewardSystem from "@/components/RewardSystem";
import WinSection from "@/components/WinSection";
export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <CommunityBanner />
      {/* <RewardSystem /> */}
      {/* <WinSection/> */}
    </div>
  );
}
