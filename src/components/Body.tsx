import React from "react";
import About from "./About";
import MyWorks from "./MyWorks";
import MyWorkflow from "./MyWorkflow";
import Services from "./Services";

const Body = () => {
  return (
    <div className="flex flex-col gap-5">
      <About />
      <MyWorks />
      <MyWorkflow/>
      <Services/>
    </div>
  );
};

export default Body;
