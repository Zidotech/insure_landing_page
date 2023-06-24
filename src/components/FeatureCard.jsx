import React from "react";

const FeatureCard = ({ title, description, img, index }) => {
  return (
    <div className="flex flex-col mx-auto sm:mx-0  justify-start md:items-start items-center gap-y-4 md:mt-0 mt-5  max-w-[370px]">
      <img
        src={img}
        alt={title}
        className={`${index === 0 ? "w-[30%]" : "w-[30%]"} `}
      />
      <div className=" flex flex-col gap-y-3 text-center md:text-left md:px-0 px-5 ">
        <h2 className=" font-medium font-heading  md:text-[25px] text-[20px]">
          {title}
        </h2>
        <p className="text-[19px]">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
