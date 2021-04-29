import React, { useEffect, useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  useIonViewDidEnter,
  useIonViewDidLeave,
  IonLabel
} from "@ionic/react";
import styles from "./Tab4.module.css";
import Header from "../../components/Header";

const Tab4: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useIonViewDidEnter(() => {
    console.log("useIonViewDidEnter");
    setIsVisible(true);
  });

  useIonViewDidLeave(() => {
    console.log("useIonViewDidLeave");
    setIsVisible(false);
  });

  if (!isVisible) return null;

  return (
    <IonPage>
      <Header/>
      <IonContent>
        <div className="background"></div>
      </IonContent>
    </IonPage>
  );
};

export default React.memo(Tab4);