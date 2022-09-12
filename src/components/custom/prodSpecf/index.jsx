import React,{useEffect} from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementCart,
  decrementCart,
  handledecrese1,
  handleincrese1,
  handleproduct2,
  handleremove2,
} from "../../../redux/todoSlice";

export default function ProdSpecf(props) {
    const token = localStorage.getItem("token");
  let navigate = useNavigate();
  const count = useSelector((store) => store.counter);
  const dispatch = useDispatch();
  return (
    <div className="ProdSpecf-Container">
      <div className="prodSpecf-img-Cont">
        <img
          src={
            count.listOfAllObject.find((item) => item.id === count.productID)
              .prodimage1
          }
          alt=""
          className="img-Cont1"
        />
        <img
          src={
            count.listOfAllObject.find((item) => item.id === count.productID)
              .prodimage2
          }
          alt=""
          className="img-Cont1"
        />
        <img
          src={
            count.listOfAllObject.find((item) => item.id === count.productID)
              .prodimage3
          }
          alt=""
          className="img-Cont1"
        />
        <img
          src={
            count.listOfAllObject.find((item) => item.id === count.productID)
              .prodimage4
          }
          alt=""
          className="img-Cont1"
        />
        <img
          src={
            count.listOfAllObject.find((item) => item.id === count.productID)
              .prodimage5
          }
          alt=""
          className="img-Cont1"
        />
        <img
          src={
            count.listOfAllObject.find((item) => item.id === count.productID)
              .prodimage6
          }
          alt=""
          className="img-Cont1"
        />
      </div>
      <img
        src={
          count.listOfAllObject.find((item) => item.id === count.productID)
            .prodimage1
        }
        alt=""
        className="ProdSpecf-img"
      />
      <div className="ProdSpecf-Detail-Con">
        <span className="Prod-Name">
          {
            count.listOfAllObject.find((item) => item.id === count.productID)
              .name
          }
        </span>
        <hr
          style={{
            width: 400,
            backgroundColor: "black",
            height: 0.1,
            margin: 0,
          }}
        />
        <span className="Prod-Detail">
          {!token ? (
            <span>
              {
                count.listOfAllObject.find(
                  (item) => item.id === count.productID
                ).price
              }
            </span>
          ) : (
            <span>
              {
                count.listOfAllObject.find(
                  (item) => item.id === count.productID
                ).discountprice
              }
            </span>
          )}
        </span>
        <span>Inclusive of all taxes</span>
        <hr
          style={{
            width: 400,
            backgroundColor: "black",
            height: 0.1,
            margin: 0,
          }}
        />
        <div className="prod-list">
          <span>About this item</span>
          <ul>
            <li>
              {
                count.listOfAllObject.find(
                  (item) => item.id === count.productID
                ).desc.point1
              }
            </li>
            <li>
              {
                count.listOfAllObject.find(
                  (item) => item.id === count.productID
                ).desc.point2
              }
            </li>
            <li>
              {
                count.listOfAllObject.find(
                  (item) => item.id === count.productID
                ).desc.point3
              }
            </li>
            <li>
              {
                count.listOfAllObject.find(
                  (item) => item.id === count.productID
                ).desc.point4
              }
            </li>
          </ul>
        </div>
      </div>
      <div className="prod-quantity">
        {!token ? (
          <span>
            {
              count.listOfAllObject.find((item) => item.id === count.productID)
                .price
            }
          </span>
        ) : (
          <span>
            {
              count.listOfAllObject.find((item) => item.id === count.productID)
                .discountprice
            }
          </span>
        )}

        <span>
          FREE delivery Thursday, 15 September. Order within 21 hrs 36 mins.
          Details
        </span>
        <span>In Stock</span>
        <span
          className="Signin-bonus"
          onClick={() => {
            navigate("/login");
          }}
        >
          Get Extra 5% OFF! Signin First
        </span>
        {!token ? (
          <span
            className="prod-addCart"
            onClick={() => {
              navigate("/login");
            }}
          >
            Add to Cart
          </span>
        ) : (
          <span className="item-in-cart">
            <p
              className="item-remove-button"
              onClick={() => {
                if (
                  count.listOfAllObject.find(
                    (item) => item.id === count.productID
                  ).quantity > 0
                ) {
                  dispatch(decrementCart());
                  dispatch(handledecrese1(count.productID));
                  dispatch(handleremove2(count.product));
                }
              }}
            >
              -
            </p>
            <p className="item-quantity">
              {
                count.listOfAllObject.find(
                  (item) => item.id === count.productID
                ).quantity
              }
            </p>
            <p
              className="item-add-button"
              onClick={() => {
                dispatch(incrementCart());
                dispatch(handleincrese1(count.productID));
                dispatch(handleproduct2(count.product));
              }}
            >
              +
            </p>
          </span>
        )}
        {!token ? (
          <span
            className="Prod-Buy-Button"
            onClick={() => {
              navigate("/login");
            }}
          >
            Buy Now
          </span>
        ) : (
          <span
            className="Prod-Buy-Button"
            onClick={() => {
              navigate("/placeorder");
            }}
          >
            Buy Now
          </span>
        )}
      </div>

      {!token ? (
        <span className="Prod-Discount">
          10%
          <br />
          OFF
        </span>
      ) : (
        <span className="Prod-Discount">
          15%
          <br />
          OFF
        </span>
      )}
    </div>
  );
}