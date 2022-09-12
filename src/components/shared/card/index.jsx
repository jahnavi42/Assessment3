import React from "react";
import "./style.css";
import {
  detailing,
  onSearchChanging,
  incrementCart,
  decrementCart,
  handledecrese1,
  handleincrese1,
  detailingProd,
} from "../../../redux/todoSlice";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
export default function Card(props) {
  const token = localStorage.getItem("token");
  const count = useSelector((store) => store.counter);
  let navigate = useNavigate();
  const { detailingp, thatitem, ident } = props;
  const dispatch = useDispatch();
  return (
    <div className="Card-Container">
      <img
        src={count.listOfAllObject.find((item) => item.id === ident).prodimage1}
        alt=""
        className="Card-img"
        onClick={() => {
          navigate("/detail");
          dispatch(detailing(ident));
          dispatch(detailingProd(thatitem));
        }}
      />
      <span
        className="Card-Name"
        onClick={() => {
          navigate("/detail");
          dispatch(detailing(ident));
          dispatch(detailingProd(thatitem));
        }}
      >
        {count.listOfAllObject.find((item) => item.id === ident).name}
      </span>
      {!token ? (
        <span
          className="Signin-bonus"
          onClick={() => {
            navigate("/login");
          }}
        >
          Get Extra 5% OFF! Signin First
        </span>
      ) : (
        <span
          className="Signin-bonus"
          onClick={() => {
            navigate("/login");
          }}
        >
          Your 5% Discount Bonus applied
        </span>
      )}
      

      <span
        className="Card-Detail"
        onClick={() => {
          navigate("/detail");
          dispatch(detailing(ident));
          dispatch(detailingProd(thatitem));
        }}
      >
        Explore More
      </span>

      {!token ? (
        <span className="Card-Discount">
          10%
          <br />
          OFF
        </span>
      ) : (
        <span className="Card-Discount">
          15%
          <br />
          OFF
        </span>
      )}
    </div>
  );
}