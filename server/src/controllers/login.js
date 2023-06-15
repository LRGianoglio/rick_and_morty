const users = require("../utils/users")

const login = (req, res) =>{
    const {email, password} = req.query;
    let access = false;

    users.forEach(user => {
        if(user.email === email && user.password === password) access = true;
    })
    return res.status(200).json({access}); //Por ES6 enviar un objeto con propiedades sin un value les asigna el valor de las mismas variables fuera del objeto, es decir, en este caso el objeto tendría una propiedad access: access
}

module.exports = login;