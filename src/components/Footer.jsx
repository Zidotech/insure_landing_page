import React from "react";
import { IoLogoInstagram, IoLogoTwitter } from "react-icons/io";
import { GrFacebook, GrPinterest } from "react-icons/gr";
import { image, footerLinks } from "../constants";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.1,
      duration: 0.4,
      staggerChildren: 0.8,
      when: "beforeChildren",
    },
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const Footer = () => {
  return (
    <section>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        className="flex flex-col sm:w-[80%] mx-auto "
      >
        {/* //* Top item */}
        <motion.div
          variants={childVariants}
          className="flex flex-col px-5 sm:px-0 xs:flex-row justify-center gap-y-6 xs:justify-between items-center"
        >
          {/* Logo */}
          <div className="flex-1">
            <img
              src={image.logo}
              alt="logo-icon"
              className="sm:w-[160px] w-[140px] md:w-[200px] cursor-pointer  "
            />
          </div>

          {/* Social media */}
          <div className="flex justify-end footer_links-icons flex-1 ">
            <GrFacebook className=" mr-3" />
            <IoLogoTwitter className=" mr-3" />
            <GrPinterest className=" mr-3" />
            <IoLogoInstagram />
          </div>
        </motion.div>

        {/* //* bottom item // */}
        <motion.div
          variants={childVariants}
          className="w-full px-4 sm:px-0 flex flex-row justify-between flex-wrap  mt-10 pt-6 border-t-[1px] border-t-DarkGrayishViolet"
        >
          {footerLinks.map((footerlink) => (
            <div
              key={footerlink.title}
              className={`flex flex-col  my-4 min-w-[150px]`}
            >
              <h4 className="font-raleway uppercase font-medium text-[20px] leading-[27px] text-DarkGrayishViolet">
                {footerlink.title}
              </h4>

              <ul className="list-none mt-7">
                {footerlink.links.map((link, index) => (
                  <li
                    key={link.name}
                    className={`font-raleway uppercase font-normal text-[18px] leading-[24px] cursor-pointer ${
                      index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                    }`}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Footer;
