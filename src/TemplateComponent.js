import React from 'react';
import ReactDom from 'react-dom';

function Header(prop){
    console.log(prop);
    return(
        <h3>Title : {prop.title}, This is Header Component</h3>
    );
}

function Body(props){
    return(<h1>This is Body Component</h1>);
}

function Footer(props){
    return(<h3>This is Footer Component, {props.copyright}</h3>);
}


function MyContainer(){
    const t = "Karuth Technologies";
    return (
        <div id="">
            <h1>Inside MyContainer Component!</h1>
            <Header title={t}/>
            <Body />
            <Footer copyright = " All Rights Reserved, @2020" />

        </div>
    )
}

ReactDom.render(<MyContainer/>, document.getElementById("root"));