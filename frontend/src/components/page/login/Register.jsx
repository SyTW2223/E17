import React, { useState } from "react";

export const Register = (props) => {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            username: name,
            phone: phone,
            email: email,
            password: pass
          };
        fetch('https://bookerin.onrender.com/users/signup', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(res=> {
              console.log(res.message);
        });
        
    }

    return (
        
        <div className="auth-form-container">
            <div className="titulo-inicio-registro">
                <h1>Crea una cuenta</h1>
            </div>
            <form className="register-form"onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input value={name} onChange={(e) => setName(e.target.value)} type="name" placeholder="Nombre" id="name" name="name"/>

                <label htmlFor="phone">Phone</label>
                <input value={phone} onChange={(e) => setPhone(e.target.value)} type="phone" placeholder="645129823" id="phone" name="phone"/>

                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email"/>

                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password"/>

                <label htmlFor="password">Retype password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password"/>

                <button type="submit">Sign up</button>
                <button className="link-btn" onClick={() => props.onFormSwitch('login')}>¿Ya tiene una cuenta? Inicie sesión aquí</button>
            </form>
            

        </div>

    )
}