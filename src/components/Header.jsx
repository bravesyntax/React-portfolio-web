import React, { useState } from "react";
import { Link } from "react-scroll";
import { RiHomeSmileLine } from "react-icons/ri";
import { TbSettingsCode } from "react-icons/tb";
import { SiCodementor } from "react-icons/si";
import { CiFileOn } from "react-icons/ci";
import { FaUsersLine } from "react-icons/fa6";
import { RiContactsBookLine } from "react-icons/ri";

const Header = ({ setHideMenu }) => {
  const [active, setActive] = useState("home");

  return (
    <div className="">
      <div className="flex py-4 flex-col ">
        <div className="flex flex-col gap-2">
          {[
            {
              id: "home",
              label: "Home",
              icon: <RiHomeSmileLine className="text-lg" />,
            },
            {
              id: "features",
              label: "Features",
              icon: <TbSettingsCode className="text-lg" />,
            },
            {
              id: "resume",
              label: "Resume",
              icon: <CiFileOn className="text-lg" />,
            },
            {
              id: "portfolio",
              label: "Portfolio",
              icon: <SiCodementor className="text-lg" />,
            },

            {
              id: "clients",
              label: "Clients",
              icon: <FaUsersLine className="text-lg" />,
            },
            {
              id: "contact",
              label: "Contact",
              icon: <RiContactsBookLine className="text-lg" />,
            },
          ].map((item) => (
            <Link
              key={item.id}
              to={item.id}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              activeClass="text-blue-500"
              className={`flex items-center w-full px-4 py-[8px] ${
                active === item.id ? "text-blue-500" : "text-black"
              } text-md capitalize hover:text-blue-500 transition-all ease-in font-mono flex items-center gap-4  cursor-pointer`}
              onSetActive={() => setActive(item.id)}
              onClick={() => setHideMenu("translate-x-[100%]")}>
              <span
                className={`text-lg hover:text-blue-500 p-2  ${
                  active === item.id
                    ? "text-blue-500 border-black border-b "
                    : "text-slate-400"
                }`}>
                {item.icon}
              </span>
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
