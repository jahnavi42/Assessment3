import React,{useState,useEffect} from "react";
import "./style.css";

import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { AllOrderCard } from "../../components";
import jwt from "jwt-decode";

import { Ordercall } from "./api";
export default function AllOrderScreen(props) {
  const token = localStorage.getItem("token");
  const decoded = jwt(token);
  console.log(decoded);
  const [data, setData] = useState({
    username: decoded.sub.username,
  });
const [status, setStatus] = useState("");
  async function loginUser() {
    let res = await Ordercall(data);
    if (res.state) {
      localStorage.setItem("token", res.data.data);
      
    } else {
      setStatus("User not authorized", res.data);
    }
  }
  useEffect(() => {
    loginUser()
  }, []);
  
  
  useEffect(() => {
    loginUser();
    
  }, []);
  return (
    <div className="AllOrderScreen-Container">
      {decoded.sub.data[0].message.items.map((item) => {
        return <AllOrderCard />
      })
      }
    </div>
  );
}