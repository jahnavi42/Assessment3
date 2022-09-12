import React, { useState, useEffect } from "react";
import { Card, NavBar } from "../../components";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
export default function ClothesScreen(props) {
  const count = useSelector((store) => store.counter);

  return (
    <div className="Home-Section1">
      <div className="Section1-title">
        <span className="title-name">Asus : The Best Laptop</span>
        <span className="title-desc">Electronics</span>
      </div>

      <div className="Product-Section1">
        {count.listOfAllElectronic.map((item) => {
          return <Card thatitem={item} ident={item.id} />;
        })}
      </div>

      <div className="Section1-title">
        <span className="title-name">Lenvo Laptops</span>
        <span className="title-desc">Lenvo The Best Ever Laptop</span>
      </div>

      <div className="Product-Section1">
        {count.listOfAllLenvo.map((item) => {
          return <Card thatitem={item} ident={item.id} />;
        })}
      </div>
      <div className="Section1-title">
        <span className="title-name">Dell Laptop</span>
        <span className="title-desc">Dell Laptop the best Ever</span>
      </div>

      <div className="Product-Section1">
        {count.listOfAllDell.map((item) => {
          return <Card thatitem={item} ident={item.id} />;
        })}
      </div>
    </div>
  );
}