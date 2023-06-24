import React from "react";
import Button from "./Button";
import { image } from "../constants";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 1.5, duration: 1 },
  },
};

const textVariants = {
  hidden: {
    x: -1000,
  },
  visible: {
    x: 0,
    transition: { delay: 1.1, duration: 1 },
  },
};

const imgVariants = {
  hidden: {
    x: 1000,
    scale: 0,
  },
  visible: {
    x: 0,
    scale: 1,
    transition: { delay: 1.1, duration: 1.5 },
  },
};

const imgOneVariants = {
  hover: {
    rotate: -5,
    transition: { duration: 1.5 },
  },
};

const Home = () => {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="bg-DarkViolet w-full sm:mt-5 mt-4 md:pt-10 "
    >
      <div className="flex flex-col-reverse md:flex-row mx-auto justify-between  w-full md:w-[90%] lg:w-[80%] sm:w-[85%] sm:py-8 ">
        <motion.div
          variants={textVariants}
          className="flex-1 text-white md:py-0 p-5  flex flex-col gap-y-6 justify-center md:items-start items-center"
        >
          <div className="w-[200px] h-[1px] bg-slate-300 mx-auto sm:mx-0"></div>
          <div>
            <h2 className="font-heading text-[40px] sm:text-[60px] md:text-[67px] sm:leading-[60px] leading-[40px]">
              Humanizing your insurance.
            </h2>
            <p className="mt-4 text-[23px]">
              Get your life insurance coverage easier and faster. We blend our
              expertise and technology to help you find the plan that’s right
              for you. Ensure you and your loved ones are protected.
            </p>
          </div>

          <Button
            text={" View plans"}
            styles={
              "border-[2px] sm:px-6 uppercase md:px-8  border-white text-white text-[18px] font-bold  bg-transparent hover:bg-white hover:text-black  "
            }
          />
        </motion.div>

        <motion.div variants={imgVariants} className="flex-1 flex justify-end">
          <motion.img
            variants={imgOneVariants}
            whileHover="hover"
            src={image.intro}
            alt="hero-img"
            className="hidden md:block absolute h-[75%] "
          />
          <img src={image.intro2} alt="" className="md:hidden block w-full " />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Home;
