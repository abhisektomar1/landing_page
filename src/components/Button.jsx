import React from "react";

const Button = ({ styles, text }) => (
  <button type="button" className={`py-4 px-6 z-[50] font-poppins font-medium text-[18px] text-primary bg-white rounded-[10px] outline-grey ${styles}`}>
    {
      text ? text : "Get Started"
    }
  </button>
);

export default Button;
