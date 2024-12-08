import React from "react";
import { data } from "../context/CardData";
import ServiceCard from "./ServiceCard";

const Features = () => {
  return (
    <div className="">
      <div className="w-[100%] max-w-[90%] m-auto py-20 mb-10" id="features">
        <p className="border-l-2 pl-2 border-blue-500 text-blue-500 font-medium tracking-widest mb-4 mt-8">
          FEATURES
        </p>
        <h1 className="font-bold text-5xl tracking-wider font-Raleway">
          What I Do
        </h1>
      </div>
      <div
        className="w-[100%] max-w-[90%] m-auto grid gap-4 pb-16 
        grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((card, index) => (
          <ServiceCard key={index} data={card} />
        ))}
      </div>
      <div className="border-b container m-auto mb-16"></div>
    </div>
  );
};

export default Features;
