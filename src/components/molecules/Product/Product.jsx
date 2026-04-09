import { useContext } from "react";
import { useParams } from "react-router-dom";
import { MyContext } from "../../../context/context";
import style from "./Product.module.css";

export function Product() {
  const products = useContext(MyContext)
  const { id } = useParams(1);

  const findProduct = products?.find((product) => {
    return product._id === +id;
  });

  return (
    <section className={style.productContainer}>
      <div>
        <img className={style.productImage} src={findProduct?.image} alt="" />
      </div>
      <div className={style.productInfoContainer}>
        <h1>{findProduct?.title}</h1>
        <p >{findProduct?.description}</p>
      </div>
    </section>
  );
}
