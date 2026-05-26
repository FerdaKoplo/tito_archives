import Image from "next/image";
import YugoMap from "./components/map/YugoMap";
import InteractiveMapSection from "./partials/landing/InteractiveMapSection";

export default function Home() {
  return (
    <div className="  bg-[#8A9A86] ">
      <InteractiveMapSection />
    </div>
  );
}
