import React from "react";
import Card from "./Card";

const Services = () => {
  return (
    <div className="px-3 py-14">
      <h2 className="text-white text-6xl mb-11">SERVICES I PROVIDE</h2>
      <div className="flex gap-2">
      <Card
        name="DESIGN & DEVELOPMENT"
        description="From concept to launch, I provide comprehensive design and development services to bring your vision to life"
        image="D&D1.svg"
      />
      <Card
        name="DESIGN"
        description="Creating one-of-a-kind designs that come to life using industry-leading tools such as Figma, Photoshop, DaVinci, Lightroom, and Illustrator"
        image="Design1.svg"
      />
      <Card
        name="DEVELOPMENT"
        description="Building functional and responsive websites using modern technologies like React or low-code solutions for quick and efficient site creation"
        image="Development1.svg"
      />
      <Card
        name="DESIGN Systems"
        description="Developing complete design systems based on atomic design principles that include color guides, typography, interactive components, and more"
        image="Ds1.svg"
      />
      <Card
        name="SEO"
        description="Optimizing the website's structure and content to improve search engine rankings and increase traffic, namely on-page optimization, technical SEO improvements, and a targeted content strategy"
        image="seo1.svg"
      />
      </div>
    </div>
  );
};

export default Services;
