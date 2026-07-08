export const validateProfile = (values) => {
  const errors = {};

  if (!values.name?.trim()) {
    errors.name = "Name is required";
  }

  if (!values.email?.trim()) {
    errors.email = "Email is required";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
  ) {
    errors.email = "Invalid email address";
  }

  return errors;
};