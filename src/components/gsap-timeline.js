import { useGSAP } from "@gsap/react";
import React, { useState } from "react";
import gsap from "gsap";

const GSAPTimeline = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const timeline = gsap.timeline();

  useGSAP(() => {
    timeline
      .to("#box-timeline", { x: 200, rotate: 360, duration: 2 })
      .to("#box-timeline", { y: 200, duration: 2 })
      .to("#box-timeline", { scale: 2, duration: 2 });
  }, []);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    if (isPlaying) {
      timeline.pause();
    } else {
      timeline.play();
    }
  };

  return (
    <div>
      <h1>
        GSAP Timeline <button onClick={handlePlayPause}>Play/Pause</button>
      </h1>
      <div
        id="box-timeline"
        className="h-[100px] w-[100px] rounded-md bg-red-600"
      ></div>
    </div>
  );
};

export default GSAPTimeline;
