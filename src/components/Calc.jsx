import React, { useState } from "react";
import InputFields from "./InputFields";
import Results from "./Results";

const Calc = () => {
  const [tipAmount, setTipAmount] = useState(0);
  const [totalTip, setTotalTip] = useState(0);
  const [isReset, setIsReset] = useState(false);

  const setTips = (tip, total) => {
    setTipAmount(tip);
    setTotalTip(total);
  };

  return (
    <>
      <InputFields
        setTips={setTips}
        isReset={isReset}
        setIsReset={setIsReset}
      />
      <Results
        tipAmount={tipAmount}
        totalTip={totalTip}
        isReset={isReset}
        setIsReset={setIsReset}
        setTips={setTips}
      />
    </>
  );
};

export default Calc;
