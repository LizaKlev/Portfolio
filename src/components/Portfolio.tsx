"use client";

import React, { useState } from "react";
import Button from "./Button";

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>();

  const categories = ["All", "Case Study", "Web", "Mobile"];
  const projects = [
    {
      name: "Surv",
      color: "bg-green",
      categories: ["Web", "Mobile"],
    },
    {
        name: "CRM",
        color: "bg-purple",
        categories: ["Web","Case Study"],
      },
      {
        name: "Omago",
        color: "bg-pink",
        categories: ["Mobile"],
      },
  ];
  const selectedProjects = selectedCategory && selectedCategory !== "All"
    ? projects.filter((p) => p.categories.includes(selectedCategory))
    : projects;

  return (
    <>
      <div className="my-32 flex justify-center items-center">
        <img
          src="/portfolio.svg"
          alt="Profile picture - Elizaveta Klevakina"
          width="308px"
        />
      </div>
      <div className=" flex gap-3">
        {categories.map((c) => (
          <Button
            name={c}
            key={c}
            onClick={() => setSelectedCategory(c)}
            active={c === selectedCategory}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-7">
        {selectedProjects.map((p) => (
          <div
            key={p.name}
            className={`${p.color} aspect-[4/3] w-full rounded-xl border-black border-2 hover:shadow-[8px_6px_0_0_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200`}
          >
            <img className="" src="/surv.png" alt="Surv Project" />
            <span className="montserrat-black ml-9 text-4xl text-white text-stroke">
              {p.name}
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default Portfolio;
