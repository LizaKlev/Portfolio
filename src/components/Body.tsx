import React from "react";
import About from "./About";
import MyWorks from "./MyWorks";

const Body = () => {
  return (
    <div className="flex flex-col gap-5">
      <About />
      <MyWorks />
    </div>
  );
};

export default Body;
