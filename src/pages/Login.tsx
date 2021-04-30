import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonCol,
  IonRow,
  IonToolbar,
  IonLabel,
  IonInput,
  IonButton,
  IonItem,
} from "@ionic/react";
import { Redirect } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import styles from "./Login.module.css";
import { setErrorHandler } from "ionicons/dist/types/stencil-public-runtime";

const Login: React.FC = () => {
  const [dataLogin, setDataLogin] = useState({ email: "", password: "" });
  const [redirect, setRedirect] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = () => {
    setError("");
    axios
      .post("http://apiecommerce.eu-4.evennode.com/api/user/login", dataLogin)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", res.data.user);
        setRedirect(true);
      })
      .catch((err) => {
        setError("Les identifiants ne correspondent pas");
      });
    return () => {
      setRedirect(false);
    };
  };

  const handleChange = ({ target }: any) => {
    setDataLogin({
      ...dataLogin,
      [target.name]: target.value,
    });
  };
  return (
    <>
      {redirect && <Redirect to="/account" />}
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
            <div>
              <p className={styles["title-tab-2"]}>R E J O I G N E Z - N O U S !</p>
            </div>
            <div className={styles['padding-top']}>

              <div className={styles['form']}>
                <div className={styles['padding-content']}>
                <IonItem>
                  <div className={styles['padding-input']}>
                    <IonLabel>Email:</IonLabel>
                  </div>
                  <IonInput
                    type="text"
                    name="email"
                    value={dataLogin.email}
                    onIonChange={handleChange}
                  />

                </IonItem>
                </div>
                <div className={styles['padding-content']}>
                <IonItem>
                  <div className={styles['padding-input']}>
                    <IonLabel>Mot de passe:</IonLabel>
                  </div>
                  <IonInput
                    type="password"
                    name="password"
                    value={dataLogin.password}
                    onIonChange={handleChange}
                  />
                </IonItem>
                </div>
              </div>

              {error !== "" && <p className={styles['error']}>{error}</p>}

              <button type="submit" onClick={handleSubmit} className={styles['button']}>Se connecter</button>

            </div>
            <a href="/subscribe" className={styles['hyperlink']}>Vous n'avez pas de compte ? Inscrivez vous</a>
          </div>

        </IonContent>
      </IonPage>
    </>
  );
};

export default Login;
