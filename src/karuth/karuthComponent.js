import React from 'react';
import ReactDom from 'react-dom';

class KaruthComponent extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            myBodyStyles : {
                paddingLeft: "11em",
                fontFamily: 'Georgia, Times New Roman, Times, serif',
                color: 'purple',
                backgroundColor: '#d8da3d'
            },
            navBar: {
                listStyleType: 'none',
                padding: '0',
                margin: '0',
                position: 'absolute',
                top: '2em',
                left: '1em',
                width: '9em'
            }
        }
    }

    componentDidMount(){

        let styles = this.state.myBodyStyles;
        for(let key in styles){
            document.body.style[key] = styles[key];
        }
        
    }
    render() {

        const myAddress = {
            marginTop: '1em',
            paddingTop: '1em',
            borderTop: 'thin dotted'
        }

        const myList = {
            background: 'white',
            margin: '0.5em 0',
            padding: '0.3em',
            borderRight: '1em solid black'
        }
        return (
            <div>
                <ul style = {this.state.navBar}>
                    <li style = {myList}>
                        <a href="#">Home</a>
                    </li>
                    <li style = {myList}>
                        <a href="#">Online Training</a></li>
                    <li style = {myList}>
                        <a href="#">Class Room Training</a></li>
                    <li style = {myList}>
                        <a href="#">Contact</a>
                    </li>
                </ul>

                <h1 style = {{color : '#003380'}}>Karuth Technologies</h1>

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

                <address style = {myAddress}>#502, Mahendra Residency,
                        <br />Beside Tipsy Topsy Bakery,Satyam Theatre Road,
                        <br />Near Aditya Trade Centre, Ameerpet, Hyderabad-16,
                        <br />Telangana, India</address>
            </div>
        );
    }

}

ReactDom.render(<KaruthComponent />, document.getElementById("root"));
