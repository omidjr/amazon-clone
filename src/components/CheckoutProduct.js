import React from "react";
import { useStateValue } from "../context/StateProvider";
import StarRateIcon from "@material-ui/icons/StarRate";

export const CheckoutProduct = ({ id, title, price, image, rating }) => {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt={title} />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__info-title">{title}</p>
        <p className="checkoutProduct__info-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__info-rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <StarRateIcon style={{ color: "#F7BA3D" }} />
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from basket</button>
      </div>
    </div>
  );
};
