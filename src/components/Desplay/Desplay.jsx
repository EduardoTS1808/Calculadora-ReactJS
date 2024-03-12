import React from "react";



function Desplay (props){
    const resultadoConta = {
    
        height:' 80px',
       display: 'flex',
       alignItems: 'center',
       marginRight: '45px' ,
       fontSize: '60px',
       color: '#fff',
}
    return(
        <div style={resultadoConta}>
            {props.conteudo}
        </div>
    )
}

export default Desplay