import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

function Books(props) {
    const [books, setBooks] = useState([]);
    const item = props.item

    useEffect(() => {
        fetch('https://seussology.info/api/books')
        .then(response => response.json())
        .then(data => setBooks(data))
  }, []);

    return (
        <div>
            <h1>Books</h1>
            {books.map((book) => (
                <Link to={`/books/${book.id}`} key={book.id}>
                    <img src={book.image} key={book.image} alt={book.title} />
                </Link>
            ))}
        </div>
    );
}

export default Books;