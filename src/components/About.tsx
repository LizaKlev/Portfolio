import React from "react";
import Indicator from "./Indicator";

const About = () => {
  return (
    <div className="flex w-full px-16 gap-10">
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
  );
};

export default About;
