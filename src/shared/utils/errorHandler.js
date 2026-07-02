import toast from "react-hot-toast";

export const errorHandler = (error) => {
  const message =
    error?.response?.data?.message ||
    error?.message ||
    "Something went wrong.";

  toast.error(message);

  console.error(error);

  return message;
};