import React from "react";
import { Switch, Route} from "react-router-dom";
import Inicio from "./page/inicio";
import Home from "../pages/home/Home"
import { ProductosList } from "./page/productos";
import { ProductosDetalles } from "./page/productos/ProductosDetalles";

export default function Page() {
  return (
    <section>
      <Switch>
				<Route path="/" exact component={Home} />
				<Route path="/productos" exact component={ProductosList} />
        <Route path="/producto/:id" exact component={ProductosDetalles} />
			</Switch>
    </section>
  );
}
