import { url } from "inspector";
import React from "react";

const Hero = () => {
  return (
    <>
      <div
        className="flex px-16 py-16 justify-between max-sm:flex-col-reverse max-sm:gap-12 "
        style={{
          background: "url('mypattern.png')",
          backgroundRepeat: "repeat",
        }}
      >
        <div className="flex relative" style={{ width: "338.4px" }}>
          <img
            src="/top-icons.svg"
            alt="CSS, HTML, DaVinci Resolve"
            width="82.4px"
            className="absolute -top-10 right-20"
          />
          <img
            src="/me.svg"
            alt="Profile picture - Elizaveta Klevakina"
            width="266px"
          />
          <img
            src="/bottom-icons.svg"
            alt="Javascript, Photoshop, Illustrator"
            width="183.11px"
            className="absolute -bottom-24 -left-16"
          />
          <img
            src="/pointer.svg"
            alt="Liza Klevakina"
            width="196.92px"
            className="absolute -bottom-20 -right-20"
          />
        </div>

        <div className="flex flex-col relative">
          <img
            src="/react&figma.svg"
            alt="Figma & React"
            width="133.99px"
            className="absolute -top-10 -left-20"
          />
          <div className="flex gap-2 w-full justify-center">
            <span className="gaegu-regular text-2xl">Hi, I am </span>
            <span className="gaegu-bold text-3xl">Liza Klevakina</span>
          </div>
          <img
            src="/designer&developer.svg"
            alt="Designer & Developer"
            width={359}
          />
          <h1 className="montserrat font-black text-6xl opacity-0 absolute">
            Designer
          </h1>
          <span className="montserrat font-black text-6xl opacity-0 absolute">
            &
          </span>
          <span className="montserrat font-black text-6xl opacity-0 absolute">
            Developer
          </span>
          <div className="flex gap-2">
            <span className="gaegu-regular text-2xl my-auto">
              Proving that hard work can be equal to
            </span>
            <img src="/talent.svg" alt="talent" width={121} />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center h-64 mb-32">
        <svg
          width="79"
          height="69"
          viewBox="0 0 79 69"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M71.0678 14.6037L39.5 49.435L7.93223 14.6037L71.0678 14.6037Z"
            fill="#F7B335"
            stroke="black"
            stroke-width="2.34074"
          />
          <path
            d="M71.0678 27.5741L39.5 62.4053L7.93223 27.5741L71.0678 27.5741Z"
            stroke="black"
            stroke-width="2.34074"
          />
        </svg>
      </div>
    </>
  );
};

export default Hero;
