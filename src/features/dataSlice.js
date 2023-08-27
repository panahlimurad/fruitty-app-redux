import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  orders: [],
  basketList:[]
}

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setOrders: (state, action) => {
      state.orders = action.payload;
    },
    handleAddClick: (state, action) => {
      const product = action.payload;
      let newBasket = state.basketList;
      const addedItemIndex = newBasket.findIndex(
        (item) => item.product.id === product.id
      );

      if (addedItemIndex !== -1) {
        newBasket[addedItemIndex].product.price += product.price;
      } else {
        newBasket.push({ product: product, quantity: 1 });
      }
    },
    handleRemoveItem: (state, action) => {
      const productToRemove = action.payload;
      state.basketList = state.basketList.filter((item)=>item.product.id !== productToRemove.id)
    }
  },
});

export const { setOrders, handleRemoveItem, handleAddClick } = dataSlice.actions;
export default dataSlice.reducer;