/* function isAdult(birthdate) {
    const currentDate = new Date();
    const birthDate = new Date(birthdate);
    const timeDiff = currentDate.getTime() - birthDate.getTime();
    const age = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365.25));
    return age >= 18;
  } */

const validation = (form) => {
  const errors = {};
  if (form.fullName && !/^[A-Z][a-zA-Z ]+$/.test(form.fullName))
    errors.fullName = "Invalid name";
  if (form.email && !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email))
    errors.email = "Invalid email format";

  if (!form.sex || form.sex === "Seleccionar")
    errors.sex = "Please select a gender.";
  /*  if (form.birthdate && !isAdult(form.birthdate))
      errors.birthdate = "Must be 18 years or older"; */
  if (
    form.password &&
    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(form.password)
  )
    errors.password =
      "Password must contain at least 8 characters, one lowercase letter, one uppercase letter, and one digit.";

  if (form.confirmPassword && form.password !== form.confirmPassword)
    errors.confirmPassword = "Passwords do not match.";
  return errors;
};

export default validation;
