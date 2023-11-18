import React from "react";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { increase, removeItem, decrease } from "../control/cardSlice";
import "./products.css";

function Products({ id, title, price, image, quentity }) {
  const dispatch = useDispatch();

  const { Quantity, cartItems, total } = useSelector((store) => store.card);
  return (
    <>
      <div className="card">
        <img src={image} alt="products-image" />
        <div>
          <h4>{title}</h4>
          <h4 id="price">{price} ₺</h4>
          <div className="iconButtons">
            <button
              onClick={() => {
                dispatch(increase(id));
              }}>
              <BsChevronUp />
            </button>
            <h4>{quentity}</h4>
            <button
              onClick={() => {
                dispatch(decrease(id));
              }}>
              <BsChevronDown />
            </button>
          </div>
        </div>
        <button
          id="deleteBtn"
          onClick={() => {
            dispatch(removeItem(id));
          }}>
          Sil
        </button>
      </div>
    </>
  );
}

export default Products;
