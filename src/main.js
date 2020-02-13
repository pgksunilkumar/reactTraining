//console.log("THIS IS TESTING OUTPUT");
import React from 'react';
import ReactDom from 'react-dom';
import App from './app';
import { setInterval } from 'timers';


let person = {
    name: "Srinivas",
    company: "Karuth Technologies",
    cate: 'A',
    reg: 'YES'

};

const arr = [2,4,66,undefined,null,"Hello3"];
let name = "Srinivas";
const element = (
    <div>
        <h1> Hello, This is my element</h1>
        <h2>Welcome, {name}</h2>
        <h3>It is now , {new Date().toLocaleTimeString()}</h3>
        <h1>Faculty name : {person.name}</h1>
        <h1>Institue name : {person.company}</h1>
        {(person.cate && person.cate === 'A') && <p>Registered:{person.reg}</p>}
        {f1(person)}        
    </div>
);

function f1(p) {
    if (p.name) {
        return (
            <div>
                <h3>{p.name}</h3>
                <h3>{p.company}</h3>
            </div>
        )
    }
}

const timer = () => {
    const ele = (
        <div>
            <h1>The timer is running now:</h1>
            <h3>It is now , {new Date().toLocaleTimeString()}</h3>
        </div>
    )

    ReactDom.render(ele, document.getElementById('root'));
}

//setInterval(timer, 1000);
//const ele = f1(person);
let count = 0;
const add = ()=>{

    count++;
    console.log(count);
    myRenderer();

}

const sub = ()=>{
    if(count <= 0){
        count = 0;
    }else{
        count--;
    }  
  
    console.log(count);
    myRenderer();
}

const reset = ()=>{
    count = 0;
    myRenderer();
}

const myRenderer = ()=>{
    const myEle = (
        <div>
            <h3>Count:{count}</h3>
            <button id="btn1" name="btn1" onClick={add}>+</button>
            <button onClick={sub}>-</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
    ReactDom.render(myEle, document.getElementById('root'));
}

myRenderer();





