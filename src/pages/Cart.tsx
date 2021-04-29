import { IonContent, IonPage, IonItem, IonLabel } from "@ionic/react";
import CartContext from "../contexts/CartContext";
import styles from "./Cart.module.css";
import React, { useContext, useState, useEffect } from "react";
import TotalToPay from "../components/TotalToPay";

const Cart: React.FC = () => {
  const { books, updateBooks } = useContext(CartContext);

  let countTotal: number = 0;
  const booklist = books.map((book: any) => {
    const price: number = Number(book.prix);
    countTotal = countTotal + price;

    return (
      <IonItem key={book.titre}>
        <IonLabel>
          {book.titre} - {book.auteur}
        </IonLabel>
        <IonLabel>prix: {book.prix} €</IonLabel>
      </IonItem>
    );
  });

  return (
    <IonPage>
      <IonContent>
        <div className="background">
          <div className={styles["orange"]}>
            <p className={styles["title-tab-2"]}>PANIER</p>
          </div>
          {booklist}
          <TotalToPay total={countTotal} />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Cart;
