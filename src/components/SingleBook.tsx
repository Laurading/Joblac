import { Route } from 'react-router-dom';
import { IonItem, IonCol } from '@ionic/react';
import styles from "./SingleCategorie.module.css"
export default function SingleBook(props:any) {

  return (
    <IonItem routerLink="/book">
      <IonCol size="5"><img src="../../assets/img/Joblac.png"></img></IonCol>
      <p className={styles['padding']}>BD et Humour</p>
       {/* <p>{props.categorie}</p> */}
    </IonItem>
  )

}