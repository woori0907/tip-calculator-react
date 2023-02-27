import React, { useEffect, useState } from "react";

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
    <div>
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
