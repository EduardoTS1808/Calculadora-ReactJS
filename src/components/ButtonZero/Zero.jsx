import React from "react";
import './style.css'

function Button (props){

    return(
        <div>
             <button  className='numero-zero' onClick={props.inputDigt}>{props.number}</button>
        </div>
    )
}



export default Button;