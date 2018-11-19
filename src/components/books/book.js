import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class Book extends Component {
    render() {
        const {book, moveBook, currentShelf} = this.props;
        let bookInfo = {
            image: book.imageLinks ? book.imageLinks.thumbnail : "https://i2.wp.com/theava.com/wp-content/uploads/2014/11/VantreeseNoPic.jpg?resize=128%2C193",
            titile: book.title ? book.title : 'Not Found',
            author: book.authors ? book.authors[0] : 'Not Found'
        }

        return (
            <div>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" 
                            style={{width: 180, height: 200,background: `url("${bookInfo.image}") center center no-repeat` }}></div>
                        <div className="book-shelf-changer">
                        <select
                            onChange={(event)=> moveBook(book, event.target.value)}
                            value={currentShelf}
                        >
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                        </div>
                    </div>
                    <div className="book-title">{bookInfo.titile}</div>
                    <div className="book-authors">{bookInfo.author}</div>
                </div>
            </div>
        )
    }
}

Book.propTypes = {
    currentShelf: PropTypes.oneOf([
		'currentlyReading',
		'wantToRead',
        'read',
        'none'
    ]).isRequired,
    book: PropTypes.object.isRequired,
    moveBook: PropTypes.func.isRequired
}