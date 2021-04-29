import { Redirect, Route } from "react-router-dom";
import { IonRouterOutlet } from "@ionic/react";

import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Account from "../pages/Account";
import Books from "../pages/Books";
import Login from "../pages/Login";
import Subscribe from "../pages/Subscribe";
import Subcategories from "../pages/Subcategories";

export default function Routes() {
  return(
    <IonRouterOutlet>
              <Route exact path="/books/:category">
                <Subcategories />
              </Route>
              <Route exact path="/home">
                <Home />
              </Route>
              <Route exact path="/books">
                <Books />
              </Route>
              <Route exact path="/cart">
                <Cart />
              </Route>
              <Route exact path="/account">
                <Account />
              </Route>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/subscribe">
                <Subscribe />
              </Route>
              <Route exact path="/">
                <Redirect to="/home" />
              </Route>
            </IonRouterOutlet>
  )
}