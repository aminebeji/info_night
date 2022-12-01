import React from "react";
import CommonButton from "../components/Buttons/CommonButton";

function NavBar() {
  return (
    <div>
      <CommonButton
        title="Click Me !"
        onClick={() => {
          console.log("Click me !");
        }}
      />
    </div>
  );
}

export default NavBar;
