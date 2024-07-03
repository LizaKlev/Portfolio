import React from "react";

const Indicator = ({
  bgColor,
  name,
  width,
}: {
  bgColor: string;
  name: string;
  width: number;
}) => {
  return (
    <div className="mb-6">
      <div className="montserrat-bold">{name}</div>
      <div className="bg-slate-200 border-black border-4 rounded-lg w-full h-4 ">
        <div
          id="indicator"
          style={{
            width: `${width}%`,
          }}
          className={`h-full rounded-lg ${bgColor}`}
        ></div>
      </div>
    </div>
  );
};

export default Indicator;
