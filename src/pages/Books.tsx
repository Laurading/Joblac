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

import { chevronForwardOutline } from "ionicons/icons";

import React from "react";
import CategoriesContainer from "../components/CategoriesContainer";

const Books: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Categories de livre </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Books</IonTitle>
          </IonToolbar>
        </IonHeader>
        <CategoriesContainer />
      </IonContent>
    </IonPage>
  );
};

export default Books;
