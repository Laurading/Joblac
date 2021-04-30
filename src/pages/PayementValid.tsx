import {
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonBackButton,
} from "@ionic/react";
import React, { useContext, useEffect } from "react";
import CartContext from "../contexts/CartContext";

const CGD: React.FC = () => {
  /*const { books, setBooks } = useContext(CartContext);

  useEffect(() => {
    setBooks([]);
  }, []);
*/
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>
            <img src="././assets/img/Joblac.png" />
          </IonTitle>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <p>Merci pour votre commande! A bientôt!</p>
      </IonContent>
    </IonPage>
  );
};

export default CGD;
