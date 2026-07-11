import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchCurrentUser } from "../store/authThunks";

export default function AuthInitializer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return null;
}