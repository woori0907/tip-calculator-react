import React, { useEffect, useState } from "react";
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

  let tipAmount;
  let totalTip;

  const calcTip = () => {
    const percent = tipPercent / 100;
    tipAmount = ((bill / peoples) * percent).toFixed(2);
    totalTip = (tipAmount * peoples).toFixed(2);
  };
  const handlePercentInput = (e) => {
    e.preventDefault();

    setTipPercent(parseFloat(e.target.value));
  };
  const handleInput = (e) => {
    const { value, name } = e.target;
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
      <form action="">
        <label htmlFor="bill">Bill</label>
        <input
          name="bill"
          id="bill"
          type="number"
          onChange={handleInput}
          value={text.bill}
        />
        <section>
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
            onChange={handlePercentInput}
            max="100"
          />
        </section>
        <label htmlFor="peoples">Number of People</label>
        <input
          type="number"
          name="peoples"
          id="peoples"
          value={text.peoples}
          onChange={handleInput}
        />
      </form>
    </div>
  );
};

export default InputFields;
