import React, { useEffect, useState, useMemo } from "react";
import { Typewriter } from "react-simple-typewriter";
import Lottie from "lottie-react";
import CodingAnimation from "../assets/codingAnimation1.json";
import Logo from "../assets/brave stntax (2) (1).png";
import { HiOutlineCursorArrowRays } from "react-icons/hi2";
import { CiMenuFries } from "react-icons/ci";

const Hero = ({ setHideMenu }) => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Resume.pdf";
    link.download = "Deepak_Resume.pdf";
    link.click();
  };

  const typewriterComponent = useMemo(
    () => (
      <Typewriter
        words={["Professional coder", "Developer"]}
        loop={false}
        cursor
        cursorStyle="_"
        typeSpeed={150}
        deleteSpeed={100}
        delaySpeed={2000}
      />
    ),
    []
  );

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsHeaderVisible(false);
      } else {
        setIsHeaderVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const translateHandler = () => {
    setHideMenu("translate-x-[0%]");
  };

  return (
    <div className="md:h-screen relative" id="home">
      {/* Header */}
      <header
        className={`fixed z-10 w-full bg-[#ffffff96] shadow-sm backdrop-blur-sm transition-transform duration-300 ${
          isHeaderVisible ? "translate-y-0" : "-translate-y-full"
        }`}>
        <div className="flex container px-4 m-auto font-semibold items-center justify-between py-3">
          <a href="#home" className="logo">
            <img src={Logo} alt="Website Logo" width={170} />
          </a>
          <div className="text-sm">
            <div className="hidden sm:block">
              <button
                className="border border-slate-400 font-medium px-6 py-3 tracking-widest hover:bg-slate-100"
                onClick={handleDownloadCV}>
                Download CV
              </button>
            </div>
            <div
              className="block sm:hidden cursor-pointer"
              onClick={translateHandler}>
              <CiMenuFries aria-label="Menu" className="text-3xl" />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="flex z-10 w-full container m-auto md:pt-32 pt-40 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 md:h-[90vh] items-center justify-center m-auto">
          <div>
            <h6 className="mb-4 text-md uppercase tracking-wide text-zinc-500">
              Welcome to my portfolio website
            </h6>

            <h1 className="text-3xl md:text-5xl font-bold mb-5">
              Hey folks, I&#39;m <br /> a{" "}
              <span className="text-yellow-400 text-2xl md:text-4xl font-bold uppercase">
                {typewriterComponent}
              </span>
            </h1>
            <p className="text-zinc-500 font-Raleway font-medium tracking-wide text-sm md:text-lg text-wrap sm:w-[90%]">
              Building a successful product is a challenge. I am highly
              energetic in user experience design, interfaces, and web
              development.
            </p>
            <div className="flex items-center mt-5">
              <a
                href="#contact"
                className="flex items-center gap-3 px-4 py-2 border border-slate-400 hover:bg-slate-100"
                aria-label="Hire me">
                Hire me <HiOutlineCursorArrowRays className="text-xl" />
              </a>
            </div>
          </div>

          {/* Animation Section */}
          <div className="p-4 flex items-center w-full justify-center">
            <div className="max-w-[90%] md:max-w-full">
              <Lottie animationData={CodingAnimation} loop={true} />
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-b container m-auto"></div>
    </div>
  );
};

export default Hero;
