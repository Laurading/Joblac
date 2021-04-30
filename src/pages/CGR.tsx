import { IonPage, IonContent, IonHeader, IonToolbar, IonTitle } from '@ionic/react';
import React, { useContext } from "react";

const CGR: React.FC = () => {


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
        CGR
      </IonContent>
    </IonPage>
  );
};

export default CGR;
