import { IonButton } from "@ionic/react";
import React, { MouseEventHandler, useState } from "react";

interface ContainerProps {
  total: number;
}

const ShowErrorForm: React.FC<ContainerProps> = ({ total }) => {
  return <IonButton>Payer {total} €</IonButton>;
};

export default ShowErrorForm;
