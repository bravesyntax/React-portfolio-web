import React from "react";
import userImage from "../assets/userImage.png";

const Resume = () => {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Resume.pdf";
    link.download = "Deepak_Resume.pdf";
    link.click();
  };

  return (
    <div className="py-20 resume">
      <p className="border-l-2 pl-2 container m-auto border-blue-500 text-blue-500 font-medium tracking-widest mb-4">
        RESUME
      </p>
      <div
        className="grid grid-cols-1 lg:grid-cols-2 relative container border border-[#ffffff32] m-auto bg-[#ffffff11] 
        backdrop-blur-sm">
        <div className="text-white h-full flex flex-col justify-center p-10">
          <p className="capitalize text-white opacity-50 font-sans font-semibold text-xl lg:text-3xl mb-4 tracking-wider">
            I am <br />
            <span className="text-3xl lg:text-6xl text-white font-Raleway opacity-40">
              DEEPAK KUMAR
            </span>
            <br />
            Available For Freelancer
          </p>
          <p className="mb-2 text-white opacity-70 text-sm lg:text-base">
            A passionate Front-End Developer with expertise in HTML, CSS,
            JavaScript, and responsive design. With hands-on experience in web
            development, I have created dynamic projects ranging from
            educational portals to food store applications.
          </p>

          <div className="sm:flex sm:items-center mt-4 sm:gap-4 ">
            <button
              className="border border-slate-400 transition-all duration-700 font-medium px-6 py-3 tracking-widest hover:bg-slate-100 hover:text-black w-max mb-4 sm:mb-0"
              onClick={handleDownloadCV}>
              Download Cv
            </button>
            <div className="flex gap-4">
              <a
                className="hover:bg-[white] transition-all border py-3 px-3 duration-500 hover:text-black cursor-pointer"
                href="https://github.com/Deepak-Angry-Coder"
                target="_blank"
                rel="noreferrer noopener">
                <svg
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  viewBox="0 0 1024 1024">
                  <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
                </svg>
              </a>
              <a
                className="transition-all duration-500 border py-3 px-3 hover:bg-white hover:text-black cursor-pointer"
                href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJfrtCMzhTWkkLSQfTttpdnvnCVqQcQHlLMkffXzWvsXPkzbWHPhphLzXJBgfGCTnVBvWHg"
                target="_blank"
                rel="noreferrer noopener">
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <path d="M22 6l-10 7L2 6"></path>
                </svg>
              </a>
              <a
                className="hover:bg-white hover:text-black cursor-pointer border py-3 px-3"
                href="https://www.linkedin.com/in/deepak-kumar890/"
                target="_blank"
                rel="noreferrer noopener">
                <svg
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  viewBox="0 0 960 1000">
                  <path d="M480 20c133.333 0 246.667 46.667 340 140s140 206.667 140 340c0 132-46.667 245-140 339S613.333 980 480 980c-132 0-245-47-339-141S0 632 0 500c0-133.333 47-246.667 141-340S348 20 480 20M362 698V386h-96v312h96m-48-352c34.667 0 52-16 52-48s-17.333-48-52-48c-14.667 0-27 4.667-37 14s-15 20.667-15 34c0 32 17.333 48 52 48m404 352V514c0-44-10.333-77.667-31-101s-47.667-35-81-35c-44 0-76 16.667-96 50h-2l-6-42h-84c1.333 18.667 2 52 2 100v212h98V518c0-12 1.333-20 4-24 8-25.333 24.667-38 50-38 32 0 48 22.667 48 68v174h98"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="flex relative items-center justify-center">
          <div className="w-full relative p-6 lg:p-14 text-center items-center flex flex-col transition-all duration-500">
            <div className="text-gray-500 transition-all p-4 border border-slate-500 w-full max-w-full">
              <img
                src={userImage}
                alt="userImage"
                className="w-full h-[100%] lg:h-[470px] object-cover object-bottom opacity-80"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
