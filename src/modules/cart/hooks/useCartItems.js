import { useSelector } from "react-redux";

import {
  selectCartItems,
  selectCartItemCount,
  selectSavedItems,
} from "../store";

const useCartItems = () => {
  const items = useSelector(selectCartItems);
  const savedItems = useSelector(selectSavedItems);
  const itemCount = useSelector(selectCartItemCount);

  return {
    items,
    savedItems,
    itemCount,
  };
};

export default useCartItems;