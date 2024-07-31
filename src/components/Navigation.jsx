import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <div className="nav">
            <b>Seuss Treasury</b>
            <nav>
                <Link to="/books">Books</Link>          
                <Link to="/quotes">Quotes</Link>                
            </nav>
        </div>
        
    );
}

export default Navigation;