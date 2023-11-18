import { useEffect } from "react";
import "./App.css";
import { Head } from "./component/Head";
import ProductList from "./component/ProductList";
import { calculate } from "./control/cardSlice";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const { Quantity, cartItems, total } = useSelector((store) => store.card);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculate());
  }, [cartItems]);

  return (
    <>
      <Head />
      <ProductList />
    </>
  );
}

export default App;
