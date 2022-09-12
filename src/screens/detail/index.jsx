import React from "react";
import "./style.css";
import {onSearchChanging} from "../../redux/todoSlice"
import { Card } from "../../components";
import { useSelector, useDispatch } from "react-redux";
import ProdSpecf from "../../components/custom/prodSpecf";
import { useState } from "react";
export default function ProductDetail(props) { 
   const count = useSelector((store) => store.counter);
    return (
        <div className="">
            <ProdSpecf />
        </div>
    );
}