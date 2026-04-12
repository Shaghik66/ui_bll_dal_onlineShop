import style from "./BuyButton.module.css";

export function BuyButton({ findProduct, addToCart }) {
  return (
    <>
      <button
        className={style.buyButton}
        onClick={() => addToCart(findProduct)}
      >
        Buy
      </button>
    </>
  );
}
