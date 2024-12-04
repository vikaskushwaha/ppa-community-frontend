import Image from "next/image";
import CommunityBanner from "@/components/CommunityBanner";
import RewardSystem from "@/components/RewardSystem";
export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <CommunityBanner />
      <RewardSystem />
    </div>
  );
}
