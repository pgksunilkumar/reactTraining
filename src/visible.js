import React from 'react';
import ReactDOM from 'react-dom';
let visible = false;

const isVisible = () => {

    visible = !visible;
    renderer();
}

const renderer = () => {
    const ele = (

        <div>
            <h1>Visibility test</h1>
            <button onClick={isVisible}>{visible ? "Hide details" : "Show details"}</button>
            {visible && <div><h2>The details are displayed</h2></div>}
        </div>
    );

    ReactDOM.render(ele, document.getElementById("root"));
}

renderer();
