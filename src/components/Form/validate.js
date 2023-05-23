export default function validate (input) {
    const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/;
    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6, 10}$/
    let errors = {};
 
    errors.password = "tatobien"

    if (!emailRegex.test(input.email)) errors.email = "El nombre de usuario debe ser un mail"
    if (input.email.length>35) errors.email = "No puede tener mas de 35 caracteres"
    if (!input.email) errors.email = "No puede estar vacío"
    // if (!passRegex.test(input.password)) errors.password = "La contraseña debe tener entre 6 y 10 caracteres. Debe incluír al menos una mayúscula, una minúscula y un número"
    if (input.password.length<6 || input.password.length>10) errors.password = "La contraseña debe tener entre 6 y 10 caracteres"
    console.log(errors.password)
    return errors;
}