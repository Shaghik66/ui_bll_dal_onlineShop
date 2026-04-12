import { useState } from "react";

export function useCart() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    let check = false;
    cart.forEach((c) => {
      if (c._id === product._id) {
        check = true;
        setCart((prev) =>
          prev.map((c) => {
            if (c._id === product._id) {
              const newCount = c.count + 1;
              return {
                ...c,
                count: newCount,
                initPrice: c?.price * newCount,
              };
            } else {
              return c;
            }
          }),
        );
      }
    });
    if (!check) {
      setCart([...cart, { ...product, count: 1 }]);
    }
  };

  const increment = (id) => {
    return setCart((prev) =>
      prev.map((c) => {
        if (c._id === id) {
          const newCount = c.count + 1;
          return {
            ...c,
            count: newCount,
            initPrice: c?.price * newCount,
          };
        } else {
          return c;
        }
      }),
    );
  };

  const totalPrice = cart.reduce((acc, value) => {
    return Math.ceil(value.initPrice + acc);
  }, 0);
  const totalCount = cart.reduce((acc, value) => {
    return Math.ceil(value.count + acc);
  }, 0);

  const decrement = (id) => {
    return setCart((prev) =>
      prev.map((c) => {
        if (c._id === id) {
          const newCount = Math.max(c.count - 1, 1);
          const newInitPrice = Math.max(c.initPrice - c.price, c.price);
          return {
            ...c,
            count: newCount,
            initPrice: newInitPrice,
          };
        } else {
          return c;
        }
      }),
    );
  };

  const removeProduct = (id) => {
    setCart(
      cart?.filter((c) => {
        return c._id !== id;
      }),
    );
  };

  return {
    cart,
    addToCart,
    increment,
    totalPrice,
    decrement,
    removeProduct,
    totalCount,
  };
}
