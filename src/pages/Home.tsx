import React from "react";
import {
  IonContent,
  IonPage,
  IonGrid,
  IonRow,
  IonCol,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonItem,
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
                <IonItem routerLink="/book/1">
                  <p className={styles['orange']}>Grizzly</p>
                  <img className={styles['img']} src="../../assets/img/1.jpeg" />
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <p className={styles['orange-xs']}>Gountami</p>
                <IonItem routerLink="/book/2">
                  <img className={styles['img']} src="../../assets/img/2.jpeg" />
                </IonItem>
              </IonCol>
              <IonCol>
                <p className={styles['orange-xs']}>Malk</p>
                <IonItem routerLink="/book/3">
                  <img className={styles['img']} src="../../assets/img/3.jpeg" />
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <p className={styles['orange-xs']}>Hunkom</p>
                <IonItem routerLink="/book/4">
                  <img className={styles['img']} src="../../assets/img/4.jpeg" />
                </IonItem>
              </IonCol>
              <IonCol>
                <p className={styles['orange-xs']}>Walabi</p>
                <IonItem routerLink="/book/5">
                  <img className={styles['img']} src="../../assets/img/5.jpeg" />
                </IonItem>
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
