import { IonPage, IonContent,IonHeader, IonToolbar, IonTitle } from '@ionic/react';
import React, { useContext } from "react";

const CGD: React.FC = () => {


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
        CGD
      </IonContent>
    </IonPage>
  );
};

export default CGD;