import React from "react";
import { Switch, Route} from "react-router-dom";
// import Inicio from "./page/inicio";
import Home from "../components/page/inicio/Home"
import { ProductosList } from "./page/productos";
import { ProductosDetalles } from "./page/productos/ProductosDetalles";
import Cuenta from "./page/login/index";
import Login from "./page/login/Login";

export default function Page() {
  return (
    <section>
      <Switch>
				<Route path="/" exact component={Home} />
				<Route path="/productos" exact component={ProductosList} />
        <Route path="/producto/:id" exact component={ProductosDetalles} />
        <Route path="/login" exact component={Cuenta} />
			</Switch>
    </section>
  );
}
