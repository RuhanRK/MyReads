import React from 'react'
import BookShelf from './bookShelf';
import PropTypes from 'prop-types';

const BooksContain = (props) => {
    const {books, moveBook} = props;
    return(
        <div className="list-books-content">
            <BookShelf
                books={books}
                moveBook={moveBook}
                title={"Currently Reading"}
                shelf="currentlyReading"
            />
            <BookShelf
                books={books}
                moveBook={moveBook}
                title={"Want to Read"}
                shelf="wantToRead"
            />
            <BookShelf
                books={books}
                moveBook={moveBook}
                shelf="read"
                title={"Read"}
            />
        </div>
    )
}
BooksContain.propTypes = {
    books: PropTypes.array.isRequired,
    moveBook: PropTypes.func.isRequired
}

export default BooksContain;