import React from "react";

const Card = ({
  name,
  description,
  image,
}: {
  name: string;
  description: string;
  image: string;
}) => {
  return (
    <div className="border border-beige rounded-2xl px-5 pt-5 pb-14 w-64 ">
      <img src={image} alt={name} />
      <h2 className="text-white mb-3 text-2xl">{name}</h2>
      <p className=" text-opacity-80 text-white text-lg">{description}</p>
    </div>
  );
};

export default Card;
