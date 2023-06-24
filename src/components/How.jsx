import React from "react";
import Button from "./Button";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.8,
      duration: 0.6,
    },
  },
};

const How = () => {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      className="w-[90%] sm:w-[80%] mx-auto "
    >
      <div className="w-full px-5 sm:px-5 md:px-10 py-10 bg-DarkViolet gap-8 flex justify-between items-center flex-col sm:flex-row">
        <h3 className=" text-center md:text-left text-white font-heading text-[40px] sm:text-[40px] md:text-[47px] sm:leading-[50px] leading-[40px]">
          Find out more <br className="hidden md:block" /> about how we work
        </h3>

        <Button
          text={" How we work"}
          styles={
            "border-[2px] sm:px-6 uppercase md:px-8  border-white text-white text-[18px] font-bold  bg-transparent hover:bg-white hover:text-black  "
          }
        />
      </div>
    </motion.section>
  );
};

export default How;
