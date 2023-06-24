import React from "react";

const Button = ({ styles, text }) => {
  return (
    <div>
      <button type="button" className={`${styles}  py-2 px-8 `}>
        {text}
      </button>
    </div>
  );
};

export default Button;
