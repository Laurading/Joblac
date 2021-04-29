import React, { useState } from "react";
import {
  IonContent,
  IonPage,
  useIonViewDidEnter,
  useIonViewDidLeave,
  IonSearchbar,
} from "@ionic/react";
import styles from "./Tab2.module.css";
import Categories from "../../components/Categories";

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
            <p className={styles['title-tab-2']}>Quel genre de livre recherchez-vous?</p>
          </div>
          <Categories/>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default React.memo(Tab2);