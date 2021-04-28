import React, { MouseEventHandler, useState, useReducer } from "react";
import cartReducer from "../reducers/cart";
import { books } from "../data/data";
import { IonItem, IonLabel, IonIcon } from "@ionic/react";
import { chevronBackOutline } from "ionicons/icons";
interface ContainerProps {
  book: any;
}

const CategoriesContainer: React.FC<ContainerProps> = ({ book }) => {
  const initialState = { books: [] };
  const [state, dispatch] = useReducer(cartReducer, initialState);
  console.log(state);

  const addCart = () => {
    console.log(book);
    dispatch({ type: "addBook", data: book });
  };

  return (
    <div>
      <p>{book.titre}</p>
      <p>Auteur: {book.auteur}</p>
      <p>Genre: {book.genre}</p>
      <p>date de parution: {book.parution}</p>
      <p>editeur: {book.editeur}</p>
      <p>{book.prix}</p>
      <button onClick={addCart}>Ajouter au panier</button>
    </div>
  );
};

export default CategoriesContainer;
