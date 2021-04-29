import { IonText } from "@ionic/react";
import React, { MouseEventHandler, useState } from "react";

interface ContainerProps {
  error: string;
}

const ShowErrorForm: React.FC<ContainerProps> = ({ error }) => {
  return <>{error !== "" && <IonText color="danger">{error}</IonText>}</>;
};

export default ShowErrorForm;
