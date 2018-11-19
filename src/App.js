import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import Search from './components/search/search';
import Main from './components/main/main';
import {BrowserRouter, Switch ,Route} from 'react-router-dom';
import NotFound from './components/pages/notfound';

class BooksApp extends React.Component {
  state = {
    books: [],
    isLoading: true
  }

  getBook = () =>{
    BooksAPI.getAll().then(books => {
      this.setState({
        books: books,
        isLoading: false
      })
    })
  }

  componentDidMount = () =>{
    this.getBook();
  }

  moveBook = (book, shelf) =>{
      BooksAPI.update(book, shelf);
      this.getBook();
  }

  render() {
    return (
      <div className="app">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => (
            <Main
              books={this.state.books}
              moveBook={this.moveBook}
              isLoading={this.state.isLoading}
            />
          )}
          />
          <Route
            exact path="/search" render={() => {
              return(
                <Search
                  books={this.state.books}
                  moveBook={this.moveBook}
                />
              )
            }}
          />
          <Route component={NotFound}/>
        </Switch>
      </BrowserRouter>
      </div>
    )
  }
}

export default BooksApp
