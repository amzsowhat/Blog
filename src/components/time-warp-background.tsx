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
    hero: { color1: "#ffffff", color2: "#dceeff", color3: "#8fc8ee" },
    panel: { color1: "#ffffff", color2: "#e6f3ff", color3: "#a8d6f4" },
  },
  evening: {
    hero: { color1: "#151a2e", color2: "#44425f", color3: "#9a7f91" },
    panel: { color1: "#92798e", color2: "#4b4664", color3: "#171a2f" },
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
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => setReducedMotion(mediaQuery.matches);
    updateMotionPreference();
    mediaQuery.addEventListener("change", updateMotionPreference);

    const timer = window.setInterval(() => setPeriod(getBeijingPeriod()), 60_000);
    return () => {
      window.clearInterval(timer);
      mediaQuery.removeEventListener("change", updateMotionPreference);
    };
  }, []);

  const palette = palettes[period][variant];
  const movement = motion[variant];

  const overlayOpacity = period === "day" ? 0.52 : period === "morning" ? 0.42 : 0.24;

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <Warp
        {...palette}
        speed={reducedMotion ? 0 : movement.speed}
        swirl={movement.swirl}
        rotation={0.5}
        swirlIterations={10}
        shapeScale={movement.shapeScale}
        style={{ width: "100%", height: "100%" }}
      />
      {variant === "hero" && (
        <div
          aria-hidden="true"
          style={{ position: "absolute", inset: 0, background: `rgba(9, 9, 11, ${overlayOpacity})` }}
        />
      )}
    </div>
  );
}
