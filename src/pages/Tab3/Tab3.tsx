import React, { useEffect, useState } from "react";
import {
  IonContent,
  IonPage,
  useIonViewDidEnter,
  useIonViewDidLeave,
} from "@ionic/react";
import styles from "./Tab3.module.css";
import Header from "../../components/Header";

const Tab3: React.FC = () => {
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
      <IonContent>
        <div className="background">
          <div className={styles['orange']}>
            <p className={styles['title-tab-2']}>PANIER</p>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default React.memo(Tab3);