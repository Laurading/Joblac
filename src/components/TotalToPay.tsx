import { IonButton, IonItem } from "@ionic/react";
import React, { MouseEventHandler, useState } from "react";
import styles from './TotalToPay.module.css'

interface ContainerProps {
  total: number;
}

const ShowErrorForm: React.FC<ContainerProps> = ({ total }) => {
  return <IonItem routerLink="/cart"><button>Payer {total} €</button></IonItem>;
};

export default ShowErrorForm;
