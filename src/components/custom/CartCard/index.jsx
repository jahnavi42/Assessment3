import React from "react";
import "./style.css";
import { detailing } from "../../../redux/todoSlice";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import {
  incrementCart,
  decrementCart,
  handledecrese1,
  handleincrese1,
  handleproduct2,
  handleremove2,
} from "../../../redux/todoSlice";

export default function CartCard(props) {
  const token = localStorage.getItem("token");
  const count = useSelector((store) => store.counter);
  const { ident } = props;
  let navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className="Cart-Container">
      <img
        src={count.listOfAllObject.find((item) => item.id === ident).prodimage1}
        alt=""
        className="Cart-img"
        onClick={() => {
          navigate("/detail");
          dispatch(detailing(ident));
        }}
      />
      <span
        className="Cart-Name"
        onClick={() => {
          navigate("/detail");
          dispatch(detailing(ident));
        }}
      >
        {count.listOfAllObject.find((item) => item.id === ident).name}
      </span>
      <span
        className="Signin-bonus"
        onClick={() => {
          navigate("/login");
        }}
      >
        Get Extra 5% OFF! Signin First
      </span>

      <span className="Cart-Detail">
        {!token
          ? count.listOfAllObject.find((item) => item.id === count.productID)
              .price.WOSignin
          : count.listOfAllObject.find((item) => item.id === count.productID)
              .price.WithSignin}
      </span>

      {!token ? (
        <span className="Cart-Discount">
          10%
          <br />
          OFF
        </span>
      ) : (
        <span className="Cart-Discount">
          15%
          <br />
          OFF
        </span>
      )}
      <span>
        {
          count.listOfAllObject.find((item) => item.id === count.productID)
            .discountprice
        }
      </span>
      <span className="item-in-cart">
        <p
          className="item-remove-button"
          onClick={() => {
            if (
              count.listOfAllObject.find((item) => item.id === count.productID)
                .quantity > 0
            ) {
              dispatch(decrementCart());
              dispatch(handledecrese1(count.productID));
              dispatch(handleremove2(count.product));
            }
          }}
        >
          -
        </p>
        <p className="item-quantity">
          {
            count.listOfAllObject.find((item) => item.id === count.productID)
              .quantity
          }
        </p>
        <p
          className="item-add-button"
          onClick={() => {
            dispatch(incrementCart());
            dispatch(handleincrese1(count.productID));
            dispatch(handleproduct2(count.product));
          }}
        >
          +
        </p>
      </span>
    </div>
  );
}