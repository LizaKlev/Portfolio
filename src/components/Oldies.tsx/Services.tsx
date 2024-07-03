import React from "react";

const Services = () => {
  return (
    <div>
      <div className="flex justify-center items-center mt-48 mb-16">
        <img width="757px" src="/what-I-can-do-for-you.svg" alt="Services" />
      </div>
      <div className="flex gap-8 mb-11">
        <div
          id="box 1"
          className="bg-white rounded-3xl border-black border-2 py-10 px-5 gap-5 flex flex-col w-1/3 shadow-[3px_4px_0_0_rgba(0,0,0,1)]"
        >
          <img src="/figma.svg" alt="Figma" width="100px" />
          <h1 className="montserrat-extrabold text-3xl">Design</h1>
          <p className="montserrat-regular">
            Industry-leading tools such as Figma, React, Framer or Wordpress
            will be used to build your site
          </p>
        </div>
        <div
          id="box 2"
          className="bg-white rounded-3xl border-black border-2 py-10 px-5 gap-5 flex flex-col w-1/3 shadow-[3px_4px_0_0_rgba(0,0,0,1)]"
        >
          <img src="/react.svg" alt="React" width="147px" />
          <h1 className="montserrat-extrabold text-3xl">Development</h1>
          <p className="montserrat-regular">
            Building flexible sites using React, or fast and neat using low-code
            solution sites
          </p>
        </div>
        <div
          id="box 3"
          className="bg-white rounded-3xl border-black border-2 py-10 px-5 gap-5 flex flex-col w-1/3 shadow-[3px_4px_0_0_rgba(0,0,0,1)]"
        >
          <img src="/seo.svg" alt="SEO" width="110px" />
          <h1 className="montserrat-extrabold text-3xl">SEO</h1>
          <p className="montserrat-regular">
            Optimizing structure and data to improve search engine rankings
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
