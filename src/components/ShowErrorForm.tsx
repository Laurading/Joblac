import React, { MouseEventHandler, useState } from "react";
import styles from "./ShowErrorForm.module.css"

interface ContainerProps {
  error: string;
}

const ShowErrorForm: React.FC<ContainerProps> = ({ error }) => {
  return <>{error !== "" && <p className={styles['error']}>{error}</p>}</>;
};

export default ShowErrorForm;
