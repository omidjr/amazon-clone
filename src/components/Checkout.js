import React from "react";
import { Subtotal } from "./Subtotal";
import { useStateValue } from "../context/StateProvider";
import { CheckoutProduct } from "./CheckoutProduct";

export const Checkout = () => {
  const [{ basket, user }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <div>
          {basket?.length === 0 ? (
            <div className="checkout__title">
              <h3>Hello, {user?.email}</h3>
              <h2>Your shopping basket is empty</h2>
              <p>
                You have no items in your basket. To buy one or more items,
                click 'Add to basket' next to the item
              </p>
            </div>
          ) : (
            <div>
              <h2 className="checkout__title">Your shopping basket</h2>
              {basket.map((item) => (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              ))}
            </div>
          )}
        </div>
      </div>
      {basket.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  );
};
