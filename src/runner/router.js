import React from 'react';
import ReactDom from 'react-dom';
import Header from './header.js';
import Footer from './footer.js';

class Router extends React.Component{
    render(){
        return( 
            <Header />
            <Footer />
        )
    }
}

ReactDom.render(<Router />, document.getElementById("root"));
