import React from "react";
// import Flow from "./Flow";


const Workflow = () => {
  return (
    <div>
      <div className="flex justify-center items-center mb-9">
        <img src="/workflow.svg" alt="My Workflow" width="503px" />
      </div>
      <div className="flex bg-black py-3 w-full justify-around rounded-xl">
        <h1 className="text-white montserrat-black text-xl">Research</h1>
        <h1 className="text-white montserrat-black text-xl">Ideate</h1>
        <h1 className="text-white montserrat-black text-xl">Design</h1>
        <h1 className="text-white montserrat-black text-xl">Develop</h1>
      </div>
      {/* <Flow/> */}
    </div>
  );
};

export default Workflow;
