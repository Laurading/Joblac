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
    IonTitle
    
} from "@ionic/react";
import "./Tab1.css";

const Tab1: React.FC = () => {
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
                            <IonCol></IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol></IonCol>
                            <IonCol></IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol></IonCol>
                            <IonCol></IonCol>
                        </IonRow>
                        
                    </IonGrid>  
                </div>
            </IonContent>
        </IonPage>
    );
};

export default React.memo(Tab1);