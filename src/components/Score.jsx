import React, { useState } from "react";
import ReactStars from "react-stars";
const Score = ({ currentScore }) => {
  return (
    <ReactStars
      count={5}
      edit={false}
      value={currentScore}
      size={55}
      color2={"#ffd700"}
    />
  );
};

export default Score;
