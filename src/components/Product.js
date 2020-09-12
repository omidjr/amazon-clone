import React from "react";
import StarRateIcon from "@material-ui/icons/StarRate";
import { useStateValue } from "../context/StateProvider";

export const Product = ({ id, title, price, rating, image }) => {
  const [state, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        price,
        rating,
        image,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <StarRateIcon style={{ color: "#F7BA3D" }} />
            ))}
        </div>
      </div>
      <img src={image} alt={title} />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
};
