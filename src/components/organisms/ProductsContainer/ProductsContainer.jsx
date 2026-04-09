import { ProductsBoxes } from "../../molecules/ProductsBoxes/ProductBoxes";
import style from "./ProductsContainer.module.css";
import { useContext } from "react";
import { MyContext } from "../../../context/context";

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
        "hi"
      )}
    </>
  );
}
