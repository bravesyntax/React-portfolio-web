import React from "react";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div className="">
      <p className="text-center container m-auto  text-slate-500 pb-6">
        Copyright © {date}. All rights reserved by{" "}
        <a href="/" className="text-slate-900">
          Brave Syntax
        </a>
      </p>
    </div>
  );
};

export default Footer;
