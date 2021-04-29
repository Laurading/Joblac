import React, { useState } from "react";
import {
  IonContent,
  IonPage,
  useIonViewDidEnter,
  useIonViewDidLeave,
  IonSearchbar,
} from "@ionic/react";
import styles from "./BookList.module.css";
import Books from "../../components/Books";

const Tab2: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [searchText, setSearchText] = useState('');

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
            <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)}></IonSearchbar>
            <p className={styles['title-tab-2']}>Nom catégorie</p>
          </div>
          <Books/>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default React.memo(Tab2);