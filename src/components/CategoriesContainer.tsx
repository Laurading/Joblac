import { categories } from "../data/data.json";
import { IonItem, IonLabel, IonIcon } from "@ionic/react";
import { chevronForwardOutline } from "ionicons/icons";
interface ContainerProps {}

const CategoriesContainer: React.FC<ContainerProps> = () => {
  const cat = Object.keys(categories);
  const categoriesList = cat.map((category: string) => {
    return (
      <IonItem>
        <IonLabel>{category}</IonLabel>
        <IonIcon icon={chevronForwardOutline} slot="end" />
      </IonItem>
    );
  });

  return (
    <div>
      <div>Quel genre de livres recherchez vous ?</div>
      {categoriesList}
    </div>
  );
};

export default CategoriesContainer;
