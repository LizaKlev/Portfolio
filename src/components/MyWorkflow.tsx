import React from "react";

const MyWorkflow = () => {
  return (
    <div className="relative">
    <img className="absolute top-44 object-cover mr-4" src="all.svg" alt="1. Brainstorm ideas & concepts"></img>

      <h1 className="text-white absolute top-9 ml-8">MY WORKFLOW</h1>
      <nav className="flex">
        <h2 className="text-white pt-32 w-1/4 bg-beige bg-opacity-5 flex justify-center rounded-s-2xl items-start" style={{height:"750px"}}>
          Research
        </h2>
        <h2 className="text-white pt-32 w-1/4 bg-beige bg-opacity-10 flex justify-center items-start">
          Ideate
        </h2>
        <h2 className="text-white pt-32 w-1/4 bg-beige flex justify-center items-start" style={{backgroundColor: 'rgba(245, 245, 220, 0.12)'}}>
          Design
        </h2>
        <h2 className="text-white pt-32 w-1/4 bg-beige bg-opacity-20 flex justify-center items-start rounded-e-2xl" style={{backgroundColor: 'rgba(245, 245, 220, 0.14)'}}>
          Develop
        </h2>
      </nav>
    </div>
  );
};

export default MyWorkflow;

