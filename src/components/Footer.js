import styled from "styled-components"
import { useState } from 'react'

export default function Footer({footer, setFooter, footer2, setFooter2, info, setInfo, info2, setInfo2}){

    let display = footer ? ("flex"):("none")


    return(
        <FooterComponent display={display}>
            <Imagem><img src={info[1]}/></Imagem> 
            <div>
                <p>{info[0]}</p>
                {footer2 ? (<p>{info2[0]} - {info2[3]}</p>):("")}
            </div>
            
        </FooterComponent>
    )
}
const FooterComponent = styled.div`

    background-color: #DFE6ED;
    color: #293845;
    font-size: 26px;
    border: 1px solid #9EADBA;

    width: 100%;
    height: 117px;

    display: ${(props) => props.display} !important;
    flex-direction:row;
    align-items: center;
    justify-content: left;

    position:fixed;
    bottom: 0;

    
    p {
        height: 40px;
        font-size: 26px;
        color: #293845;
        margin-left: 14px;
    }
`
const Imagem = styled.div`

    display:flex;
    align-items:center;
    justify-content:center;

    width: 64px;
    height: 89px;

    background-color: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 2px;

    margin-left: 10px;

    img {
        width: 48px;
        height: 72px;
        
    }
`