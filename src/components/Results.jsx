import React from "react";

const Results = ({ tipAmount, totalTip, isReset, setIsReset, setTips }) => {
  const handleResetClick = (e) => {
    e.preventDefault();
    setTips(0, 0);
    setIsReset((prev) => !prev);
  };

  return (
    <>
      <h3>Tip Amount : {tipAmount}</h3>
      <h3>Total Tip : {totalTip}</h3>
      <button onClick={handleResetClick}>RESET</button>
    </>
  );
};

export default Results;
