import React from "react";
import Indicator from "./Indicator";

const About = () => {
  return (
    <>
    <div className="flex justify-between px-5 py-5">
    <div className="flex gap-2.5">
      <img src="/logo.svg" alt="Logo" />
      <span className="font-black flex-auto my-auto">Liza Klevakina</span>
    </div>
    <button className="font-black justify-center self-start p-2.5 text-white bg-green rounded-2xl border border-black border-solid shadow-[4px_3px_0_0_rgba(0,0,0,1)] hover:shadow-[8px_6px_0_0_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200">
      Contact Me
    </button>
  </div>
    <div className="flex w-full gap-10">
      <div id="left box" className="w-1/2">
        <img className="mb-14 " src="/about_me.svg" alt="About me" />
        <span className="mt-14 montserrat-medium text-lg">
          {" "}
          Hey, I’m Liza, I am a Full Stack designer working in Figma & React. I
          am versatile designer who is getting involved in all the stages of
          developing a product: from ideation and research to implementation.
        </span>
      </div>
      <div id="right box" className="w-1/2">
        <img className="mb-14 h-8" src="/skills.svg" alt="Skills" />
        <div className="flex gap-8">
          <div className="gap-y-10 w-1/2">
            <Indicator bgColor="bg-purple" name="Figma" width={90} />
            <Indicator bgColor="bg-coral" name="Photoshop" width={90} />
            <Indicator
              bgColor="bg-bluish"
              name="Lightroom & DaVinci"
              width={90}
            />
            <Indicator bgColor="bg-green" name="Illustrator" width={60} />
          </div>
          <div className="gap-y-10 w-1/2">
            <Indicator bgColor="bg-blue" name="React" width={85} />
            <Indicator bgColor="bg-yellow" name="JavaScript" width={85} />
            <Indicator bgColor="bg-pink" name="HTML" width={90} />
            <Indicator bgColor="bg-orange" name="CSS" width={90} />
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default About;
