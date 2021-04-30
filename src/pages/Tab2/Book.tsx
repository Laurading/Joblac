import React, { useState, useEffect, useContext } from "react";
import styles from "./Book.module.css";
import CartContext from "../../contexts/CartContext";
import { useParams } from "react-router";
import { IonContent, IonPage, IonItem, IonLabel, IonHeader, IonTitle, IonToolbar, IonCol, IonButtons, IonBackButton } from "@ionic/react";
import { books } from "../../data/data";

const Book: React.FC = () => {
  const cart = useContext(CartContext);
  const [book, setBook] = useState({
    titre: "",
    auteur: "",
    genre: "",
    parution: "",
    editeur: "",
    prix: "",
    image: "",
    description: ""
  });

  const { id }: any = useParams();

  useEffect(() => {
    if (id !== undefined) {
      const selection: any = books.find(
        (one: any) => one.id === parseInt(id, 10)
      );
      console.log("kkk", id, selection);
      setBook(selection);
    }
  }, [id]);
  const addCart = () => {
    const newBookList = cart.books;
    newBookList.push(book);
    cart.setBooks(newBookList);
  };
  //const book = books.find((one: any) => one.id === parseInt(id, 10)) || "";
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
        <div className="background">
          <div>
            {book.titre !== "" && (
              <>
                <div className={styles['form']}>
                  <IonItem>
                    <p className={styles['title']}>{book.titre}</p>
                  </IonItem>
                  <IonItem>
                    <img className={styles['img']} src={book.image} />
                  </IonItem>

                  <IonItem>
                    <p className={styles['padding-input']}>Prix: {book.prix} €</p>
                  </IonItem>

                  <IonItem routerLink="/cart">
                    <button className={styles['button']} onClick={addCart}>Ajouter au panier</button>
                  </IonItem>
                </div>

                <div className={styles['form']}>
                  <IonItem>
                    <p className={styles['padding-input']}>Auteur: {book.auteur}</p>
                  </IonItem>
                  <IonItem>
                    <p className={styles['padding-input']}>Genre: {book.genre}</p>
                  </IonItem>
                  <IonItem>
                    <p className={styles['padding-input']}>Date de parution: {book.parution}</p>
                  </IonItem>
                  <IonItem>
                    <p className={styles['padding-input']}>Éditeur: {book.editeur}</p>
                  </IonItem>
                </div>

                <IonItem>
                  <p className={styles['padding-input']}>Description: <br /> <br /> {book.description}</p>
                </IonItem>
              </>
            )}
          </div>
        </div>
      </IonContent>

    </IonPage>
  );
};

export default Book;
