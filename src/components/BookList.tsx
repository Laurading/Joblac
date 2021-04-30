import React from "react";
import { books } from "../data/data";
import { IonItem, IonLabel, IonIcon } from "@ionic/react";
interface ContainerProps {
  catSel: string;
  handleBack: any;
  selectBook: any;
}

const CategoriesContainer: React.FC<ContainerProps> = ({
  catSel,
  selectBook,
}) => {
  const listBooks = books.map((book: any) => {
    const handleClick = () => {
      selectBook(book);
    };
    if (catSel === book.genre) {
      return (
        <IonItem onClick={handleClick} key={book.titre}>
          <IonLabel>
            {book.titre} - {book.auteur}
            prout
          </IonLabel>
        </IonItem>
      );
    }
  });

  return <div>{listBooks}</div>;
};

export default CategoriesContainer;
