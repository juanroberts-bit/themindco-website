import worldMap from "@/assets/world-map.png";

// Coordenadas geográficas convertidas al espacio de la imagen (1536x1024, proyección cilíndrica)
// x = (lon + 180) / 360 * 1536
// y = (90 - lat) / 180 * 1024
const HUBS = [
  { name: "New York",     x: 452,  y: 280 },  // 74°W, 40.7°N
  { name: "Milano",       x: 807,  y: 253 },  // 9.2°E, 45.5°N
  { name: "Buenos Aires", x: 519,  y: 708 },  // 58.4°W, 34.6°S
];

const W = 1536;
const H = 1024;

// Curvas cúbicas entre hubs
const CURVES = [
  // New York → Milano (arco sobre el Atlántico)
  { x1: 452, y1: 280, cx1: 520, cy1: 140, cx2: 740, cy2: 140, x2: 807, y2: 253 },
  // New York → Buenos Aires (bajando por América)
  { x1: 452, y1: 280, cx1: 380, cy1: 450, cx2: 430, cy2: 600, x2: 519, y2: 708 },
  // Milano → Buenos Aires (arco largo)
  { x1: 807, y1: 253, cx1: 750, cy1: 500, cx2: 650, cy2: 640, x2: 519, y2: 708 },
];

export default function HubsMap() {
  return (
    <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16/7" }}>
      {/* Mapa base limpio */}
      <img
        src={worldMap}
        alt="World map"
        className="absolute inset-0 w-full h-full object-cover object-center"
        draggable={false}
      />

      {/* SVG overlay — curvas + dots */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Líneas de conexión */}
        {CURVES.map((c, i) => (
          <path
            key={i}
            d={`M ${c.x1} ${c.y1} C ${c.cx1} ${c.cy1}, ${c.cx2} ${c.cy2}, ${c.x2} ${c.y2}`}
            fill="none"
            stroke="#ff5d18"
            strokeWidth="1.5"
            strokeOpacity="0.6"
          />
        ))}

        {/* Dots por hub */}
        {HUBS.map((h) => (
          <g key={h.name}>
            <circle cx={h.x} cy={h.y} r="10" fill="#ff5d18" fillOpacity="0.2" />
            <circle cx={h.x} cy={h.y} r="4.5" fill="#ff5d18" />
          </g>
        ))}
      </svg>

      {/* Labels HTML */}
      {HUBS.map((h) => (
        <div
          key={h.name}
          className="absolute"
          style={{
            left: `${(h.x / W) * 100}%`,
            top: `${(h.y / H) * 100}%`,
            transform: "translate(14px, -50%)",
          }}
        >
          <span className="text-white text-sm md:text-base font-light tracking-widest whitespace-nowrap"
            style={{ textShadow: "0 1px 4px rgba(0,0,0,0.8)" }}>
            {h.name}
          </span>
        </div>
      ))}
    </div>
  );
}
