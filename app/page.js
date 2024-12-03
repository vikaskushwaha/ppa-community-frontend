import Image from "next/image";
import CommunityBanner from "@/components/CommunityBanner";
export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <CommunityBanner />
    </div>
  );
}
