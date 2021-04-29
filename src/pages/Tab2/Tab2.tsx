import React, { useState } from "react";
import { IonContent, IonPage, IonSearchbar } from "@ionic/react";
import styles from "./Tab2.module.css";
import Categories from "../../components/Categories";

const Tab2 = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <IonPage>
      <IonContent>
        <div className="background">
          <div className={styles["orange"]}>
            <IonSearchbar
              value={searchText}
              onIonChange={(e) => setSearchText(e.detail.value!)}
            ></IonSearchbar>
            <p className={styles["title-tab-2"]}>
              Quel genre de livre recherchez-vous?
            </p>
          </div>
          <Categories />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default React.memo(Tab2);
