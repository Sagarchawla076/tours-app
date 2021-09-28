import React, { useState } from "react";
import Button from "./Button";

const Tour = ({ tour, removeTour, i }) => {
  const [open, setOpen] = useState(false);
  const { id, name, info, image, price } = tour;
  const limitedInfo = info.slice(0, 240);
  const Info = open ? info : limitedInfo;
  //   console.log(removeTour);
  return (
    <div className="tour">
      <div className="tour__display">
        <img src={image} alt={name} className="tour__img" />
      </div>
      <div className="tour__content">
        <div className="tour__content--heading">
          <span className="tour-name">{name}</span>
          <span className="tour-price">${price}</span>
        </div>
        <div className="tour__content--detail">
          {Info}...
          <a
            className="link"
            href="/"
            onClick={() => {
              setOpen(!open);
            }}
          >
            {open ? "Read Less" : "Read More"}
          </a>
        </div>
      </div>
      <Button text="Not Interested" removeTour={removeTour} id={id} />
    </div>
  );
};
export default Tour;
