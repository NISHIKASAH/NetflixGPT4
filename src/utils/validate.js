export const validateForm = (email, password) => {
  const isemailvalidate =
    /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
  if (!isemailvalidate) {
    return "Email is not valid";
  }
  const ispasswordValidate =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  if (!ispasswordValidate) {
    return "Password is not valid";
  }
  return null;
};
