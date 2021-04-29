import React from "react";
import {
  IonContent,
  IonPage,
} from "@ionic/react";

const BookList = () => {

  return (
    <IonPage>
      <IonContent>
        <div className="background">
          test
        </div>
      </IonContent>
    </IonPage>
  );
};

export default React.memo(BookList);