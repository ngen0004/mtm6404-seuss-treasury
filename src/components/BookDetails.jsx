import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function BookDetails() {
    const { id } = useParams();
    const [book, setBook] = useState(null);
    
    useEffect(() => {
        fetch('https://seussology.info/api/books/' + id)
        .then(response => response.json())
        .then(data => setBook(data))
  }, [id]);

    if (!book) {
        return <div>Loading...</div>;
    }

    return (
        <div className="det">            
            <img src={book.image} key={book.image} alt={book.title} />
            <div>
                <h3>{book.title}</h3>
                <p>{book.description}</p>
            </div>
            
        </div>
    );
}

export default BookDetails;