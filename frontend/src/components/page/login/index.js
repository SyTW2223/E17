import React, { useState } from "react";
// import './index.css';

// import './App.css';
import { Login } from "./Login";
import { Register } from "./Register";
import { Logeado } from "./Logeado"
import Home from "../inicio/Home"
import { Header } from "../../../components/Header";
// import { Carrito } from "../../../components/Carrito";
// import Footer from "../../../pages/global/Footer"
// import "boxicons";

export default function Cuenta () {
  
    const [currentForm, setCurrentForm] = useState('login');
  
    const toggleForm = (formName) => {
      setCurrentForm(formName);
    }
  
    return (
      <div>
      {/* <header>
        <ul>
          <li><a 
            href="#"
            role="button"
            onClick={() => setCurrentForm('login')}>
            Iniciar Sesión
          </a></li>
          <li><a 
            href="#"
            role="button"
            onClick={() => setCurrentForm('signup')}>
            Registrarse
          </a></li>
        </ul>
      </header> */}
      <Header/>
      <div className="Cuenta">
        {
          {
            'login': <Login onFormSwitch={toggleForm} />,
            'signup': <Register onFormSwitch={toggleForm} />,
            'logeado': <Home onFormSwitch={toggleForm} />
          }[currentForm]
        }
      </div>
      </div>
    );
}

// const [currentForm, setCurrentForm] = useState('login');

// const toggleForm = (formName) => {
//   setCurrentForm(formName);
// }

// return (
//   // hacemos un div para que se vea el fondo de la página
//   <div className="login">
//     {
//       {
//         'login': <Login onFormSwitch={toggleForm} />,
//         'signup': <Register onFormSwitch={toggleForm} />,
//         'logeado': <Logeado onFormSwitch={toggleForm} />
//       }[currentForm]
//     }
//   </div>
// );