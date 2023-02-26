import React, { useState } from "react";
import InputFields from "./InputFields";
import Results from "./Results";

const Calc = () => {
  const [tipAmount, setTipAmount] = useState(0);
  const [totalTip, setTotalTip] = useState(0);

  const setTips = (tip, total) => {
    console.log(`tip Amount : ${tip}`);
    console.log(`total : ${total}`);
    setTipAmount(tip);
    setTotalTip(total);
  };

  return (
    <>
      <InputFields setTips={setTips} />
      <Results tipAmount={tipAmount} totalTip={totalTip} />
    </>
  );
};

export default Calc;
