import { useEffect, useState } from "react";
import BasketContext from "./basketContext";

export const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    const localBasket = localStorage.getItem("basket");
    if (localBasket) setBasket([...JSON.parse(localBasket)]);
    else localStorage.setItem("basket", JSON.stringify([]));
  }, []);

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);

  //helper function
  const addToBasket = (item) => {
    const found = basket.find((b) => b.id == item.id);
    console.log("basket: ", basket);
    console.log("item: ", item);
    console.log("FOUND!: ", found);
    if (found) {
      const updatedBasket = basket.map((b) => {
        if (b.id == item.id) {
          b.quantity += 1;
          return b;
        } else {
          return b;
        }
      });
      setBasket([...updatedBasket]);
    } else {
      setBasket([...basket, { ...item, quantity: 1 }]);
    }
  };

  const clearBasket = () => {
    setBasket([]);
  };

  const removeFromBasket = (item) => {
    setBasket((prevBasket) => {
      return prevBasket.filter((b) => b.id != item.id);
    });
  };

  const decreaseQuantity = (item) => {
    setBasket((prevBasket) => {
      return prevBasket.map((b) => {
        if (b.id == item.id && b.quantity > 1) {
          b.quantity -= 1;
          return b;
        } else {
          return b;
        }
      });
    });
  };

  return (
    <BasketContext.Provider
      value={{
        basket,
        addToBasket,
        clearBasket,
        removeFromBasket,
        decreaseQuantity,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
};

export default BasketProvider;
