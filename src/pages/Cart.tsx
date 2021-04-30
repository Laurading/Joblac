import {
  IonContent,
  IonPage,
  IonItem,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCol,
  IonIcon,
} from "@ionic/react";
import CartContext from "../contexts/CartContext";
import { closeOutline } from "ionicons/icons";
import styles from "./Cart.module.css";
import React, { useContext, useState, useEffect } from "react";
import TotalToPay from "../components/TotalToPay";

const Cart: React.FC = () => {
  const { books, setBooks } = useContext(CartContext);

  let countTotal: number = 0;
  const booklist = books.map((book: any) => {
    const price: number = Number(book.prix);
    countTotal = countTotal + price;
    const removeItem = () => {
      const i = books.indexOf(book);
      const newArrayBook = [...books];
      newArrayBook.splice(i, 1);
      setBooks(newArrayBook);
    };

    return (
      <IonItem key={book.titre}>
        <IonIcon
          onClick={removeItem}
          style={{ fontSize: "20px" }}
          icon={closeOutline}
        ></IonIcon>
        <IonCol size="5">
          <img className={styles["img"]} src={book.image}></img>
        </IonCol>
        <p>
          {book.titre} {book.auteur}
          <p className={styles["price"]}>Prix: {book.prix} €</p>
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
        <IonItem>
          <div className="background">
            <p className={styles["title-tab-2"]}>PANIER</p>
            {booklist}
            <div className={styles["pay"]}>
              <IonItem routerLink="/payementvalid">
                <TotalToPay total={countTotal} />
              </IonItem>
            </div>
          </div>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default Cart;
