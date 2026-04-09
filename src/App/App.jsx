import { useEffect, useReducer } from "react";
import { Route, Routes } from "react-router-dom";
import { reducer, initState } from "../store/store";
import { productApi } from "../api/api";
import { Home } from "../components/pages/Home/Home";
import { Products } from "../components/pages/Products/Products";
import { Layout } from "../components/templates/Layout/Layout";
import { ProductContainer } from "../components/organisms/ProductContainer/ProductContainer";
import { MyContext } from "../context/context";
import "./style/style.css";

export function App() {
  const [state, dispatch] = useReducer(reducer, initState);

  useEffect(() => {
    productApi.getResponse(dispatch);
    productApi.getResponseById(dispatch, 1);
  }, []);

  return (
    <main className="main">
      <MyContext.Provider value={state.products.data}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/products"
            element={<Products  />}
          />
          <Route path="*" element={<div><p>404 Error</p></div>} />
          <Route
            path="/products/:id"
            element={<ProductContainer />}
          />
        </Route>
      </Routes>
      </MyContext.Provider>
    </main>
  );
}
