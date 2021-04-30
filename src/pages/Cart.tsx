import { IonContent, IonPage, IonItem, IonLabel, IonHeader, IonTitle, IonToolbar, IonCol } from "@ionic/react";
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
        <IonCol size="5">
          <img className={styles['img']} src={book.image}></img>
        </IonCol>
        <p>
          {book.titre} {book.auteur}
          <p className={styles['price']}>Prix: {book.prix} €</p>
        </p>
      </IonItem>
    );
  });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>
            <img src="././assets/img/Joblac.png" />
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="background">
          <p className={styles["title-tab-2"]}>PANIER</p>
          {booklist}
          <div className={styles['pay']}>
            <TotalToPay total={countTotal} />
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Cart;
