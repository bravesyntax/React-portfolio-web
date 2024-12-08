import React from "react";

const PortfolioCard = (props) => {
  const { data } = props;

  return (
    <div className="relative group block  rounded-sm shadow-sm">
      <img
        src={data.src}
        alt={data.title}
        className="w-full h-[320px] object-cover rounded-sm"
      />

      <div className="p-4">
        <p className="font-sans text-lg mb-4">{data.title}</p>
        <p className="mb-4">{data.description}</p>
        <a
          href={data.link}
          target="_blank"
          rel="noreferrer"
          className="ExploreButton w-full flex items-center justify-center hover:bg-slate-50">
          <span className="ExploreText tracking-wider font-sans">Explore</span>
          <svg
            className="arrow"
            viewBox="0 0 448 512"
            height="1em"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default PortfolioCard;
