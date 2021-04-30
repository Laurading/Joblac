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
import styles from "./Account.module.css";
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
              <IonTitle>
                <img src="././assets/img/Joblac.png" />
              </IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent fullscreen>
            <div className="background">
              <div>
                <p className={styles["title-tab-2"]}>M O N &nbsp; C O M P T E</p>
                <p className={styles["return"]}> B O N &nbsp; R E T O U R &nbsp; P A R M I S &nbsp; N O U S <br /> <span>{user.username}</span></p>
              </div>

              <div className={styles['form']}>

                <div className={styles['padding-content']}>
                  <IonItem>
                    <div className={styles['padding-input']}>
                      <IonLabel><p>Email: {user.email}</p></IonLabel>
                    </div>
                  </IonItem>
                </div>

                <div className={styles['padding-content']}>
                  <IonItem>
                    <div className={styles['padding-input']}>
                      <IonLabel><p>Adresse: <br /> {user.adress} <br /> {user.city} <br /> {user.zipcode}</p></IonLabel>
                    </div>
                  </IonItem>
                </div>

              </div>
              <div className={styles['form']}>
                <div className={styles['padding-content']}>
                  <IonItem routerLink="/cgd">
                    <div className={styles['padding-input']}>
                      <IonLabel><p className={styles['color-black']}>Conditions générales d’utilisation</p></IonLabel>
                    </div>
                  </IonItem>
                </div>

                <div className={styles['padding-content']}>
                  <IonItem routerLink="/pdc">
                    <div className={styles['padding-input']}>
                      <IonLabel><p className={styles['color-black']}>Politique de confidentialité</p></IonLabel>
                    </div>
                  </IonItem>
                </div>

                <div className={styles['padding-content']}>
                  <IonItem routerLink="/cgr">
                    <div className={styles['padding-input']}>
                      <IonLabel><p className={styles['color-black']}>Conditions générales de retour</p></IonLabel>
                    </div>
                  </IonItem>
                </div>
              </div>

              <div className={styles['padding-content']}>
                <IonItem onClick={disconnect}>
                  <div className={styles['padding-input']}>
                    <IonLabel><p className={styles['deconnexion']}>Se déconnecter</p></IonLabel>
                  </div>
                </IonItem>
              </div>
            </div>
          </IonContent>
        </IonPage>
      )}
    </>
  );
};

export default Account;
