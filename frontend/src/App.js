import React, { useState } from "react";
import './index.css';

// import './App.css';
// import { Login } from "./components/Login";
// import { Register } from "./components/Register";
// import { Logeado } from "./components/Logeado"
import { Header } from "./components/Header";
import { Carrito } from "./components/Carrito";
import {DataProvider} from './context/DataProvider';
import { BrowserRouter as Router} from "react-router-dom";
import Pages from "./components/Page.js";
import "boxicons";

function App() {


  return (
    <DataProvider>
    <div className="App">
      <Router>
      <Header />
      <Carrito />
      <Pages />
      </Router>
    </div>
    </DataProvider>
  );


//   const [currentForm, setCurrentForm] = useState('login');

//   const toggleForm = (formName) => {
//     setCurrentForm(formName);
//   }

//   return (
//     <div>
//     <header>
//       <ul>
//         <li><a 
//           href="#"
//           role="button"
//           onClick={() => setCurrentForm('login')}>
//           Iniciar Sesión
//         </a></li>
//         <li><a 
//           href="#"
//           role="button"
//           onClick={() => setCurrentForm('signup')}>
//           Registrarse
//         </a></li>
//       </ul>
//     </header>
//     <div className="App">
//       {
//         {
//           'login': <Login onFormSwitch={toggleForm} />,
//           'signup': <Register onFormSwitch={toggleForm} />,
//           'logeado': <Logeado onFormSwitch={toggleForm} />
//         }[currentForm]
//       }
//     </div>
//     <footer className="footer">
//       <p className="text-footer">
//         Footer
//       </p>
//     </footer>
//     </div>
//   );
}

export default App;
