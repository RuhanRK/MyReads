import React from 'react';
import Book from './book';
import PropTypes from 'prop-types';

const BookShelf = (props) => {
    const {books, moveBook, title, shelf} = props;
    return (
        <div>
            <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books
                            .filter(book => book.shelf === shelf)
                            .map(book => (
                                <li key={book.id}>
                                    <Book 
                                        book={book}
                                        moveBook={moveBook}
                                        currentShelf={shelf}
                                    />
                                </li>
                            ))
                        }
                    </ol>
                </div>
            </div>
        </div>
    )
}



BookShelf.propTypes = {
	title: PropTypes.oneOf([
		'Currently Reading',
		'Want to Read',
		'Read'
    ]).isRequired,
    
    books: PropTypes.array.isRequired,
    
	shelf: PropTypes.oneOf([
		'currentlyReading',
		'wantToRead',
		'read'
    ]).isRequired
}

export default BookShelf;
