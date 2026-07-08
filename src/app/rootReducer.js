import { combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "../modules/auth";
// import { publicReducer } from "../modules/public/store";
import { profileReducer } from "../modules/profile";
import { userReducer } from "../modules/users";
import { productReducer } from "../modules/products";
import { publicReducer } from "../modules/public";
// import authReducer from "../modules/auth/authSlice";
// import cartReducer from "../features/cart/cartSlice";
// import wishlistReducer from "../features/wishlist/wishlistSlice";
// import compareReducer from "../features/compare/compareSlice";
// import themeReducer from "../features/theme/themeSlice";

export const rootReducer = combineReducers({
  auth: authReducer,
  // users: userReducer,
// public: publicReducer,
// profile: profileReducer,
// prducts: productReducer,

  // cart: cartReducer,

  // wishlist: wishlistReducer,

  // compare: compareReducer,

  // theme: themeReducer,
});