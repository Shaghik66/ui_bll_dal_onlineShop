import { useContext } from "react";
import { ProductsBoxes } from "../../molecules/ProductsBoxes/ProductBoxes";
import { MyContext } from "../../../context/context";
import gif from "./../../../shared/assets/gifs/loading.gif"
import style from "./ProductsContainer.module.css";

export function ProductsContainer() {
const products = useContext(MyContext)

  return (
    <>
      {products.products?.length ? (
        <section className={style.productsBoxSection}>
          {products.products?.map((product) => (
            <ProductsBoxes product={product} key={product._id}/>
          ))}
        </section>
      ) : (
        <img src={gif} alt="gif" />
      )}
    </>
  );
}
