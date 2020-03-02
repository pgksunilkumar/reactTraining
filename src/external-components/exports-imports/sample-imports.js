import React from 'react';
import ReactDOM from 'react-dom';
/* import Header from './header';
import Body from './body';
import Footer from './footer'; */
import { myLetVar } from './exports-imports/test'
import { myFunction as fun} from './exports-imports/test';
import { myConstVar } from './exports-imports/test';
//import { myLetVar, myConstVar, myFunction as fun } from './exports-imports/test';
//import * as test from './exports-imports/test'
import mathValue  from './exports-imports/test';
import { Header } from './header';

class MyMain extends React.Component {
    render() {
        return (
            <div>
                {console.log(myLetVar)}
                {fun()}
                {console.log(myConstVar)}
                {console.log(mathValue)}
                <Header/>
               {/*  {console.log(mathValue)}

                {console.log(test.myLetVar)}
                {test.myFunction()}
                {console.log(test.myConstVar)} */}
               

               {/*  <Header />
                <Body />
                <Footer /> */}
            </div>
        );
    }
}
ReactDOM.render(<MyMain />, document.getElementById('root'));