import React from 'react';
import ReactDom from 'react-dom';
import { setTimeout } from 'timers';

class ComponentLifecycle extends React.Component {


    constructor(props) {
        super(props);

        console.log("constructor() is called...");

        this.state = { favoriteColor: "red", show: true };
        this.removeTitle = this.removeTitle.bind(this);
    }

    static getDerivedStateFromProps(prevProps, prevState) {
        console.log("getDerivedStateFromProps() is called...");

        return null;
    }

    componentDidMount() {
        console.log("componentDidMount() is called...");
        console.log("-----------------------------------------");

        setTimeout(() => {
            this.setState(() => {
                return {
                    favoriteColor: "black"
                }
            });
        }, 3000);


    }

    shouldComponentUpdate(){
        console.log("shouldComponentUpdate() is called...");

        return true;
        
    }

    getSnapshotBeforeUpdate(props, state){
        console.log("getSnapshotBeforeUpdate() is called...");
        return null;
    }
    
    componentDidUpdate(){
        console.log("componentDidUpdate() is called...");
        console.log("----------------------------------------");
    }

    removeTitle(){
        this.setState(()=>{
            return{
                show : false
            }
        });
    }
    render() {
        console.log("render() is called...");
        let title;

        if(this.state.show){
            title = <Title/>;
        }
        return (
            <div>
                <h1>Displaying Component Lifecycle</h1>
                <h2>My favorite color is {this.state.favoriteColor}</h2>
                <button onClick = {this.removeTitle}>Remove Title</button>
                {title}
                
            </div>
        );
    }



}

class Title extends React.Component{

    componentWillUnmount(){
        console.log("componentWillUnmount() is called on child...");
        
    }
    render(){
        return(
            <div>
                <h1>This is Title child component</h1>
            </div>
        );
    }
}



ReactDom.render(<ComponentLifecycle />, document.getElementById("root"));