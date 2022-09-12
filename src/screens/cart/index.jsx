import React, { useEffect } from "react";
import "./style.css"
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { CartCard } from "../../components";
export default function Cart(props) {
    const navigate = useNavigate();
  const location = useLocation();
    const count = useSelector((store) => store.counter);
    useEffect(() => {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login");
      }
    }, []);
    return (
      <div className="CartScreen-Containers">
        {count.listOfCartOjbect.length === 0 ? (
          <p>No items in cart</p>
        ) : (
          count.listOfCartOjbect.map((item) => {
            return (
              <CartCard ident={item.id} />
            );
          })
        )}
      </div>
    );
}