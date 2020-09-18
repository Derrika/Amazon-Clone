import React from "react";

import "./CheckoutBasket.css";
import { useStateValue } from "../StateProvider";

function CheckoutBasket({ id, title, price, rating, image }) {
  // eslint-disable-next-line no-unused-vars
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    //remove items from the basket/shopping cart
    dispatch({
      type: "REMOVE_ITEM_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutBasket">
      <img className="checkoutBasket__image" src={image} alt="" />

      <div className="checkoutBasket__info">
        <p className="checkoutBasket__title">{title}</p>
        <p className="checkoutBasket__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutBasket__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>
                <span role="img" aria-label="star">
                  ⭐
                </span>
              </p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from Basket</button>
      </div>
    </div>
  );
}

export default CheckoutBasket;
