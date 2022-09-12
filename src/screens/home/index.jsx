import React,{useState,useEffect} from "react";
import { Card, NavBar } from '../../components';
import "./style.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
export default function Home(props) { 
 
  const count = useSelector((store) => store.counter);
  
    return (
      <div className="Home-Section1">
        <div className="Section1-title">
          <span className="title-name">Electronics</span>
          <span className="title-desc">Electronics</span>
        </div>

        <div className="Product-Section1">
          {count.listOfAllElectronic.map((item) => {
            return <Card thatitem={item} ident={item.id} />;
          })}
        </div>

        <div className="Section1-title">
          <span className="title-name">Clothes</span>
          <span className="title-desc">Clothes</span>
        </div>

        <div className="Product-Section1">
          {count.listOfAllClothes.map((item) => {
            return <Card thatitem={item} ident={item.id} />;
          })}
        </div>
        <div className="Section1-title">
          <span className="title-name">Toys</span>
          <span className="title-desc">Toys</span>
        </div>

        <div className="Product-Section1">
          {count.listOfAllToys.map((item) => {
            return (
              <Card thatitem={item} ident={item.id} />
            );
          })}
        </div>
      </div>
    );
}