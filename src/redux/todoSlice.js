import { createSlice } from "@reduxjs/toolkit";
import { getBrowsingData } from "../apis/browsingApi";
import { getClothesData } from "../apis/clothesApi";
import { getDellData } from "../apis/ElectronicApi/dellApi";
import { getElectronicData } from "../apis/ElectronicApi/electronics";
import { getLenvoData } from "../apis/ElectronicApi/lenvoApi";
import { getToysData } from "../apis/kids";



const cardslice = createSlice({
  name: "cards",
  initialState: {
    search: "",
    sizeOfCart: 0,
    listOfAllObject: getBrowsingData(),
    listOfAllClothes: getClothesData(),
    listOfAllToys: getToysData(),
    listOfAllElectronic: getElectronicData(),
    listOfAllDell: getDellData(),
    listOfAllLenvo:getLenvoData(),
    listOfCartOjbect: [],
    productID: -1,
    product: null,
  },
  reducers: {
    onSearchChanging(state, action) {
      state.search = action.payload;
    },
    incrementCart(state, action) {
      state.sizeOfCart += 1;
    },
    decrementCart(state, action) {
      state.sizeOfCart -= 1;
    },
    handleincrese1(state, action) {
      const productexit = state.listOfAllObject.find(
        (item) => item.id === action.payload
      );

      state.listOfAllObject = state.listOfAllObject.map((item) =>
        item.id === action.payload
          ? { ...productexit, quantity: productexit.quantity + 1 }
          : item
      );
    },
    handledecrese1(state, action) {
      const productexit = state.listOfAllObject.find(
        (item) => item.id === action.payload
      );

      state.listOfAllObject = state.listOfAllObject.map((item) =>
        item.id === action.payload
          ? {
              ...productexit,
              quantity:
                productexit.quantity === 0
                  ? productexit.quantity
                  : productexit.quantity - 1,
            }
          : item
      );
    },
    detailing(state, action) {
      state.productID = action.payload;
      console.log(state.productID)
      console.log(action.payload);
    },
    detailingProd(state, action) {
      state.product = action.payload;
      console.log(action.payload);
    },
    handleproduct2(state, action) {
      const productexit = state.listOfCartOjbect.find(
        (item) => item.id === action.payload.id
      );
      if (productexit) {
        state.listOfCartOjbect = state.listOfCartOjbect.map((item) =>
          item.id === action.payload.id ? { ...productexit } : item
        );
      } else {
        state.listOfCartOjbect = [
          ...state.listOfCartOjbect,
          { ...action.payload },
        ];
      }
    },

    handleremove2(state, action) {
      const productexit = state.listOfAllObject.find(
        (item) => item.id === action.payload.id
      );

      if (productexit.quantity === 0) {
        state.listOfCartOjbect = state.listOfCartOjbect.filter(
          (item) => item.id !== action.payload.id
        );
      } else {
        state.listOfCartOjbect = state.listOfCartOjbect.map((item) =>
          item.id === action.payload.id ? { ...productexit } : item
        );
      }
      console.log(productexit.quantity);
    },
  },
});

export const {
  onSearchChanging,
  incrementCart,
  decrementCart,
  handledecrese1,
  handleincrese1,
  handleproduct2,
  handleremove2,
  detailing,
  detailingProd,
} = cardslice.actions;
export default cardslice.reducer;