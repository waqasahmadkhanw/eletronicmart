import { combineReducers } from "@reduxjs/toolkit";

// import authReducer from "../modules/auth/authSlice";
import { publicReducer } from "../modules/public/store";
// import cartReducer from "../features/cart/cartSlice";
// import wishlistReducer from "../features/wishlist/wishlistSlice";
// import compareReducer from "../features/compare/compareSlice";
// import themeReducer from "../features/theme/themeSlice";

export const rootReducer = combineReducers({
  //  auth: authReducer,
public: publicReducer,

  // cart: cartReducer,

  // wishlist: wishlistReducer,

  // compare: compareReducer,

  // theme: themeReducer,
});