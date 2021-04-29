import SingleCategorie from './SingleCategorie';
import React, { useState } from "react";
import { categories, books } from "../data/data";
import { IonItem, IonLabel, IonIcon } from "@ionic/react";
import { chevronBackOutline, chevronForwardOutline } from "ionicons/icons";
import styles from "./Categories.module.css"



const Categories: React.FC = () => {
    // const [categories, setCategories] = useState([null])
    // fetch('http://localhost:8100/assets/data/categories.json')  // call API
    //     .then(response => response.json())
    //     .then(json => setCategories(json))

    // if (categories) {
    const categoriesList = categories.map((category: string) => {
        
        return (
            <IonItem routerLink={'/bookList'} key={category}>
                <p className={styles['padding']}>{category}</p>
                <IonIcon icon={chevronForwardOutline} slot="end" />
            </IonItem>
        );
    });
    return (

        <div>
            {categoriesList}
        </div>


    )
    // }
    // return null
}

export default Categories;