import { useState } from "react";
import styles from './Form.module.css'
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
        <div className={styles.formDiv}>
            <div className={styles.divDatos}>
                <form className={styles.form}>
                    <img src="https://smilegallerydental.com.au/wp-content/uploads/2019/10/Smile-Gallery-Background-Dark-Purple.jpg" alt="" />
                    <label>Ingrese su email:</label>
                    <input type="email" name="email" onChange={handleChange}/>
                    <label>Ingrese su contraseña:</label>
                    <input type="password" name="password" onChange={handleChange}/>
                    <button onClick={handleSubmit}>Submit</button>
                </form>
            </div>
            <div className={styles.divImg}>
                <img src="https://www.freepnglogos.com/uploads/rick-and-morty-png/rick-and-morty-portal-shoes-white-clothing-zavvi-23.png" alt="aaaaaaaaa" className={styles.imgLogin}/>
            </div>
        </div>
    )
}