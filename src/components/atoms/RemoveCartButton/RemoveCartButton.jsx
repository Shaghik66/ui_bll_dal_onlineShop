import { useContext } from "react";
import { MyContext } from "../../../context/context";
import style from "./RemoveCartButton.module.css";

export function RemoveCartButton({ id }) {
  const removeProduct = useContext(MyContext);
  return (
    <>
      <button
        className={style.removeButton}
        onClick={() => {
          removeProduct.removeProduct(id);
        }}
      >
        X <span className={style.removeButtonSpan}>Remove</span>
      </button>
    </>
  );
}
