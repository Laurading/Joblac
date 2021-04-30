import React from "react";
import { IonContent, IonPage } from "@ionic/react";
import styles from "./Tab2.module.css";
import Categories from "../../components/Categories";

const Tab2 = () => {

  return (
    <IonPage>
      <IonContent>
        <div className="background">
          <div className={styles["orange"]}>
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
