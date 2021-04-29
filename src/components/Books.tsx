
import { useState } from 'react'
import SingleBook from './SingleBook';

export default function Books() {
    const [books, setBooks] = useState([null])
    fetch('http://localhost:8100/assets/data/books.json')  // call API
        .then(response => response.json())
        .then(json => setBooks(json))

    if (books) {
        return (

                <div>
                        {/* {books.map((books, index) =>
                            <SingleBook key={index} {...books} />
                        )} */}
                        <SingleBook/>
                        <SingleBook/>

                </div>


        )
    }
    return null
}