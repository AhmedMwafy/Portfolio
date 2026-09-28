"use client";
// Shows the project picture, or a neat placeholder if it is missing.
import { useEffect, useRef, useState } from "react";

function Placeholder({ title }) {
  return (
    <div
      role="img"
      aria-label={`Placeholder image for ${title}`}
      className="hero-grid flex h-full w-full flex-col items-center justify-center gap-2 bg-ink text-muted"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-10 w-10 text-accent/70"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="6" y="6" width="12" height="12" rx="2" />
        <path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4" />
        <circle cx="12" cy="12" r="1.5" />
      </svg>
      <span className="text-sm">Project image coming soon</span>
    </div>
  );
}

export default function ProjectImage({ src, title }) {
  const [failed, setFailed] = useState(false);
  const imgRef = useRef(null);

  // If the file failed to load before the page finished starting up
  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, []);

  if (!src || failed) return <Placeholder title={title} />;

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      ref={imgRef}
      src={src}
      alt={`${title} project preview`}
      loading="lazy"
      onError={() => setFailed(true)}
      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
    />
  );
}
