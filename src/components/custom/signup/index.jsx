import React, { useState } from "react";
import "./style.css";
import { sigupUserApiCall } from "./api";

export default function Signup(props) {
  const [data, setData] = useState({name: "", username: "", password: "", address: "", contact: 0 });
  const [status, setStatus] = useState("");
  async function signupUser() {
    let res = await sigupUserApiCall(data);
    console.log(res)
    if (res.state) {
      setStatus("Accound Created");
      console.log(res);
      setData({name: "", username: "", password: "", address: "", contact: 0,
      });
    } else {
      setStatus("Failed to create Account, ", res.data);
    }
  }

  return (
    <div className="signup-container">
      <form className="form-fields" id="data-form">
        <span className="field-header">Sign Up</span>
        <span className="from-field">
          <label htmlfor="id-name" className="label">
            Name
          </label>
          <input
            id="id-username"
            name="name"
            type="text"
            placeholder=""
            className="box-text"
            required
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
        </span>
        <span className="from-field">
          <label htmlfor="id-name" className="label">
            Username
          </label>
          <input
            id="id-username"
            name="user-name"
            type="text"
            placeholder=""
            className="box-text"
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
            className="box-text"
            required
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
        </span>
        <span className="from-field">
          <label htmlfor="id-name" className="label">
            Adress
          </label>
          <input
            id="id-username"
            name="user-address"
            type="text"
            placeholder=""
            className="box-text"
            required
            onChange={(e) => setData({ ...data, address: e.target.value })}
          />
        </span>
        <span className="from-field">
          <label htmlfor="id-name" className="label">
            Contact
          </label>
          <input
            id="id-username"
            name="user-name"
            type="Number"
            placeholder=""
            className="box-text"
            required
            onChange={(e) => setData({ ...data, contact: e.target.value })}
          />
        </span>
        <input
          type="submit"
          className="box-text1"
          value="Submit"
          onClick={signupUser}
        />
        {status.length > 0 && <span>{status}</span>}
      </form>
    </div>
  );
}