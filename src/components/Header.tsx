import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between px-5 py-5">
      <div className="flex gap-2.5">
        <img src="/logo.svg" alt="Logo" />
        <span className="font-black flex-auto my-auto">Liza Klevakina</span>
      </div>
      <button className="font-black justify-center self-start p-2.5 text-white bg-green rounded-2xl border border-black border-solid shadow-[4px_3px_0_0_rgba(0,0,0,1)] hover:shadow-[8px_6px_0_0_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200">
        Contact Me
      </button>
    </div>
  );
};

export default Header;
