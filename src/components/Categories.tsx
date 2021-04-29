
import { useState } from 'react'
import SingleCategorie from './SingleCategorie';

export default function Categories() {
    // const [categories, setCategories] = useState([null])
    // fetch('http://localhost:8100/assets/data/categories.json')  // call API
    //     .then(response => response.json())
    //     .then(json => setCategories(json))

    // if (categories) {
        return (

                <div>
                        {/* {categories.map((categories, index) =>
                            <SingleCategorie key={index} {...categories} />
                        )} */}
                        <SingleCategorie/>
                        <SingleCategorie/>

                </div>


        )
    // }
    // return null
}