import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import * as BooksAPI from './../..//BooksAPI';
import Book from './../books/book';
import Loader from './../pages/loader';
import PropTypes from 'prop-types';


export default class SearchBook extends Component {
    state ={
        query: '',
        searchedBooks: [],
        isLoading: false
    }
    
    updateQuery = (query) => {
        this.setState({
            query: query.trimStart(),
            isLoading: true
        });
        this.getSearchedBooks(query);
    }
    getSearchedBooks = (query) => {
        if(query){
            BooksAPI.search(query)
            .then(searchedBooks => {
                if(searchedBooks.error){
                    this.setState({
                        searchedBooks: [],
                        isLoading: true
                    })
                }
                else{
                    this.setState({
                        searchedBooks,
                        isLoading: false
                    })
                }
            })
        }
        else{
            this.setState({
                searchedBooks: [],
                isLoading: false
            })
        }
        
    }
    render() {
        const {moveBook, books} = this.props;
        return (
                <div className="search-books">
                    <div className="search-books-bar">
                        <Link className="close-search" to="/"><span className="close">Close</span></Link>
                        <div className="search-books-input-wrapper">
                            <input 
                                type="text" 
                                placeholder="Search by title or author"
                                value={this.state.query}
                                onChange={(event) => this.updateQuery(event.target.value)}
                            />

                        </div>
                    </div>
                    <div className="search-books-results">
                    {this.state.isLoading ? 
                        <Loader/>
                        :
                        <ol className="books-grid">
                            {
                                this.state.searchedBooks.map(book => {
                                    let shelf= "none";
                                    books.map(books=> books.id === book.id ? shelf=books.shelf : '')
                                    return(
                                        <li key={book.id}>
                                            <Book 
                                                book={book}
                                                moveBook={moveBook}
                                                currentShelf={shelf}
                                            />
                                        </li>
                                    )
                                })
                            }
                        </ol>
                    }
                    
                    </div>
                </div>
        )
    }
}


SearchBook.propTypes = {
	books: PropTypes.array.isRequired,
	moveBook: PropTypes.func.isRequired
}