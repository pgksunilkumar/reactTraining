import React from 'react';
import ReactDom from 'react-dom';

class VisibilityComponent extends React.Component {

    constructor(){
        super();
        this.state = {isVisible:false, text:""};
        this.visibilityHandler = this.visibilityHandler.bind(this);
        this.openWebsite = this.openWebsite.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }
    visibilityHandler(){
        //this.isVisible = !this.isVisible;
        //this.state.isVisible = !this.state.isVisible;

        /* this.setState(function(){
            return this.state.isVisible = !this.state.isVisible;
        }); */
       /*  this.setState(()=>{
            return this.state.isVisible = !this.state.isVisible;
        }); */

        this.setState(()=>(this.state.isVisible = !this.state.isVisible))
            
      
    }

    openWebsite(event){
        event.preventDefault();
        console.log("Hello, Karuth Technologies");
    }

    onChangeHandler(evt){
        
        evt.preventDefault();
        console.log(evt.target.value);
        let v = evt.currentTarget.value;
        this.setState((prev)=>{

            return {
                if(v){
                    text =  v;
                }
            }


        });
    }

    render() {
        return (
            <div>
                <h1>Visibility test</h1>
                <button onClick={this.visibilityHandler}>{this.state.isVisible ? "Hide details" : "Show details"}</button>
                {this.state.isVisible && <div><h2>The details are displayed</h2></div>}
                <div>
                    <a href="http://www.karuthtechnologies.com" onClick={(event)=>this.openWebsite(event)}>Karuth Technologies</a>
                </div>
                <input onChange = {this.onChangeHandler}></input>
                {<p>{this.state.text}</p>}
            </div>
        );

    }

}

ReactDom.render(<VisibilityComponent/>, document.getElementById("root"));