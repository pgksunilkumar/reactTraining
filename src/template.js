import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
    render() {
        return (
            <h3>Title : {this.props.title}, This is Header Component</h3>
        );
    }
}
// {props : {title: "value1"}}
class Body extends React.Component {
    render() {
        return (
            <h1>This is Body Component</h1>
        )
    }

}

class Footer extends React.Component {

    render() {
        return (
            <h3>This is Footer Component, {this.props.copyright}</h3>
        );
    }
}

const template = (
    <div>
        <h1>Inside Template Element!</h1>
        <Header />
        <Body />
        <Footer />

    </div>
);

class MyContainer extends React.Component {
    render() {
        return (
            <div>
                <h1>Inside MyContainer Component!</h1>
                <Header title="Karuth Technologies" />
                <Body />
                <Footer copyright = " All Rights Reserved, @2020" />

            </div>
        )
    };
}



ReactDOM.render(<MyContainer/>, document.getElementById("root"));