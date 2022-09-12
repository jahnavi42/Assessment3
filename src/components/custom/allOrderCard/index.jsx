import React,{useState} from "react";
import "./style.css";
import { detailing } from "../../../redux/todoSlice";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import jwt from "jwt-decode";

import { OrderCancelcall, placeOrderApi } from "./api";
export default function AllOrderCard(props) {
  const count = useSelector((store) => store.counter);
  const token = localStorage.getItem("token");
  const decoded = jwt(token);

  const [data, setData] = useState({
    username: "",
    itemname: "",
    itemdesc: "",
  });
  const [status, setStatus] = useState("");
  async function RemoveItem() {
    let res = await OrderCancelcall(data);
    if (res.state) {
      localStorage.setItem("token", res.data.data);
    } else {
      setStatus("User not authorized", res.data);
    }
  }
  return (
    <div className="AllOrderCard-Container">
      <span className="AllOrderCard-name">Order name</span>
      <span className="AllOrderCard-desc">Order desc</span>
      <span className="AllOrderCard-button">Cancel Order</span>
    </div>
  );
}