import React from "react";
import './style.css'

function ButtonA ( props){

    return(
        <div>
             <button onClick={props.func}  className='action'>{props.sinal}</button>
        </div>
    )
}



export default ButtonA;