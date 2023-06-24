import React, { useState, useEffect } from "react";
import { image, navLinks } from "../constants";
import Button from "./Button";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    x: -500,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState(null);
  useEffect(() => {
    const scrollActive = () => {
      setActive(window.scrollY > 20);
    };
    window.addEventListener("scroll", scrollActive);
    return () => window.removeEventListener("scroll", scrollActive);
  }, [active]);

  return (
    <motion.nav
      initial={{ y: -250 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.2, type: "spring", stiffness: 90 }}
      className={`fixed w-full top-0 left-0 z-20  ${
        active ? "shadow-lg bg-GrayishWhite" : ""
      }`}
    >
      <div>
        <div
          className={`flex justify-between  mx-auto sm:justify-around  items-center md:px-5 px-9 ${
            active ? "sm:py-5 py-7 pb-5 transition-all duration-1000" : "pt-5"
          }`}
        >
          <img
            src={image.logo}
            alt="logo-icon"
            className="sm:w-[160px] w-[140px] md:w-[200px] cursor-pointer"
          />

          <div>
            <ul className="list-none md:flex hidden">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`${
                    index === navLinks.length - 1 ? "mr-0" : "md:mr-10 mr-7"
                  }`}
                >
                  <a
                    href={`#${nav.id}`}
                    className={`uppercase text-[20px] text-VeryDarkViolet ${
                      index === 0 ? "tracking-widest" : ""
                    } hover:text-VeryDarkViolet hover:font-bold`}
                  >
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <Button
            text={"  View plans"}
            styles={
              "border-[2px] sm:px-6 uppercase md:px-8 md:block hidden border-black text-[18px] font-bold hover:bg-black hover:text-white  "
            }
          />

          <img
            src={toggle ? image.close : image.menubar}
            alt="menu-bar"
            className="w-[38px] h-[38px] object-contain md:hidden "
            onClick={() => setToggle((prev) => !prev)}
          />

          {toggle && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className={` w-screen left-0 fixed top-20 h-full bg-VeryDarkViolet px-4 pt-10 flex flex-col  items-center`}
            >
              <ul className="list-none flex flex-col items-center">
                {navLinks.map((nav, index) => (
                  <li
                    key={nav.id}
                    className={`${
                      index === navLinks.length - 1 ? "mb-0" : "mb-4"
                    }`}
                  >
                    <a
                      href={`#${nav.id}`}
                      className={`uppercase text-[20px] text-white ${
                        index === 0 ? "tracking-widest" : ""
                      } hover:font-bold`}
                    >
                      {nav.title}
                    </a>
                  </li>
                ))}
              </ul>

              <Button
                text={"View plans"}
                styles={
                  "border-[2px] mt-6 uppercase w-[100%]  border-white text-[18px] font-bold  text-white  "
                }
              />
            </motion.div>
          )}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
