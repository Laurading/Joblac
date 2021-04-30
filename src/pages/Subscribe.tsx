import {
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { Redirect } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import ShowErrorForm from "../components/ShowErrorForm";
import styles from "./Subscribe.module.css";

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
                <p className={styles["title-tab-2"]}>I N S C R I V E Z - V O U S</p>
              </div>
              <div className={styles['padding-top']}>
                <div className={styles['form']}>
                  <div className={styles['padding-content']}>

                    <IonItem>
                      <div className={styles['padding-input']}>
                        <IonLabel>Email:</IonLabel>
                      </div>
                      <IonInput value={dataLogin.email} type="text" name="email" onIonChange={handleChange} />
                    </IonItem></div>
                  <ShowErrorForm error={errorsSubscribe.email} />

                  <div className={styles['padding-content']}>
                    <IonItem>
                      <div className={styles['padding-input']}>
                        <IonLabel>Nom utilisateur:</IonLabel>
                      </div>
                      <IonInput value={dataLogin.username} type="text" name="username" onIonChange={handleChange}/>
                    </IonItem>
                    </div>
                  <ShowErrorForm error={errorsSubscribe.username} />

                  <div className={styles['padding-content']}>
                    <IonItem>
                    <div className={styles['padding-input']}>
                      <IonLabel>Mot de passe:</IonLabel>
                    </div>
                    <IonInput type="password" name="password" value={dataLogin.password} onIonChange={handleChange}/>
                  </IonItem></div>
                  <ShowErrorForm error={errorsSubscribe.password} />

                  <div className={styles['padding-content']}><IonItem>
                    <div className={styles['padding-input']}>
                      <IonLabel>Retapez votre mot de passe</IonLabel>
                    </div>
                    <IonInput
                      type="password"
                      value={dataLogin.checkPassword}
                      name="checkPassword"
                      onIonChange={handleChange}
                    />
                  </IonItem></div>
                  <ShowErrorForm error={errorsSubscribe.checkPassword} />
                  <div className={styles['padding-content']}><IonItem>
                    <div className={styles['padding-input']}>
                      <IonLabel>Adresse</IonLabel>
                    </div>
                    <IonInput
                      type="text"
                      value={dataLogin.adress}
                      name="adress"
                      onIonChange={handleChange}
                    />
                  </IonItem></div>
                  <ShowErrorForm error={errorsSubscribe.adress} />

                  <div className={styles['padding-content']}><IonItem>
                    <div className={styles['padding-input']}>
                      <IonLabel>Code postal</IonLabel>
                    </div>
                    <IonInput
                      type="text"
                      value={dataLogin.zipcode}
                      name="zipcode"
                      onIonChange={handleChange}
                    />
                  </IonItem>
                  </div>
                  <ShowErrorForm error={errorsSubscribe.zipcode} />

                  <div className={styles['padding-content']}>
                    <IonItem>
                      <div className={styles['padding-input']}>
                        <IonLabel>Ville</IonLabel>
                      </div>
                      <IonInput type="text" value={dataLogin.city} name="city" onIonChange={handleChange} />
                    </IonItem>
                  </div>
                </div>
                <ShowErrorForm error={errorsSubscribe.city} />

                <button type="submit" onClick={handleSubmit}>
                  S'inscrire
                </button>

                <a href="/login" className={styles['hyperlink']}>Vous avez deja un compte ? Connectez vous</a>
              </div>
            </div>

          </IonContent>
        </IonPage>
      )}
    </>
  );
};

export default Subscribe;
