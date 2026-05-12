import Image from "next/image";
import YugoMap from "./components/map/YugoMap";
import europeGeoData from "./data/europe.json"

export default function Home() {
  return (
    <div>
      <YugoMap geoData={europeGeoData}></YugoMap>
    </div>
  )
}
