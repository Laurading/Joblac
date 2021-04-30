
import { IonContent, IonPage, IonButtons, IonBackButton, IonHeader, IonToolbar, IonTitle } from "@ionic/react";
import styles from "./BookList.module.css";
import Books from "../../components/Books";
import { books } from "../../data/data";
import { useParams } from "react-router-dom";

const Tab2: React.FC = () => {
  const { category }: any = useParams();

  const listBooks = books.map((book: any) => {
    if (category === book.genre) {
      return (
        <IonPage>
          <IonHeader>
            <IonToolbar>
              <IonTitle>
                <img src="././assets/img/Joblac.png" />
              </IonTitle>
              <IonButtons slot="start">
                <IonBackButton />
              </IonButtons>
            </IonToolbar>
          </IonHeader>

          <IonContent>
            <IonButtons slot="start">
              <IonBackButton />
            </IonButtons>
            <div className="background">
              <div className={styles["orange"]}>
                <p className={styles["title-tab-2"]}>{book.genre}</p>
              </div>
              <Books />
            </div>
          </IonContent>
        </IonPage>
      );
    }
  });

  return <div>{listBooks}</div>;

};

export default Tab2;
