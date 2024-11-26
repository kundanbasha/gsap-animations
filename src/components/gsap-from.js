import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const GSAPFrom = () => {
  useGSAP(() => {
    gsap.from("#box-from", {
      duration: 1,
      x: 200,
      rotate: 360,
      repeat: -1,
    });
  }, []);
  return (
    <div>
      <h1>GSAP from</h1>
      <div
        id="box-from"
        className="w-[100px] h-[100px] rounded-md bg-green-600"
      ></div>
    </div>
  );
};

export default GSAPFrom;
