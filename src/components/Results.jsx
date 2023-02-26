import React from "react";

const Results = ({ tipAmount, totalTip }) => {
  const handleResetButton = () => {};
  return (
    <>
      <h3>Tip Amount : {tipAmount}</h3>
      <h3>Total Tip : {totalTip}</h3>
      <button onClick={handleResetButton}>RESET</button>
    </>
  );
};

export default Results;
