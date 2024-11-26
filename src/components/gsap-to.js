import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const GSAPTo = () => {
  useGSAP(() => {
    gsap.to("#box-x", {
      x: 200,
      duration: 1,
      yoyo: true,
      rotate: 360,
    });
  }, []);

  return (
    <div>
      <h1>GSAP to</h1>
      <div
        id="box-x"
        className="h-[100px] w-[100px] bg-blue-600 rounded-md"
      ></div>
    </div>
  );
};

export default GSAPTo;
