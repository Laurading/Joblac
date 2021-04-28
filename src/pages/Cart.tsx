import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
} from "@ionic/react";
import React, { useReducer } from "react";
import ExploreContainer from "../components/ExploreContainer";
import "./Home.css";
import cartReducer from "../reducers/cart";

const Cart: React.FC = () => {
  const initialState = {
    books: [],
  };
  const [state, dispatch] = useReducer(cartReducer, initialState);
  console.log(state);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Panier</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Panier</IonTitle>
          </IonToolbar>
        </IonHeader>

        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Cart;
