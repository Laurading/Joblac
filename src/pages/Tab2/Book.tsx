import React, { useState, useEffect, useContext } from "react";
import styles from "./Book.module.css";
import CartContext from "../../contexts/CartContext";
import { IonPage, IonContent } from "@ionic/react";
import { useParams } from "react-router";
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
      <IonContent>
        <div>
          {book.titre !== "" && (
            <>
              <p>{book.titre}</p>
              <p>Auteur: {book.auteur}</p>
              <p>Genre: {book.genre}</p>
              <p>date de parution: {book.parution}</p>
              <p>editeur: {book.editeur}</p>
              <p>{book.prix} €</p>
              <button onClick={addCart}>Ajouter au panier</button>
            </>
          )}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Book;
