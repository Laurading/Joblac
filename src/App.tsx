// import React from 'react';
// import { Redirect, Route } from 'react-router-dom';
// import {
//   IonApp,
//   IonIcon,
//   IonLabel,
//   IonRouterOutlet,
//   IonTabBar,
//   IonTabButton,
//   IonTabs,
// } from '@ionic/react';
// import { IonReactRouter } from '@ionic/react-router';
// import Tab1 from './pages/Tab1/Tab1';
// import Tab2 from './pages/Tab2/Tab2';
// import Tab3 from './pages/Tab3/Tab3';
// import Tab4 from './pages/Tab4/Tab4';

// /* Core CSS required for Ionic components to work properly */
// import '@ionic/react/css/core.css';

// /* Basic CSS for apps built with Ionic */
// import '@ionic/react/css/normalize.css';
// import '@ionic/react/css/structure.css';
// import '@ionic/react/css/typography.css';

// /* Optional CSS utils that can be commented out */
// import '@ionic/react/css/padding.css';
// import '@ionic/react/css/float-elements.css';
// import '@ionic/react/css/text-alignment.css';
// import '@ionic/react/css/text-transformation.css';
// import '@ionic/react/css/flex-utils.css';
// import '@ionic/react/css/display.css';

// /* Theme variables */
// import './theme/variables.css';

// import './App.css';
// import BookList from './pages/Tab2/BookList';

// const App: React.FC = () => (
//   <IonApp>
//     <IonReactRouter>
//       <IonTabs>
//         <IonRouterOutlet>
//           <Route path="/tab1" component={Tab1} exact={true} />
//           <Route path="/tab2" component={Tab2} exact={true} />
//           <Route path="/tab3" component={Tab3} />
//           <Route path="/tab4" component={Tab4} />
//           <Route path="/bookList" component={BookList}/>
//           <Route path="/" render={() => <Redirect to="/tab1" />} exact={true} />
//         </IonRouterOutlet>
//         <IonTabBar slot="bottom">
//           <IonTabButton tab="tab1" href="/tab1">
//             <IonIcon src="./assets/svg/home.svg" />
//             <IonLabel>Accueil</IonLabel>
//           </IonTabButton>
//           <IonTabButton tab="tab2" href="/tab2">
//             <IonIcon src="./assets/svg/search.svg" />
//             <IonLabel>Recherche</IonLabel>
//           </IonTabButton>
//           <IonTabButton tab="tab3" href="/tab3">
//             <IonIcon src="./assets/svg/cart.svg" />
//             <IonLabel>Panier</IonLabel>
//           </IonTabButton>
//           <IonTabButton tab="tab4" href="/tab4">
//             <IonIcon src="./assets/svg/profil.svg" />
//             <IonLabel>Compte</IonLabel>
//           </IonTabButton>
//         </IonTabBar>
//       </IonTabs>
//     </IonReactRouter>
//   </IonApp>
// );

// export default App;

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
import {
  home,
  cartOutline,
  personOutline,
  searchOutline,
} from "ionicons/icons";

import { IonReactRouter } from "@ionic/react-router";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Account from "./pages/Account";
import Books from "./pages/Books";
import Login from "./pages/Login";
import Subscribe from "./pages/Subscribe";
import Subcategories from "./pages/Subcategories";
import './App.css';

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
import BookList from './pages/Tab2/BookList';
import Book from './pages/Tab2/Book';

const App: React.FC = () => {
  const [books, setBooks] = useState([]);

  const cartContextValue = {
    books,
    updateBooks: setBooks,
  };
  return (
    <CartContext.Provider value={cartContextValue}>
      <IonApp>
        <IonReactRouter>
          <IonTabs>
            <IonRouterOutlet>
              <Route exact path="/books/:category" component={Subcategories}/>
              <Route exact path="/home" component={Home}/>
              <Route exact path="/tab2" component={Tab2}/>
              <Route exact path="/cart" component={Cart}/>
              <Route exact path="/account" component={Account}/>
              <Route exact path="/login" component={Login}/>
              <Route exact path="/subscribe" component={Subscribe}/>
              <Route path="/bookList" component={BookList}/>
              <Route path="/book" component={Book}/>
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