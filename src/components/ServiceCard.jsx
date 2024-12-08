import React from "react";
import { TiArrowForwardOutline } from "react-icons/ti";

const ServiceCard = (props) => {
  let cardData = props.data;

  return (
    <div className="shadow-md hover:shadow-lg shadow-slate-100 ">
      <div className="flex flex-col items-start justify-center p-8">
        <div className="w-20 h-20 mb-6">
          <img src={cardData.src} alt="service card" />
        </div>

        <div className="mb-4">
          <h2 className="font-bold uppercase mb-3">{cardData.title}</h2>
          <p className="text-sm font-md">{cardData.description}</p>
        </div>
        <a
          href="https://github.com/Deepak-Angry-Coder"
          target="_blank"
          rel="noreferrer noopener"
          className="p-3 bg-slate-50 rounded-full border-2 border-slate-400 hover:border-slate-900 transition-all duration-200  ">
          <TiArrowForwardOutline className="text-xl" />
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;
