
import React from 'react';

import './Lemmikraamatud.css';
import './App';
import './Counter'



function Lemmikraamatud(props) {

    console.log(props)

    let raamatuStyle = "nimi";

    const imageStyle = {
        width: '300px',
        height: '300px'
    }

    if (props.nimi === "") {

    }

    return (<div>
        <h2 className={raamatuStyle}> {props.nimi} </h2>
        <h3>{props.autor}</h3>
        <img className="img fluid" src={props.pilt} alt={props.pilt} style={imageStyle} />
    </div>)
}
export default Lemmikraamatud