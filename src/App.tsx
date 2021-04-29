import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonRouterOutlet,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
} from "@ionic/react";
import React, { useState } from "react";

import { IonReactRouter } from "@ionic/react-router";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Account from "./pages/Account";
import Books from "./pages/Books";
import Login from "./pages/Login";
import Subscribe from "./pages/Subscribe";
import Subcategories from "./pages/Subcategories";
import "./App.css";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import CartContext from "./contexts/CartContext";
import Tab2 from "./pages/Tab2/Tab2";
import BookList from "./pages/Tab2/BookList";
import Book from "./pages/Tab2/Book";

const App: React.FC = () => {
  const [books, setBooks] = useState([]);

  const cartContextValue = {
    books,
    setBooks,
  };
  console.log("les books", books);

  return (
    <CartContext.Provider value={cartContextValue}>
      <IonApp>
        <IonReactRouter>
          <IonTabs>
            <IonRouterOutlet>
              <Route exact path="/book/:id" component={Book} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/tab2" component={Tab2} />
              <Route exact path="/cart" component={Cart} />
              <Route exact path="/account" component={Account} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/subscribe" component={Subscribe} />
              <Route exact path="/booklist/:category" component={BookList} />
              <Route exact path="/">
                <Redirect to="/home" />
              </Route>
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
              <IonTabButton tab="home" href="/home">
                <IonIcon src="./assets/svg/home.svg" />
                <IonLabel>Accueil</IonLabel>
              </IonTabButton>
              <IonTabButton tab="tab2" href="/tab2">
                <IonIcon src="./assets/svg/search.svg" />
                <IonLabel>Livres</IonLabel>
              </IonTabButton>

              <IonTabButton tab="cart" href="/cart">
                <IonIcon src="./assets/svg/cart.svg" />
                <IonLabel>Panier</IonLabel>
              </IonTabButton>

              <IonTabButton tab="account" href="/account">
                <IonIcon src="./assets/svg/profil.svg" />
                <IonLabel>Compte</IonLabel>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </IonReactRouter>
      </IonApp>
    </CartContext.Provider>
  );
};

export default App;
