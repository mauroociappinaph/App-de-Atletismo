const validation = (form) => {
  const errors = {};
  if (form.nombre && !/^[A-Z][a-zA-Z ]+$/.test(form.nombre))
    errors.nombre = "Nombre inválido";

  if (form.email && !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email))
    errors.email = "Formato inválido";

  if (
    form.password &&
    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(form.password)
  )
    errors.password =
      "La contraseña debe contener al menos 8 caracteres, una letra minúscula, una letra mayúscula y un número";

  if (form.repetirPassword && form.password !== form.repetirPassword)
    errors.repetirPassword = "Las constraseñas no coinciden";
  return errors;
};

export default validation;
