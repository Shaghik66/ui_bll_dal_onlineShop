import { useContext } from "react";
import { useParams } from "react-router-dom";
import { MyContext } from "../../../context/context";
import { BuyButton } from "../../atoms/BuyButton/BuyButton";
import gif from "../../../shared/assets/gifs/loading.gif"
import style from "./Product.module.css";

export function Product() {
  const products = useContext(MyContext);
  const { id } = useParams(1);

  const findProduct = products.data?.find((product) => {
    return product?._id === +id;
  });

  return (<>{products.data.length ?
    <section className={style.productContainer}>
      <div className={style.imageContainer}>
        <img className={style.productImage} src={findProduct?.image} alt="" />
      </div>
      <div className={style.productInfoContainer}>
        <h1 className={style.productTitle}>{findProduct?.title}</h1>
        <hr />
        <p className={style.productPrice}>
          Price <span className={style.productPriceSpan}>{`${findProduct?.price} $`}</span>
        </p>
        <hr />
        <p className={style.productDescription}>{findProduct?.description}</p>
        <div>
          <BuyButton addToCart={products.addToCart} findProduct={findProduct} />
        </div>
      </div>
    </section> : <><img src={gif} alt="Loading Gif" /></>}</>
  );
}
