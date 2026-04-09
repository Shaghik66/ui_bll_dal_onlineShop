import { useContext } from "react";
import { ProductsBoxes } from "../../molecules/ProductsBoxes/ProductBoxes";
import { MyContext } from "../../../context/context";
import gif from "./../../../shared/gifs/loading.gif"
import style from "./ProductsContainer.module.css";

export function ProductsContainer() {
const products = useContext(MyContext)

  return (
    <>
      {products?.length ? (
        <section className={style.productsBoxSection}>
          {products?.map((product) => (
            <ProductsBoxes product={product} />
          ))}
        </section>
      ) : (
        <img src={gif} alt="gif" />
      )}
    </>
  );
}
