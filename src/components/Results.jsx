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
    <section className={styles.result_wrap}>
      <div className={styles.result}>
        <div className={styles.label}>
          <p className={styles.label_title}>Tip Amount</p>
          <p className={styles.label_desc}>/ person</p>
        </div>
        <h3>{tipAmount ? tipAmount : 0.0}</h3>
      </div>

      <div className={styles.result}>
        <div className={styles.label}>
          <p className={styles.label_title}>Total</p>
          <p className={styles.label_desc}>/ person</p>
        </div>
        <h3>{totalTip ? totalTip : 0.0}</h3>
      </div>
      <Button
        buttonText={"RESET"}
        onClick={handleResetClick}
        isDark={false}
      ></Button>
    </section>
  );
};

export default Results;
