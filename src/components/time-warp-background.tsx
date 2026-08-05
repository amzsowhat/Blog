import { useEffect, useState } from "react";
import { Warp } from "@paper-design/shaders-react";

type Period = "morning" | "day" | "evening";
type Variant = "hero" | "panel";

type Props = {
  variant?: Variant;
};

const palettes = {
  morning: {
    hero: { color1: "#dcebd9", color2: "#fffdf7", color3: "#ead9a7" },
    panel: { color1: "#edf5e9", color2: "#ffffff", color3: "#e4cf91" },
  },
  day: {
    hero: { color1: "#d9edf0", color2: "#f8fbf8", color3: "#b9d9d2" },
    panel: { color1: "#e8f4f5", color2: "#ffffff", color3: "#a9cbc5" },
  },
  evening: {
    hero: { color1: "#09090b", color2: "#3f3f46", color3: "#d4d4d8" },
    panel: { color1: "#d4d4d8", color2: "#52525b", color3: "#09090b" },
  },
} as const;

const motion = {
  hero: { speed: 0.34, swirl: 0.58, shapeScale: 0.34 },
  panel: { speed: 0.18, swirl: 1.4, shapeScale: 0.3 },
} as const;

function getBeijingPeriod(): Period {
  const hour = Number(
    new Intl.DateTimeFormat("en-GB", {
      timeZone: "Asia/Shanghai",
      hour: "2-digit",
      hourCycle: "h23",
    }).format(new Date()),
  );

  if (hour >= 5 && hour < 11) return "morning";
  if (hour >= 11 && hour < 18) return "day";
  return "evening";
}

export default function TimeWarpBackground({ variant = "hero" }: Props) {
  const [period, setPeriod] = useState<Period>(() => getBeijingPeriod());

  useEffect(() => {
    const timer = window.setInterval(() => setPeriod(getBeijingPeriod()), 60_000);
    return () => window.clearInterval(timer);
  }, []);

  const palette = palettes[period][variant];
  const movement = motion[variant];

  return (
    <Warp
      {...palette}
      speed={movement.speed}
      swirl={movement.swirl}
      rotation={0.5}
      swirlIterations={10}
      shapeScale={movement.shapeScale}
      style={{ width: "100%", height: "100%" }}
    />
  );
}
