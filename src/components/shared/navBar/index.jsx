import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import cartIcon from "../../../assests/cartIcon.svg";
import searchIcon from "../../../assests/searchIcon.svg";
import { useSelector, useDispatch } from "react-redux";
export default function NavBar(props) {
  const token = localStorage.getItem("token");
  const count = useSelector((store) => store.counter);
  let navigate = useNavigate();
  const {
    title = "ALL-IN-ONE",
    Screen1 = "Clothes",
    Screen2 = "Electronic",
    Screen3 = "Kids",
    SearchIcon = searchIcon,
    Screen6 = "Signin",
    Screen7 = "Signup",
    CartIcon = cartIcon,
  } = props;

  return (
    <div className="NavBar-container">
      <span className="NavBar-left-cont">
        <p className="NavBar-title" onClick={() => navigate("/")}>
          {title}
        </p>
        <p className="Mob-icon" onClick={() => navigate("/clothes")}>
          {Screen1}
        </p>
        <p className="Mob-icon" onClick={() => navigate("/electronics")}>
          {Screen2}
        </p>
        <p className="Mob-icon">{Screen3}</p>
      </span>
      <span className="NavBar-right-cont">
        <img
          src={SearchIcon}
          alt=""
          className="NavBar-icon"
          onClick={() => navigate("/search")}
        />
        <p className="Mob-icon" onClick={() => navigate("/login")}>
          {Screen6}
        </p>
        <p className="Mob-icon" onClick={() => navigate("/signup")}>
          {Screen7}
        </p>
        <span className="icon-container">
          <img
            src={CartIcon}
            alt=""
            className="NavBar-icon"
            onClick={() => navigate("/cart")}
          />
          {count.sizeOfCart > 0 && (
            <p className="NavBar-icon-tooltip">{count.sizeOfCart}</p>
          )}
        </span>
        {!token ? 
          <span></span>
         : (
          <span onClick={() => navigate("/allorders")}>Order</span>
        )}
      </span>
    </div>
  );
}