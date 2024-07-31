import React, { useEffect, useState } from 'react';

function Quotes() {
    const [quotes, setQuotes] = useState([]);

    useEffect(() => { 
        fetch('https://seussology.info/api/quotes')
        .then(response => response.json())
        .then(data => setQuotes(data.slice(0, 10)))
  }, []);

    return (
        <div className="quotes">
            {quotes.map((quote, index) => (
             <p key={index}>{quote.text}</p>
            ))}
        </div>
    );
}

export default Quotes;