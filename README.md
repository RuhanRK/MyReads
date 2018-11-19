# Udacity Fend MyReads Project

A React book tracking app that helps users organize their books into **currently reading**, **read**, and **want to read** categories.

##Project Overview


Create a bookshelf app that allows you to select and categorize books you have read, are currently reading, or want to read. The project emphasizes using React to build the application and provides an API server and client library that you will use to persist information as you interact with the application.

---------

#-----------For Users :blush:--------------------

- The goal of the application is to help you manage the state of a list of books. You have the choice between 3 shelves: **"Currently Reading"**, **"Want to read"** and **"read"**.

- You can see the state of the books in the main page (path: _"/"_).

- You can search for new books in the _**"/search"**_ page.
- If you navigate to any random page, Like this _**"/hshds"**_. then You'll redirect to **Blank Page**.
- Use the buttons **Reading**, **Want to**, **Read** and **None** to move the books to another shelf.
- **None** allows you remove the book from every shelves.
- Use **Plus** :heavy_plus_sign: Icon Button (Which is available at **right bottom** corner) to navigate **Search** Page.
- Use **Home** :house: Icon for navigate Home page Anytime.

####Some Features for User Interface
* Cool Background.
* Loading Animation.
* Awesome favicon.
* Fully Responsive.


## Screenshots
Here are some screenshot of this project:

![Image of MyReads Project](https://preview.ibb.co/f3dxh0/Capture.png)

![Image of MyReads Project](https://preview.ibb.co/mrhCFL/Capture2.png)

![Image of MyReads Project](https://preview.ibb.co/mSHevL/Capture3.png)

![Image of MyReads Project](https://image.ibb.co/dkpRaL/Capture4.png)

![Image of MyReads Project](https://image.ibb.co/e1HON0/Capture5.png)

![Image of MyReads Project](https://preview.ibb.co/kwcevL/Screenshot-33.png)


------------
#--------------For Developers :smiley:-------------

##Installing and Launching for Local

* **Download** or **clone** this repository to your local machine
* Install all project dependencies with `npm install`
* Start the development server with `npm start`
* Navigate to__  `localhost:3000`
* And Enjoy it :heart_eyes:


## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).


## Built With-----------------
* [create-react-app](https://github.com/facebook/create-react-app)
- npm packages:
    - prop-types
    - react-dom
    - react-router
    - react-router-dom
* [Google Fonts](https://fonts.google.com)
* [Font Awesome](https://fontawesome.com/)

