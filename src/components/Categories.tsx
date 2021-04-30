import React from "react";
import { categories } from "../data/data";
import { IonItem, IonIcon } from "@ionic/react";
import { chevronForwardOutline } from "ionicons/icons";
import styles from "./Categories.module.css";

const Categories: React.FC = () => {
  const categoriesList = categories.map((category: string) => {
    return (
      <IonItem routerLink={`/booklist/${category}`} key={category}>
        <p className={styles["padding"]}>{category}</p>
        <IonIcon icon={chevronForwardOutline} slot="end" />
      </IonItem>
    );
  });
  return <div>{categoriesList}</div>;
};

export default Categories;
