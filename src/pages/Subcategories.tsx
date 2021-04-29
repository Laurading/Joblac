import React from "react";
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
import { RouteComponentProps } from "react-router";

interface CategoriesProps
  extends RouteComponentProps<{
    category: string;
  }> {}

const Subcategories: React.FC<any> = ({ match }) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Sous Categories de livre </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Books</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div>categorie {match.params.category}</div>
      </IonContent>
    </IonPage>
  );
};

export default Subcategories;
