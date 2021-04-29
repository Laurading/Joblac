import {
  IonHeader,
  IonTitle,
  IonToolbar
} from "@ionic/react";

export default function Header() {
  return(
    <IonHeader>
                <IonToolbar>
                    <IonTitle>
                            <img className="img" src="././assets/img/Joblac.png" />
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
  )
}