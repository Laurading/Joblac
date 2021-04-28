import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
} from "@ionic/react";
import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

const Account: React.FC = () => {
  const [redirect, setRedirect] = useState(false);
  const [user, setUser] = useState({
    email: "",
    username: "",
    adress: "",
    city: "",
    zipcode: "",
  });

  const disconnect = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setRedirect(true);
  };

  useEffect(() => {
    const userId = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    if (userId && token) {
      axios
        .get(
          "http://apiecommerce.eu-4.evennode.com/api/user/" +
            userId +
            "/" +
            token
        )
        .then((res) => {
          const { email, username, adress, city, zipcode } = res.data[0];
          setUser({ email, username, adress, city, zipcode });
        })
        .catch((err) => {
          localStorage.removeItem("user");
          localStorage.removeItem("token");
          setRedirect(true);
        });
    } else {
      setRedirect(true);
    }

    return () => {
      setRedirect(false);
    };
  }, []);

  return (
    <>
      {redirect && <Redirect to="/login" />}

      {user.email !== "" && (
        <IonPage>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Mon compte</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent fullscreen>
            <IonHeader collapse="condense">
              <IonToolbar>
                <IonTitle size="large">Account</IonTitle>
              </IonToolbar>
            </IonHeader>
            <IonItem>
              <IonLabel>{user.email}</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>
                {user.adress} <br /> {user.city} <br /> {user.zipcode}
              </IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>{user.username}</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>information de livraiwon</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>informations de paiement</IonLabel>
            </IonItem>
            <IonItem onClick={disconnect}>
              <IonLabel>Se déconnecter</IonLabel>
            </IonItem>
          </IonContent>
        </IonPage>
      )}
    </>
  );
};

export default Account;
