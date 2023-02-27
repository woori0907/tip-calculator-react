import React from "react";
import Button from "./ui/Button";
import styles from "./Results.module.css";

const Results = ({ tipAmount, totalTip, isReset, setIsReset, setTips }) => {
  const handleResetClick = (e) => {
    e.preventDefault();
    setTips(0, 0);
    setIsReset((prev) => !prev);
  };

  return (
    <div className={styles.result_wrap}>
      <h3>Tip Amount : {tipAmount}</h3>
      <h3>Total Tip : {totalTip}</h3>
      <Button
        buttonText={"RESET"}
        onClick={handleResetClick}
        isDark={false}
      ></Button>
    </div>
  );
};

export default Results;
