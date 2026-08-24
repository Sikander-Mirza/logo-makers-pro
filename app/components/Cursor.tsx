"use client";

import dynamic from "next/dynamic";

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

export default function Cursor() {
  return (
    <AnimatedCursor
      innerSize={8}
      outerSize={35}
      color="255, 45, 45"
      outerAlpha={0}
      innerScale={1}
      outerScale={1.5}
      outerStyle={{
        border: "2px solid rgb(255, 45, 45)",
        mixBlendMode: "difference",
      }}
      innerStyle={{
        backgroundColor: "rgb(255, 45, 45)",
        mixBlendMode: "difference",
      }}
      clickables={[
        "a",
        "button",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        ".hover-cursor",
      ]}
    />
  );
}