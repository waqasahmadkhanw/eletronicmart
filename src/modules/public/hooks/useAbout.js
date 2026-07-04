import { useMemo } from "react";

const useAbout = () => {
  const companyInfo = useMemo(
    () => ({
      name: "Your Store",
      founded: "2026",
      mission:
        "Provide high-quality products with the best shopping experience.",
      vision:
        "Become the most trusted e-commerce platform.",
    }),
    []
  );

  return {
    companyInfo,
  };
};

export default useAbout;