import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Header } from './header';
import { Home } from './home';
import Body from './body';
import Footer from './footer'
import './styles.css';
import { About } from './about';
import { PageNotFound } from './pageNotFound';
import { Contact } from './contact';
import Profile from './profile';

class MainRouter extends React.Component {
    render() {
        return (
            <div>

                <Router>
                    <Header />
                    <Switch>
                        
                        <Route path="/" exact={true}><Home /></Route>
                        <Route path="/about"><About /></Route>
                        <Route path="/contact" component={Contact}></Route>
                        <Route path="/profile"><Profile /></Route>
                        <Route><PageNotFound /></Route>

                    </Switch>
                    <Footer />
                </Router> 
            </div>
        );
    }
}
ReactDOM.render(<MainRouter />, document.getElementById('root'));