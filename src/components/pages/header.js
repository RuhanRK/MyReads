import React from 'react';
import {Link} from 'react-router-dom';
const Header = () => {
    return(
        <div className="list-books-title">
            <div className="home"><Link to="/"><i className="fas fa-home"></i></Link></div>
            <h1>MyReads</h1>
        </div>
    )
}

export default Header;