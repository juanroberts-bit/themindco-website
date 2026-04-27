import worldMap from "@/assets/world-map.png";

export default function WorldMap() {
  return (
    <div className="w-full">
      <img
        src={worldMap}
        alt="World map showing our hubs in Buenos Aires, New York, and Milan"
        className="w-full h-auto rounded-lg"
      />
    </div>
  );
}
