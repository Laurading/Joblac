import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonIcon,
} from "@ionic/react";
import React, { useState } from "react";

import OneBook from "../components/OneBook";
import {
  chevronForwardOutline,
  chevronBackOutline,
  book,
} from "ionicons/icons";
import BookList from "../components/BookList";

import CategoriesContainer from "../components/CategoriesContainer";

const Categories: React.FC = () => {
  const [catSel, setCatSel] = useState("");
  const [bookSel, setBookSel] = useState({ id: null, titre: "" });

  const handleCat = (cat: string) => {
    setCatSel(cat);
  };

  const selectBook = (book: any) => {
    setBookSel(book);
  };

  const removeCat = () => {
    setCatSel("");
  };

  const removeBook = () => {
    setBookSel({ id: null, titre: "" });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          {catSel === "" && <IonTitle>Categories de livre </IonTitle>}
          {catSel !== "" && !bookSel.id && (
            <>
              <IonIcon
                icon={chevronBackOutline}
                onClick={removeCat}
                slot="start"
              />
              <IonTitle>{catSel}</IonTitle>
            </>
          )}
          {bookSel.id && (
            <>
              <IonIcon
                icon={chevronBackOutline}
                onClick={removeBook}
                slot="start"
              />
              <IonTitle>{bookSel.titre}</IonTitle>
            </>
          )}
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {catSel === "" && <CategoriesContainer handleCat={handleCat} />}
        {catSel !== "" && !bookSel.id && (
          <BookList
            catSel={catSel}
            handleBack={removeCat}
            selectBook={selectBook}
          />
        )}
        {bookSel.id && <OneBook book={bookSel} />}
      </IonContent>
    </IonPage>
  );
};

export default Categories;
