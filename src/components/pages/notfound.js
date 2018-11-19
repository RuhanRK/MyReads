import React from 'react';
import Header from './header';
import Footer from './footer';
const NotFound = () => {
    return(
        <div className="fixed-footer">
            <Header/>
            <div className="details">
                <h1>Page Not Found</h1>
            </div>
            <Footer/>
        </div>
    )
}

export default NotFound;