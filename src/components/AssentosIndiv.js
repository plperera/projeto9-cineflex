import styled from 'styled-components'
import { useState } from 'react';


export default function AssentosIndiv({name, isAvailable, id, selecionados, setSelecionados}){
  
    const [click, setClick] = useState(false)

    function verificaColor (){
        if (isAvailable === true && click === false) return "#C3CFD9"
        else if (isAvailable === true && click === true) return "#8DD7CF"
    }
    
    function verificaBorder (){
        if (isAvailable === true && click === false) return "#B8B99"
        else if (isAvailable === true && click === true) return "#1AAE9E"
    }
    function clicou (id, name){
        setClick(!click)
 
        if (selecionados.filter((arr) => arr === name).length !== 0){
            setSelecionados(selecionados.filter((arr) => arr !== name))
        } else if (isAvailable === true){setSelecionados([...selecionados, name])}
        
    }
    
    return(            
        <>        
            <Card 

                key = {id} 
                color = {isAvailable ? (verificaColor(isAvailable,click)):("#FBE192")}
                borderColor= {isAvailable ? (verificaBorder(isAvailable,click)):("#FBE192")}
                onClick={ () => clicou(id, name)}
                    
            >{name}</Card>
        </> 
    )
}

const Card = styled.div`
    font-size: 11px;

    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;

    width: 26px;
    height: 26px; 
    border-radius: 12px;

    background-color: ${(props) => props.color};
    border: 1px solid ${(props) => props.borderColor};

    box-sizing: border-box;
`