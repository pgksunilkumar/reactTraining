import React from 'react';
import ReactDom from 'react-dom';
//import styles from './karuthStyles.css';
import styles from './karuth.styles.module.css';

class KaruthStyleSheetComponent extends React.Component {

    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <ul className = {styles.navbar}>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Online Training</a></li>
                    <li>
                        <a href="#">Class Room Training</a></li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>

                <h1>Karuth Technologies</h1>

                <p>The rising demand for seamless technology has enabled developers to work on both back-end,
            front-end and many other related fields. <br />
                    Karuth Technologies offering online and classroom training for trending technologies.</p>

                <h2>Popular Trending Courses</h2>
                <ul>
                    <li>React JS</li>
                    <li>ANGULAR</li>
                    <li>Node JS</li>
                    <li>MONGO DB</li>
                    <li>Python</li>
                    <li>Java Fullstack</li>
                </ul>

                <address className = {styles.xyz}>#502, Mahendra Residency,
                        <br />Beside Tipsy Topsy Bakery,Satyam Theatre Road,
                        <br />Near Aditya Trade Centre, Ameerpet, Hyderabad-16,
                        <br />Telangana, India</address>
            </div>
        );
    }

}

ReactDom.render(<KaruthStyleSheetComponent />, document.getElementById("root"));
