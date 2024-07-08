import React from "react";

const Header = () => {
  return (
    <div className="viewport bg-beige w-full rounded-2xl p-10">
      <div className="flex items-center xl:pl-80 xl:pr-96">
        <h1 className="text-black text-8xl">FULL-STACK DESIGNER</h1>

        <div className="relative">
          <img
            style={{ width: "400px", height: "299px" }}
            src="/me.png"
            alt="Elizaveta (Liza) Klevakina"
          />
          <img
            className="absolute right-0 -bottom-7"
            src="/label.svg"
            alt="Elizaveta Klevakina"
          />
          <img className="absolute -left-24" src="/contact-in.svg" alt="Contact me" />
          <img className="absolute -left-36 -bottom-36" src="/contact-out.svg" alt="Contact me" />
        </div>
      </div>

      <div className="flex items-center gap-40 mt-24">
        <div className="bg-white border border-black rounded-xl p-6">
          <h3>About</h3>
          <p>
            Hey, I’m Liza Klevakina, I am versatile designer who envisions,
            designs, builds and launches products
          </p>
        </div>
        <img
          className="w-48"
          src="/read-more-button.svg"
          alt="Read More - Enter"
        />
      </div>
    </div>
  );
};

export default Header;
