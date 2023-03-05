import React, { useEffect, useRef, useState } from "react";
import Button from "./ui/Button";
import styles from "./InputFields.module.css";

const InputFields = ({ setTips, isReset, setIsReset }) => {
  const [bill, setBill] = useState(0);
  const [peoples, setPeoples] = useState(0);
  const [tipPercent, setTipPercent] = useState(0);
  const [text, setText] = useState({
    bill: "",
    peoples: "",
  });

  const percentButtons = useRef();

  let tipAmount;
  let totalTip;

  const calcTip = () => {
    const percent = tipPercent / 100;
    tipAmount = ((bill / peoples) * percent).toFixed(2);
    totalTip = (tipAmount * peoples).toFixed(2);
  };
  const handlePercentInput = (e) => {
    e.preventDefault();
    Object.entries(percentButtons.current.children).forEach(([_, value]) => {
      if (value.classList.contains("active")) {
        value.classList.remove("active");
        return;
      }
    });
    e.target.classList.add("active");
    setTipPercent(parseFloat(e.target.value));
  };

  const validationCheck = (value, e) => {
    if (value <= 0) {
      e.target.classList.add(styles.invalid);
      e.target.previousSibling.classList.add(styles.visible);
      return;
    } else {
      e.target.previousSibling.classList.remove(styles.visible);
      e.target.classList.remove(styles.invalid);
    }
  };

  const handleInput = (e) => {
    e.preventDefault();
    const { value, name } = e.target;

    validationCheck(value, e);

    setText({ ...text, [name]: value });
    if (e.target.id === "bill") {
      setBill(parseFloat(e.target.value));
    } else if (e.target.id === "peoples") {
      setPeoples(parseFloat(e.target.value));
    }
  };
  if (bill !== 0 && peoples !== 0 && tipPercent !== 0) {
    calcTip();
  }

  useEffect(() => {
    if (tipAmount !== 0 && totalTip !== 0) {
      setTips(tipAmount, totalTip);
    }
  }, [totalTip]);

  useEffect(() => {
    if (isReset) {
      setText({
        bill: "",
        peoples: "",
      });
      setIsReset((prev) => !prev);
    }
  }, [isReset]);

  return (
    <div className={styles.input_wrap}>
      <section className={styles.input_section} onSubmit={handleInput}>
        <form action="" noValidate>
          <label htmlFor="bill" className={styles.label}>
            Bill
          </label>
          <span className={styles.form_alert}>Can't be zero</span>
          <input
            name="bill"
            id="bill"
            type="number"
            step="0.01"
            placeholder="0"
            value={text.bill}
            onChange={handleInput}
            className={styles.input_bill}
          />
        </form>
      </section>
      <section className={styles.input_section}>
        <p className={styles.label}>Select Tip %</p>
        <div className={styles.percent_field} ref={percentButtons}>
          <Button
            buttonText={"5%"}
            value={5}
            onClick={handlePercentInput}
            isDark={true}
          ></Button>
          <Button
            buttonText={"10%"}
            value={10}
            onClick={handlePercentInput}
            isDark={true}
          ></Button>
          <Button
            buttonText={"15%"}
            value={15}
            onClick={handlePercentInput}
            isDark={true}
          ></Button>
          <Button
            buttonText={"25%"}
            value={25}
            onClick={handlePercentInput}
            isDark={true}
          ></Button>
          <Button
            buttonText={"50%"}
            value={50}
            onClick={handlePercentInput}
            isDark={true}
          ></Button>
          <input
            type="number"
            placeholder="custom"
            onFocus={handlePercentInput}
            onChange={handlePercentInput}
            max="100"
          />
        </div>
      </section>
      <section className={styles.input_section} onSubmit={handleInput}>
        <form action="" noValidate>
          <label htmlFor="peoples" className={styles.label}>
            Number of People
          </label>
          <span className={styles.form_alert}>Can't be zero</span>
          <input
            type="number"
            name="peoples"
            id="peoples"
            min="1"
            placeholder="0"
            onChange={handleInput}
            noValidate
            value={text.peoples}
            className={styles.input_peoples}
          />
        </form>
      </section>
    </div>
  );
};

export default InputFields;
