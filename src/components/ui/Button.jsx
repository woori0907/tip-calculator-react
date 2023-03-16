import React from "react";
import "./Button.css";

const Button = ({ buttonText, onClick, isDark, value }) => {
  return (
    <>
      <button
        className={isDark ? "dark_button" : "light_button"}
        onClick={onClick}
        value={value}
      >
        {buttonText}
      </button>
    </>
  );
};

export default Button;
