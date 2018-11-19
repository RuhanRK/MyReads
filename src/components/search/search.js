import React from 'react'
import Header from '../pages/header';
import Footer from './../pages/footer';
import SearchBook from './searchBooks';
import PropTypes from 'prop-types';

const Search = (props) => {
    const {moveBook, books} = props;
    return (
        <div className="list-books-content fixed-footer">
            <Header/>
            <SearchBook 
                moveBook={moveBook}
                books={books}
            />
            <Footer/>
        </div>
    )

}

Search.propTypes = {
    moveBook: PropTypes.func.isRequired,
    books: PropTypes.array.isRequired
}

export default Search; 