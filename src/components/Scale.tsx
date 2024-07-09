import React from "react";

const Scale = ({ name }: { name: string }) => {
  return (
    <div>
      <h4 className="text-white pl-5">{name}</h4>
      <div className="border box-border overflow-hidden flex items-center justify-center border-beige rounded-xl h-12 w-80">
        <div className="box-border overflow-hidden gap-2 flex items-center justify-center h-7 w-80 m-3 my-7">
          <div className="w-4 h-16 bg-beige" style={{transform: 'rotate(37deg)'}}></div>
          <div className="w-4 h-16 bg-beige" style={{transform: 'rotate(37deg)'}}></div>
          <div className="w-4 h-16 bg-beige" style={{transform: 'rotate(37deg)'}}></div>
          <div className="w-4 h-16 bg-beige" style={{transform: 'rotate(37deg)'}}></div>
          <div className="w-4 h-16 bg-beige" style={{transform: 'rotate(37deg)'}}></div>
          <div className="w-4 h-16 bg-beige" style={{transform: 'rotate(37deg)'}}></div>         
          <div className="w-4 h-16 bg-beige" style={{transform: 'rotate(37deg)'}}></div>
          <div className="w-4 h-16 bg-beige" style={{transform: 'rotate(37deg)'}}></div>         
          <div className="w-4 h-16 bg-beige" style={{transform: 'rotate(37deg)'}}></div>
          <div className="w-4 h-16 bg-beige" style={{transform: 'rotate(37deg)'}}></div>         
          <div className="w-4 h-16 bg-beige" style={{transform: 'rotate(37deg)'}}></div>
          <div className="w-4 h-16 bg-beige" style={{transform: 'rotate(37deg)'}}></div>
          <div className="w-4 h-16 bg-beige" style={{transform: 'rotate(37deg)'}}></div>
          <div className="w-4 h-16 bg-beige" style={{transform: 'rotate(37deg)'}}></div>
        </div>
      </div>
    </div>
  );
};

export default Scale;
