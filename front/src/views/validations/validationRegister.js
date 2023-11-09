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
    errors.fullName = "Nombre inválido";
  if (form.email && !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email))
    errors.email = "Formato inválido";

  if (!form.sex || form.sex === "Seleccionar") errors.sex = "Escoge un sexo";
  /*  if (form.birthdate && !isAdult(form.birthdate))
      errors.birthdate = "Must be 18 years or older"; */
  if (
    form.password &&
    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(form.password)
  )
    errors.password =
      "La contraseña debe contener al menos 8 caracteres, una letra minúscula, una letra mayúscula y un número";

  if (form.confirmPassword && form.password !== form.confirmPassword)
    errors.confirmPassword = "Las constraseñas no coinciden";
  return errors;
};

export default validation;
