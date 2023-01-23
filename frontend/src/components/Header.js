import React, { useContext} from "react";
import { DataContext } from "../context/DataProvider";
import { Link } from "react-router-dom";
import Icono from "../images/icono.jpg";
// import {Cuenta} from "../components/page/login/index"
import { Login } from "../components/page/login/Login";
//import { useState } from "react";

export const Header = () => {
  const value = useContext(DataContext);
  const [carrito] = value.carrito;
  const [menu, setMenu] = value.menu;


  const toogleMenu = () =>{
    setMenu(!menu)
  }

  return (
    <header>
    
      <Link to="/">
      <div className="logo">
        <img src={Icono} alt="Nike" width="100" />
      </div>
      </Link>
      
      <div className="icon">
      <ul>
        <li>
          <Link to="/">
          <box-icon name="home"></box-icon>
          </Link>
        </li>
        <li>
          <Link to="/productos">
          <box-icon name="book"></box-icon>
          </Link>
        </li>
        <li>
          <Link to="/login">
            <box-icon name="user"></box-icon>
          </Link>
        </li>
        <li>
        <div className="cart" onClick={toogleMenu}>
          <box-icon name="cart"></box-icon>
        <span className="item__total"> {carrito.length} </span>
      </div>
      </li>
      </ul>
    </div>
    </header>
  );
};




{/* <Link to="frontend\src\components\Login.jsx"><box-icon name="user"></box-icon></Link> */}
{/* <a href="Login"><box-icon name="user"></box-icon> Login</a> */}
{/* <li><a href="./Login" role="button" onClinck={() => setCurrentForm('login')}> Login</a></li> */}
{/* <Link to="../"><box-icon name="user"></box-icon></Link> */}
