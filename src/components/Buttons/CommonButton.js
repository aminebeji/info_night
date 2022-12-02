import React from "react";

function CommonButton({ title, onClick,content }) {
  return <button className={content ? "obtn" : "nbtn"} onClick={onClick}>  <b>{title}</b> </button>;
}

export default CommonButton;
