import { useState } from "react";
import validate from "./validate";


export default function Form ({login}){

    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })

    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
        console.log("email: " + userData.email + "| pass: " + userData.password)
        setErrors(validate({
            ...userData,
            [event.target.name]: event.target.value
        }));
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        login(userData);
    }

    return(
        <>
            <form>
                <label>Ingrese su email:</label>
                <input type="email" name="email" onChange={handleChange}/>
                <label>Ingrese su contraseña:</label>
                <input type="password" name="password" onChange={handleChange}/>
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </>
    )
}