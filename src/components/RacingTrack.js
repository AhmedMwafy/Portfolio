"use client";
// Hero animation: a car following a path, with a "lookahead" circle and a
// target point ahead of it: the core idea of the Pure Pursuit controller.
// You do not need to edit this file.
import { useEffect, useRef } from "react";

const TRACK =
  "M110 70 C170 30 290 30 360 70 C430 110 450 180 400 225 C350 270 290 240 250 255 C200 270 210 305 150 300 C80 295 40 240 55 180 C65 135 80 95 110 70 Z";

export default function RacingTrack() {
  const svgRef = useRef(null);

  // Respect "reduce motion" settings: freeze the animation
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce && svgRef.current) svgRef.current.pauseAnimations();
  }, []);

  return (
    <figure className="rounded-2xl border border-edge bg-panel/70 p-4 sm:p-6">
      <svg
        ref={svgRef}
        viewBox="0 0 480 340"
        className="w-full"
        role="img"
        aria-label="Animation of a car following a racing line with a pure pursuit lookahead circle"
      >
        {/* track edge, surface and racing line */}
        <path d={TRACK} fill="none" stroke="#2A3A4C" strokeWidth="30" strokeLinejoin="round" />
        <path d={TRACK} fill="none" stroke="#0A1017" strokeWidth="26" strokeLinejoin="round" />
        <path
          id="racing-line"
          d={TRACK}
          fill="none"
          stroke="#4CC9F0"
          strokeOpacity="0.4"
          strokeWidth="1.5"
          strokeDasharray="4 6"
        />

        {/* target point, slightly ahead of the car */}
        <circle r="4.5" fill="#FFFFFF">
          <animateMotion dur="16s" begin="-0.6s" repeatCount="indefinite">
            <mpath href="#racing-line" />
          </animateMotion>
        </circle>

        {/* car + lookahead circle */}
        <g>
          <circle r="40" fill="none" stroke="#4CC9F0" strokeOpacity="0.55" strokeDasharray="3 4" />
          <rect x="-8" y="-4.5" width="16" height="9" rx="2.5" fill="#4CC9F0" />
          <rect x="2" y="-3" width="4" height="6" rx="1" fill="#070B10" />
          <animateMotion dur="16s" repeatCount="indefinite" rotate="auto">
            <mpath href="#racing-line" />
          </animateMotion>
        </g>
      </svg>

      <figcaption className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
        <span className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full border border-dashed border-accent" />
          Lookahead distance
        </span>
        <span className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-white" />
          Target point on the path
        </span>
      </figcaption>
    </figure>
  );
}
