import React from "react";

function CommonButton({ title, onClick }) {
  return <button onClick={onClick}> {title} </button>;
}

export default CommonButton;
