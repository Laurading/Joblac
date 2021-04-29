import React, { useContext } from "react";
// import CartContext from "../contexts/CartContext";

interface ContainerProps {
  book: any;
}

const CategoriesContainer: React.FC<ContainerProps> = ({ book }) => {
  // const { books, updateBooks } = useContext(CartContext);
  // const addCart = () => {
  //   const newBookList = books;
  //   newBookList.push(book);
  //   updateBooks(newBookList);
  // };

  return (
    <div>
      <p>{book.titre}</p>
      <p>Auteur: {book.auteur}</p>
      <p>Genre: {book.genre}</p>
      <p>date de parution: {book.parution}</p>
      <p>editeur: {book.editeur}</p>
      <p>{book.prix}</p>
      {/* <button onClick={addCart}>Ajouter au panier</button> */}
    </div>
  );
};

export default CategoriesContainer;
