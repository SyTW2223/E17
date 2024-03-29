import React, { useState } from "react";

export const Login = (props) => {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            email: email,
            password: pass
          };
        fetch('https://bookerin.onrender.com/users/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                
            },
            body: JSON.stringify(user)
        })
        .then(res => { 
            res.json()
            console.log(res.status)
            if (res.status === 200) props.onFormSwitch('logeado')
            else document.getElementById("error").innerHTML = "Usuario o contraseña incorrecta";
          })
        .then(res=> {
              console.log(res.message);
        });
        
    }

    return (
        <div className="auth-form-container">
            <div id="error"></div>
            <div className="titulo-inicio-registro">
                <h1>Inicie sesión</h1>
            </div>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email"/>

                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password"/>

                <button type="submit">Log in</button>
                <button className="link-btn" onClick={() => props.onFormSwitch('signup')}>¿Todavía no tiene una cuenta? Regístrese aquí</button>
            </form>
            
        </div>
    )
}