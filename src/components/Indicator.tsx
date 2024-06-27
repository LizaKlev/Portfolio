import React from "react";

interface IndicatorProps {
    bgColor: string;
    name: '';
  }

const Indicator = ({ bgColor, name, w}) => {
    return (
      <div className="mb-6">
        <div className="montserrat-bold">{name}</div>
        <div className="bg-slate-200 border-black border-4 rounded-lg w-full h-4 ">
          <div
            id="indicator"
            className={`h-full rounded-lg ${w} ${bgColor}`}
          ></div>
        </div>
      </div>
    );
  };

export default Indicator;
