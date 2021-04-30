import { IonButton } from "@ionic/react";
import React, { MouseEventHandler, useState } from "react";
import styles from './TotalToPay.module.css'

interface ContainerProps {
  total: number;
}

const ShowErrorForm: React.FC<ContainerProps> = ({ total }) => {
  return <button>Payer {total} €</button>;
};

export default ShowErrorForm;
