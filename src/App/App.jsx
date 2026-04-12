import { useEffect, useReducer, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { reducer, initState } from "../store/store";
import { productApi } from "../api/api";
import { Home } from "../components/pages/Home/Home";
import { Products } from "../components/pages/Products/Products";
import { Layout } from "../components/templates/Layout/Layout";
import { Cart } from "../components/pages/Cart/Cart";
import { ProductContainer } from "../components/organisms/ProductContainer/ProductContainer";
import { MyContext } from "../context/context";
import { instance } from "../api/api";
import { useCart } from "../hooks/useCart";
import "./style/style.css";

export function App() {
  const [state, dispatch] = useReducer(reducer, initState);
  const [data, setData] = useState([]);
  const {
    cart,
    addToCart,
    increment,
    totalPrice,
    decrement,
    removeProduct,
    totalCount,
  } = useCart();
  const products = state.products.data;

  useEffect(() => {
    productApi.getResponse(dispatch);
    productApi.getResponseById(dispatch, 1);
    instance.get("/products").then((res) =>
      setData(
        res.data.data.map((product) => {
          return {
            ...product,
            count: 0,
            initPrice: product?.price,
          };
        }),
      ),
    );
  }, []);

  return (
    <main className="main">
      <MyContext.Provider
        value={{
          products,
          data,
          addToCart,
          cart,
          totalPrice,
          increment,
          decrement,
          removeProduct,
          totalCount,
        }}
      >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route
              path="*"
              element={
                <div>
                  <p>404 Error</p>
                </div>
              }
            />
          </Route>
        </Routes>
      </MyContext.Provider>
    </main>
  );
}
