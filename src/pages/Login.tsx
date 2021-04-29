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
import styles from "./Account.module.css";
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
        <IonContent>
          <div className="background">
            <div className={styles["orange"]}>
              <p className={styles["title-tab-2"]}>Login</p>
            </div>
          </div>
          <IonRow>
            <IonCol size="12">
              <IonItem>
                <IonLabel>Email:</IonLabel>
                <IonInput
                  type="text"
                  name="email"
                  value={dataLogin.email}
                  onIonChange={handleChange}
                />
              </IonItem>
              <IonItem>
                <IonLabel>Mot de passe:</IonLabel>
                <IonInput
                  type="password"
                  name="password"
                  value={dataLogin.password}
                  onIonChange={handleChange}
                />
              </IonItem>
              {error !== "" && <p>{error}</p>}
            </IonCol>
            <IonCol size="12">
              <IonButton type="submit" onClick={handleSubmit}>
                Se connecter
              </IonButton>
            </IonCol>
          </IonRow>
          <a href="/subscribe">Vous n'avez pas de compte ? Inscrivez vous</a>
        </IonContent>
      </IonPage>
    </>
  );
};

export default Login;
