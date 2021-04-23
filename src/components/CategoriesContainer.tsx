import React, { useState } from "react";
import { categories, books } from "../data/data";
import { IonItem, IonLabel, IonIcon } from "@ionic/react";
import { chevronBackOutline, chevronForwardOutline } from "ionicons/icons";
import BookList from "../components/BookList";

interface ContainerProps {
  handleCat: any;
}

const CategoriesContainer: React.FC<ContainerProps> = ({ handleCat }) => {
  const categoriesList = categories.map((category: string) => {
    const handleClick = () => {
      handleCat(category);
    };
    return (
      <IonItem key={category} onClick={handleClick}>
        <IonLabel>{category}</IonLabel>
        <IonIcon icon={chevronForwardOutline} slot="end" />
      </IonItem>
    );
  });

  return (
    <div>
      <div>Quel genre de livres recherchez vous ?</div>
      {categoriesList}
    </div>
  );
};

export default CategoriesContainer;
