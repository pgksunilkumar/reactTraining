import React from 'react';
import ReactDom from 'react-dom';
//import styles from './karuthStyles.css';
import styles from './karuth.styles.module.css';

class ConditionalComponent extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {

        /* let myAddress = this.props.conditions.isAddress;
        let address;
        if (myAddress) {
            address = <Address />
        } */
        //let menus = [{"url":"www.google.com","name":"Home"}, "Online Training", "Class Room Training", "Contact"];
        let menus = [
            {"id":1,"url":"http://www.google.com","name":"Home"}, 
            {"id":2,"url":"http://www.google.com","name":"Online Training"},
            {"id":3,"url":"http://www.google.com","name":"Class Room Training"}, 
            {"id":4,"url":"http://www.google.com","name":"Contact"}
        ];
        let items = menus.map((item)=><li key ={item.id}><a href={item.url}>{item.name}</a></li>);
        return (
            <div>
                <ul className={styles.navbar}>
                    
                    {items}

                    {/* <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Online Training</a></li>
                    <li>
                        <a href="#">Class Room Training</a></li>
                    <li>
                        <a href="#">Contact</a>
                    </li> */}
                </ul>

                <h1>Karuth Technologies</h1>

                <p>The rising demand for seamless technology has enabled developers to work on both back-end,
            front-end and many other related fields. <br />
                    Karuth Technologies offering online and classroom training for trending technologies.</p>

                <h2>Popular Trending Courses</h2>
                {this.props.conditions.isCourses && <Courses/>}
                {this.props.conditions.isAddress ? <Address/> : null}


            </div>
        );
    }

}

function Courses() {
    return (
        <div>
            <ul>
                <li>React JS</li>
                <li>ANGULAR</li>
                <li>Node JS</li>
                <li>MONGO DB</li>
                <li>Python</li>
                <li>Java Fullstack</li>
            </ul>
        </div>
    );
}

function Address() {
    return (
        <div>
            <address className={styles.xyz}>
                #502, Mahendra Residency,
                <br />Beside Tipsy Topsy Bakery,Satyam Theatre Road,
                <br />Near Aditya Trade Centre, Ameerpet, Hyderabad-16,
                <br />Telangana, India
            </address>
        </div >
    );
}


ReactDom.render(<ConditionalComponent conditions={{ "isAddress": true, "isCourses": true }} />, document.getElementById("root"));
