import { useGSAP } from "@gsap/react";
import React from "react";
import gsap from "gsap";

const GSAPFromTo = () => {
  useGSAP(() => {
    const targetId = document.getElementById("gsap-from-to");

    gsap.fromTo(
      [targetId],
      {
        x: 100,
        duration: 1,
      },
      {
        x: 300,
        duration: 2,
      }
    );
  }, []);
  return (
    <div>
      <h1>GSAP From To</h1>
      <div
        id="gsap-from-to"
        className="h-[100px] w-[100px] bg-violet-600 rounded-md"
      />
    </div>
  );
};

export default GSAPFromTo;
