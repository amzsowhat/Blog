import { useEffect, useState } from "react";
import { Warp } from "@paper-design/shaders-react";

type Period = "morning" | "day" | "evening";
type Variant = "hero" | "panel";

type Props = {
  variant?: Variant;
};

const palettes = {
  morning: {
    hero: { color1: "#f4f4f5", color2: "#a1a1aa", color3: "#27272a", speed: 0.34, swirl: 0.55 },
    panel: { color1: "#ffffff", color2: "#d4d4d8", color3: "#52525b", speed: 0.18, swirl: 1.35 },
  },
  day: {
    hero: { color1: "#d4d4d8", color2: "#71717a", color3: "#18181b", speed: 0.46, swirl: 0.5 },
    panel: { color1: "#f4f4f5", color2: "#a1a1aa", color3: "#27272a", speed: 0.22, swirl: 1.5 },
  },
  evening: {
    hero: { color1: "#09090b", color2: "#3f3f46", color3: "#a1a1aa", speed: 0.26, swirl: 0.7 },
    panel: { color1: "#d4d4d8", color2: "#52525b", color3: "#09090b", speed: 0.14, swirl: 1.7 },
  },
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

  return (
    <Warp
      {...palette}
      rotation={0.5}
      swirlIterations={10}
      shapeScale={variant === "panel" ? 0.3 : 0.34}
      style={{ width: "100%", height: "100%" }}
    />
  );
}
