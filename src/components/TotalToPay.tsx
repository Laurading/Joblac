import { IonItem } from "@ionic/react";
import React from "react";

interface ContainerProps {
  total: number;
}

const ShowErrorForm: React.FC<ContainerProps> = ({ total }) => {
  return <IonItem routerLink="/payementvalid"><button>Payer {total} €</button></IonItem>;
};

export default ShowErrorForm;
