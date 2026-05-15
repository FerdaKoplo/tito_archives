import Image from "next/image";
import YugoMap from "./components/map/YugoMap";
import InteractiveMapSection from "./partials/landing/InteractiveMapSection";

export default function Home() {
  return (
    <div>
      <InteractiveMapSection />
    </div>
  );
}
