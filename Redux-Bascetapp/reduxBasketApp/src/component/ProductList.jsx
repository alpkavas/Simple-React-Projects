import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Products from "./Products";
import { clearCard } from "../control/cardSlice";

function ProductList() {
  const dispatch = useDispatch();
  const { Quantity, cartItems, total } = useSelector((store) => store.card);
  return (
    <div>
      {Quantity < 1 ? (
        <section
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <h2>Sepetim</h2>
          <h3 style={{ marginTop: "1.5rem" }}>Sepet şuan boş</h3>
        </section>
      ) : (
        <section
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <h2>Sepetim</h2>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              flexWrap: "wrap",
              margin: "50px",
            }}>
            {cartItems.map((item) => {
              return <Products key={item.id} {...item} />;
            })}
          </div>
          <footer>
            <hr />
            <div>
              <h4>
                Toplam Tutar: <span>{total} ₺</span>
              </h4>
            </div>
            <button
              style={{
                backgroundColor: "blue",
                color: "white",
                borderRadius: "35px",
                width: "200px",
                padding: "10px",
                margin: "10px",
                border: "none",
                cursor: "pointer",
              }}
              onClick={() => {
                dispatch(clearCard());
              }}>
              Sepeti Boşalt
            </button>
          </footer>
        </section>
      )}
    </div>
  );
}

export default ProductList;
