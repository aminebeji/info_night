import React from "react";

function CommonButton({ title, onClick }) {
  return <button className="btn" onClick={onClick}> {title} </button>;
}

export default CommonButton;
