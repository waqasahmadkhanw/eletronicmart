import axiosInstance from "../../config/axios";

export const uploadImage = async (formData) => {
  const response = await axiosInstance.post(
    "/upload/image",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
};

export const uploadMultipleImages = async (
  formData
) => {
  const response = await axiosInstance.post(
    "/upload/images",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
};