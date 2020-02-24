import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
    render() {
      return (
        <div>
          <h1>This is Header page.</h1>
          <h2>built using React.js + React Router v4 + Express.js</h2>
          <h2>Now, It is Server-side rendering !</h2>
        </div>
      );
    }
  }
  export default Header;