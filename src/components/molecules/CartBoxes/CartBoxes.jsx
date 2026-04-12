import { useContext } from "react";
import { RemoveCartButton } from "../../atoms/RemoveCartButton/RemoveCartButton";
import { MyContext } from "../../../context/context";
import style from "./CartBoxes.module.css";

export function CartBoxes() {
  const products = useContext(MyContext);

  return (
    <div>
      {products.cart?.map((c) => {
        return (
          <div className={style.cartBoxes} key={c._id}>
            <img
              className={style.productImage}
              src={c.image}
              alt="Product Image"
            />
            <div className={style.descriptionPricePart}>
              <h1>{c.title}</h1>
              <p>{`${c.price} $`}</p>
            </div>
            <div className={style.buttonsAndCountContainer}>
              <button
                className={style.incDecButtons}
                onClick={() => {
                  products.decrement(c._id);
                }}
              >
                -
              </button>{" "}
              <p className={style.productCount}>{c.count}</p>
              <button
                className={style.incDecButtons}
                onClick={() => {
                  products.increment(c._id);
                }}
              >
                +
              </button>
            </div>
            <RemoveCartButton id={c._id} />
            <p className={style.initPrice}>{c.initPrice}$</p>
          </div>
        );
      })}

      {products.totalPrice !== 0 ? (
        <p className={style.totalPriceP}>
          Total Price:
          <span className={style.totalPriceSpan}> {products.totalPrice}$</span>
        </p>
      ) : (
        ""
      )}
      
    </div>
  );
}
