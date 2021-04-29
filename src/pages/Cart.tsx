import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonButton,
} from "@ionic/react";
import CartContext from "../contexts/CartContext";
import React, { useContext, useState, useEffect } from "react";
import "./Home.css";

const Cart: React.FC = () => {
  const { books, updateBooks } = useContext(CartContext);
  const [total, setTotal] = useState(0);
  console.log("jjj", books);
  let booklist;
  useEffect(() => {
    console.log("bbb", books);
    booklist = books.map((book: any) => {
      setTotal(total + parseFloat(book.prix));
      console.log("one", book);
      return (
        <IonItem key={book.titre}>
          <IonLabel>
            {book.titre} - {book.auteur}
          </IonLabel>
          <IonLabel>prix: {book.prix}</IonLabel>
        </IonItem>
      );
    });
  }, [books]);
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
        {booklist}

        <IonButton>Payer {total}€</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Cart;
