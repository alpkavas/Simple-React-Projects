import React from "react";
import "./head.css";
import { BsBasket } from "react-icons/bs";
import { useSelector } from "react-redux";

export const Head = () => {
  const { Quantity } = useSelector((store) => store.card);
  //console.log(useSelector((store) => store.card));
  return (
    <nav>
      <div className="basket-icon-counter">
        <h3>Alışveriş Sepetim</h3>
        <div className="icon-counter">
          <p id="bascetIcon">{Quantity}</p>
          <BsBasket />
        </div>
      </div>
    </nav>
  );
};
