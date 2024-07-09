import React from "react";
import Card from "./Card";

const Services = () => {
  return (
    <div className="px-3 py-14">
      <h2 className="text-white text-6xl mb-11">SERVICES I PROVIDE</h2>
      <Card
        name="DESIGN & DEVELOPMENT"
        description="From concept to launch, I provide comprehensive design and development services to bring your vision to life"
        image="D&D1.svg"
      />
    </div>
  );
};

export default Services;
