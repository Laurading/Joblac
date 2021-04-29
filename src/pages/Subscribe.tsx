import {
  IonButton,
  IonCol,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { Redirect, Route } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import ShowErrorForm from "../components/ShowErrorForm";
import styles from "./Account.module.css";

const Subscribe: React.FC = () => {
  const initialData = {
    email: "",
    password: "",
    checkPassword: "",
    city: "",
    zipcode: "",
    adress: "",
    username: "",
  };

  const [dataLogin, setDataLogin] = useState(initialData);
  const [errorsSubscribe, setErrorsSubscribe] = useState(initialData);
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = () => {
    setErrorsSubscribe(initialData);
    axios
      .post(
        "http://apiecommerce.eu-4.evennode.com/api/user/register",
        dataLogin
      )
      .then((res) => {
        setRedirect(true);
      })
      .catch((err) => {
        if (err.response.status === 412) {
          setErrorsSubscribe({
            ...initialData,
            ...err.response.data,
          });
        }
        if (err.response.status === 409) {
          setErrorsSubscribe({
            ...initialData,
            [err.response.data.problem]: err.response.data.message,
          });
        }
      });
  };

  const handleChange = ({ target }: any) => {
    setDataLogin({
      ...dataLogin,
      [target.name]: target.value,
    });
  };
  return (
    <>
      {redirect ? (
        <Redirect to="/login" />
      ) : (
        <IonPage>
          <IonContent>
            <div className="background">
              <div className={styles["orange"]}>
                <p className={styles["title-tab-2"]}>Inscription</p>
              </div>
            </div>
            <IonRow>
              <IonCol size="12">
                <IonItem>
                  <IonLabel>Email:</IonLabel>
                  <IonInput
                    value={dataLogin.email}
                    type="text"
                    name="email"
                    onIonChange={handleChange}
                  />
                </IonItem>
                <ShowErrorForm error={errorsSubscribe.email} />

                <IonItem>
                  <IonLabel>Nom utilisateur:</IonLabel>
                  <IonInput
                    value={dataLogin.username}
                    type="text"
                    name="username"
                    onIonChange={handleChange}
                  />
                </IonItem>
                <ShowErrorForm error={errorsSubscribe.username} />

                <IonItem>
                  <IonLabel>Mot de passe:</IonLabel>
                  <IonInput
                    type="password"
                    name="password"
                    value={dataLogin.password}
                    onIonChange={handleChange}
                  />
                </IonItem>
                <ShowErrorForm error={errorsSubscribe.password} />
                <IonItem>
                  <IonLabel>Retapez votre mot de passe</IonLabel>
                  <IonInput
                    type="password"
                    value={dataLogin.checkPassword}
                    name="checkPassword"
                    onIonChange={handleChange}
                  />
                </IonItem>
                <ShowErrorForm error={errorsSubscribe.checkPassword} />
                <IonItem>
                  <IonLabel>adresse</IonLabel>
                  <IonInput
                    type="text"
                    value={dataLogin.adress}
                    name="adress"
                    onIonChange={handleChange}
                  />
                </IonItem>
                <ShowErrorForm error={errorsSubscribe.adress} />

                <IonItem>
                  <IonLabel>Code postal</IonLabel>
                  <IonInput
                    type="text"
                    value={dataLogin.zipcode}
                    name="zipcode"
                    onIonChange={handleChange}
                  />
                </IonItem>
                <ShowErrorForm error={errorsSubscribe.zipcode} />

                <IonItem>
                  <IonLabel>ville</IonLabel>
                  <IonInput
                    type="text"
                    value={dataLogin.city}
                    name="city"
                    onIonChange={handleChange}
                  />
                </IonItem>
                <ShowErrorForm error={errorsSubscribe.city} />
              </IonCol>

              <IonCol size="12">
                <IonButton type="submit" onClick={handleSubmit}>
                  S'inscrire
                </IonButton>
              </IonCol>
            </IonRow>
            <a href="/login">Vous avez deja un compte ? Connectez vous</a>
          </IonContent>
        </IonPage>
      )}
    </>
  );
};

export default Subscribe;
