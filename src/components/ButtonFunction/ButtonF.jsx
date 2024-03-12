import React from "react";
import './style.css'

function Button ( props){

    return(
        <div>
             <button  onClick={props.operador} className='operador'>{props.sinal}</button>
        </div>
    )
}



export default Button;