import React, { useState } from "react";
import "./style.css";
import { loginUserAPIcall} from "./api";
import { useNavigate } from "react-router-dom";
export default function Login(props) {
   const [data, setData] = useState({
     username: "",
     password: "",
   });
  const [status, setStatus] = useState("");
  const navigate = useNavigate();
     async function loginUser() {
       let res = await loginUserAPIcall(data);
       if (res.state) {
         localStorage.setItem("token", res.data.data);
         navigate("/search");
         setData({ username: "", password: "" });
       } else {
         setStatus("User not authorized", res.data);
       }
     }
  return (
    <div className="form-container">
      <form className="form-fields" id="data-form">
        <span className="field-header">Sign In</span>
        <span className="from-field">
          <label htmlfor="id-name" className="label">
            Username
          </label>
          <input
            id="id-username"
            name="user-name"
            type="text"
            placeholder=""
            className="input-box-text"
            required
            onChange={(e) => setData({ ...data, username: e.target.value })}
          />
        </span>
        <span className="from-field">
          <label htmfor="id-name" className="label">
            Password
          </label>
          <input
            id="id-password"
            name="user-name"
            type="password"
            placeholder=""
            className="input-box-text"
            required
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
        </span>
        <input
          type="submit"
          className="input-box-text1"
          value="Submit"
          onClick={loginUser}
        />
      </form>
    </div>
  );
}