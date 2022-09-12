import React from "react";
import "./style.css";
import {onSearchChanging} from "../../redux/todoSlice"
import { Card } from "../../components";
import { useSelector, useDispatch } from "react-redux";
export default function Search() {
    const count = useSelector((store) => store.counter);
    const dispatch = useDispatch();
    return (
      <div className="Search-Container">
        <div className="Search-header">
          <span className="Search-Product">Search Product</span>
          <input
            type="text"
            placeholder="Search 1M Products,Electronic etc"
            className="Search-field"
            onChange={(e) => dispatch(onSearchChanging(e.target.value))}
          />
        </div>
        <div className="Product-Window">
          {(count.search.length === 0
            ? []
            : count.listOfAllObject.filter((item) =>
                item.name.includes(count.search)
              )
          ).map((item) => {
            return <Card ident={item.id} />;
          })}
        </div>
      </div>
    );
}