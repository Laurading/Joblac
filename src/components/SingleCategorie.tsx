import { IonItem } from '@ionic/react';
import styles from "./SingleCategorie.module.css"
export default function SingleCategorie() {

  return (
    
    <IonItem routerLink={'/bookList'}>
      <p className={styles['padding']}>BD et Humour</p>
       {/* <p>{props.categorie}</p> */}
    </IonItem>
  )

}