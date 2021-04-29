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
import styles from "./Tab3/Tab3.module.css";
import React, { useContext, useState, useEffect } from "react";
import "./Home.css";

const Cart: React.FC = () => {
  const { books, updateBooks } = useContext(CartContext);
  const [total, setTotal] = useState(0);
  console.log("panier", books);
  const booklist = books.map((book: any) => {
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
  /*useEffect(() => {
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
  }, [books]);*/
  return (
    <IonPage>
      <IonContent>
        <div className="background">
          <div className={styles["orange"]}>
            <p className={styles["title-tab-2"]}>PANIER</p>
          </div>
        </div>
        {booklist}
        <IonButton>Payer {total}€</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Cart;
