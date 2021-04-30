import React, { useState } from "react";
import {
  IonContent,
  IonPage,
  useIonViewDidEnter,
  useIonViewDidLeave,
  IonGrid,
  IonRow,
  IonCol,
  IonHeader,
  IonToolbar,
  IonTitle,
} from "@ionic/react";
import styles from "./Home.module.css";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>
            <img src="././assets/img/Joblac.png" />
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="background">
          <IonGrid>
            <IonRow>
              <IonCol>
                <img className={styles['img']} src="../../assets/img/1.jpeg"/>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
              <img className={styles['img']} src="../../assets/img/1.jpeg"/>
              </IonCol>
              <IonCol>
              <img className={styles['img']} src="../../assets/img/1.jpeg"/>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
              <img className={styles['img']} src="../../assets/img/1.jpeg"/>
              </IonCol>
              <IonCol>
              <img className={styles['img']} src="../../assets/img/1.jpeg"/>
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
