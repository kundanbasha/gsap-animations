import { useGSAP } from "@gsap/react";
import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const GSAPScrollTrigger = () => {
  useGSAP(() => {
    gsap.to("#box-scroll-trigger", {
      x: 300,
      duration: 3,
      scrollTrigger: {
        trigger: "#box-scroll-trigger",
        start: "top 80%",
        end: "top 20%",
        scrub: true,
        markers: true,
      },
    });
  }, []);

  return (
    <div>
      <h1>GSAP Scroll Trigger</h1>
      <div
        id="box-scroll-trigger"
        className="h-[100px] w-[100px] bg-orange-500 rounded-md"
      ></div>
    </div>
  );
};

export default GSAPScrollTrigger;
