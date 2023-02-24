import React, { useState } from "react";

const InputFields = () => {
  const [bill, setBill] = useState(0);
  const [peoples, setPeoples] = useState(0);
  const [tipPercent, setTipPercent] = useState(0);
  const calcTip = () => {
    const percent = parseFloat(tipPercent) / 100;
    const tipAmount = (bill / peoples) * percent;
    console.log(`bill: ${bill}`);
    console.log(`peoples: ${peoples}`);
    console.log(`percent:${percent}`);
    console.log(`tip Amount : ${tipAmount.toFixed(2)}`);
    console.log(`total : ${(tipAmount * peoples).toFixed(2)}`);
  };
  const handlePercentInput = (e) => {
    e.preventDefault();
    setTipPercent(e.target.value);
  };
  const handleInput = (e) => {
    console.log(e.target.id);
    if (e.target.id === "bill") {
      setBill(parseFloat(e.target.value));
    } else if (e.target.id === "peoples") {
      setPeoples(parseFloat(e.target.value));
    }
  };
  if (bill !== 0 && peoples !== 0 && tipPercent !== 0) {
    calcTip();
  }
  return (
    <div>
      <form action="">
        <label htmlFor="bill">Bill</label>
        <input id="bill" type="number" onChange={handleInput} />
        <section>
          <button onClick={handlePercentInput} value="5">
            5%
          </button>
          <button onClick={handlePercentInput} value="10">
            10%
          </button>
          <button onClick={handlePercentInput} value="15">
            15%
          </button>
          <button onClick={handlePercentInput} value="25">
            25%
          </button>
          <button onClick={handlePercentInput} value="50">
            50%
          </button>
          <input
            type="number"
            placeholder="custom"
            onChange={handlePercentInput}
            max="100"
          />
        </section>
        <label htmlFor="peoples">Number of People</label>
        <input type="number" name="" id="peoples" onChange={handleInput} />
      </form>
    </div>
  );
};

export default InputFields;
