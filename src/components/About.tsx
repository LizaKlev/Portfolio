import React from "react";
import Scale from "./Scale";

const About = () => {
  return (
    <div className=' border border-beige w-full rounded-2xl p-10 flex items-center"'>
      <div className="flex flex-col ">
        <h2 className="text-white text-6xl mb-6">Full-Stack <br/> Designer is</h2>
        <p className="text-white text-2xl mb-52 w-5/6">
          a designer that gets involved at every stage of the user experience
          design process, from research to implementation.
        </p>
        <p className="text-white text-lg opacity-60 w-5/6">
          I started as a Design Coordinator in a marketing team, then
          transitioned to UX/UI, and after some time started feeling
          unfulfilled, I tried JavaScript first, then HTML & CSS. It enabled me
          to design and develop my personal products. Nowadays I’m working as a
          Product Designer and do Freelancing.
        </p>
      </div>
      <div className="gap-7 flex flex-col">
        <Scale name="Figma" />
        <Scale name="Photoshop & Lightroom" />
        <Scale name="React" />
        <Scale name="JavaScript" />
        <Scale name="HTML & CSS" />
        <Scale name="Davinci Resolve" />
      </div>
    </div>
  );
};

export default About;
