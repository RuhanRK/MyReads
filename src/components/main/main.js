import React, { Component } from 'react';
import Header from './../pages/header';
import BooksContain from './../books/booksContain';
import SearchContainer from './../search/searchContainer';
import Footer from './../pages/footer';
import Loader from './../pages/loader';
import PropTypes from 'prop-types';

export default class Main extends Component {
    render() {
        const {books, moveBook, isLoading} = this.props;
        return (
            <div className="list-books fixed-footer">
                <Header/>
                <div>
                    {isLoading ? 
                        <Loader/>
                        :
                        <BooksContain 
                            books={books}
                            moveBook={moveBook}
                        />
                    }
                    <SearchContainer/>
                </div>
                <Footer/>
            </div>
        )
    }
}


Main.propTypes = {
    books: PropTypes.array.isRequired,
    moveBook: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired
}