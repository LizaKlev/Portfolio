import React from "react";
import Scale from "./Scale";

const About = () => {
  return (
    <div className=' border border-beige w-full rounded-2xl p-10"'>
      <div>
        <h2 className="text-white">Full-Stack Designer is</h2>
        <p className="text-white">
          a designer that gets involved at every stage of the user experience
          design process, from research to implementation.
        </p>
        <p className="text-white">
          I started as a Design Coordinator in a marketing team, then
          transitioned to UX/UI, and after some time started feeling
          unfulfilled, I tried JavaScript first, then HTML & CSS. It enabled me
          to design and develop my personal products. Nowadays I’m working as a
          Product Designer and do Freelancing.
        </p>
      </div>
      <div>
        <Scale/>
      </div>
    </div>
  );
};

export default About;
