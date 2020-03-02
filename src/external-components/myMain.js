import React from 'react';
import ReactDOM from 'react-dom';
import { Header } from './header';
import Body from './body';
import Footer from './footer';

class MyMain extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Body/>
                <Footer/>
            </div>
        );
    }
}
ReactDOM.render(<MyMain />, document.getElementById('root'));