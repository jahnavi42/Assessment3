import React,{useState} from "react";
import "./style.css";
import jwt from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { placeOrderApi } from "./api";



export default function OrderCard(props) { 
  const count = useSelector((store) => store.counter);
const token =localStorage.getItem("token");
const decoded = jwt(token);
  
   const [data, setData] = useState({
     username: "", itemname: "", itemdesc :""
   });
   const [status, setStatus] = useState("");
  async function placeOrder() {
     setData({
       username: decoded.sub.username,
       itemname: count.product.name,
       itemdesc: "added",
     });
     let res = await placeOrderApi(data);
     console.log(res);
     if (res.state) {
       setStatus("Accound Created");
       console.log(res);
       setData({ username: "", itemname: "", itemdesc: "" });
     } else {
       setStatus("Failed to add Item, ", res.data);
     }
   }

  let navigate = useNavigate();
    return (
      <div className="OrderCard-Container">
        <div className="Order-field1">
          <span className="Order-inside-field1">Deliver to:</span>
          <input
            id="id-username"
            name="user-name"
            type="text"
            placeholder=""
            className="Order-box-text"
            required
          />
        </div>
        <div className="Order-field2">
          <span className="order-f2-f1">Price detail</span>
          <span className="order-f2-f2"> price</span>
          <span className="order-f2-f3">200$</span>
          <span className="order-f2-f4">Total</span>
          <span className="order-f2-f5">200$</span>
        </div>
        <span
          className="Order-Place"
          onClick={() => {
            
             placeOrder() ;
            navigate("/allorders");
          }}
        >
          Place Order
        </span>
      </div>
    );
}