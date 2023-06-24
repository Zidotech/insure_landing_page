import React from "react";
import FeatureCard from "./FeatureCard";
import { featureCards } from "../constants";
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

const Features = () => {
  return (
    <section>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        className="w-full  sm:w-[80%] mx-auto flex flex-col"
      >
        <motion.div
          variants={childVariants}
          className=" flex flex-col gap-y-6 justify-center text-center md:text-left md:items-start items-center"
        >
          <div className="w-[200px] h-[1px] bg-slate-300 mx-auto sm:mx-0"></div>
          <h2 className="text-stone-900 text-[50px] font-heading">
            We’re different
          </h2>
        </motion.div>

        <motion.div
          variants={childVariants}
          className="flex mt-5 md:flex-row  flex-wrap justify-center items-center sm:justify-around sm:items-start"
        >
          {featureCards.map((card, index) => (
            <FeatureCard key={card.id} {...card} index={index} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Features;
