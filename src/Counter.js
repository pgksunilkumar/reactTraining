import React from 'react';
import ReactDom from 'react-dom';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
        this.add = this.add.bind(this);
        this.sub = this.sub.bind(this);
        this.reset = this.reset.bind(this);
    }

    add(){

        this.setState(() => {
            return this.state.count++;
        });


    }

    sub(){

        this.setState(() => {
            if (this.state.count <= 0) {
                 this.state.count = 0;
            } else {
                 this.state.count--;
            }

            return this.state.count;
        });
    }

    reset(){
        this.setState(() => {
            return this.state.count = 0;
        });
    }

    render() {
        return (
            <div>
                {<h1>Hello, {this.props.obj.place}. You are inside Counter component.</h1>}
                <h3>Count:{this.state.count}</h3>
                <button id="btn1" name="btn1" onClick={this.add}>+</button>
                <button onClick={this.sub}>-</button>
                <button onClick={this.reset}>Reset</button>
                {this.props.obj.element}
            </div>
        )
    };

}

const ele = (
    <div>
        <h1>This is external element!</h1>
        <p>This is paragraph tag</p>
    </div>
);

const obj = {
    title : "Karuth Technologies",
    place : "Hyderabad",
    element : ele
}



ReactDom.render(<Counter obj = {obj}/>, document.getElementById("root"));