import { NavLink } from "react-router-dom";
import style from "./ProductBoxes.module.css";
import { BuyButton } from "../../atoms/BuyButton/BuyButton";

export function ProductsBoxes({ product }) {
  return (
    <div className={style.productBoxesMainContainer}>
      <div className={style.boxImageContainer}>
        <NavLink to={`/products/${product._id}`}>
          <img
            className={style.productImage}
            src={product.image}
            alt="Product Image png"
          />
        </NavLink>
      </div>
      <div className={style.productBoxesContainer}>
        <h1 className={style.boxTitle}>{product.title}</h1>
        <p className={style.priceParagraph}>
          Price <span className={style.priceSpan}>{`${product.price} $`}</span>
        </p>
        <p className={style.boxCategory}>{`Category: ${product.category}`}</p>
        <NavLink to={`/products/${product._id}`}>
          <BuyButton />
        </NavLink>
      </div>
    </div>
  );
}
