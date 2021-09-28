import React from "react";

const Button = ({ text, removeTour, id }) => {
  return (
    <div className="btn" onClick={() => removeTour(id)}>
      {text}
    </div>
  );
};
export default Button;
