// Regular Expression for validating email format
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const getInitials = (name) => {
  if (!name) return "";
  const nameParts = name.split(" ");

  let initials = nameParts.map((parts) => parts[0]).join("");
  return initials.toUpperCase();
};
