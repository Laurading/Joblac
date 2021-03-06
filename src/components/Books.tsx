import React from "react";
import { useParams } from "react-router-dom";
import { books } from "../data/data";
import styles from "./Books.module.css";
import { IonItem, IonCol } from "@ionic/react";

const Books: React.FC = () => {
  const { category }: any = useParams();

  const listBooks = books.map((book: any) => {
    if (category === book.genre) {
      return (
        <IonItem key={book.id} routerLink={`/book/${book.id}`}>
          <IonCol size="5">
            <img className={styles["img"]} src={book.image}></img>
          </IonCol>
          <p className={styles["padding"]}>
            {book.titre} {book.auteur}
          </p>
        </IonItem>
      );
    }
  });

  return <div>{listBooks}</div>;
};

export default Books;
