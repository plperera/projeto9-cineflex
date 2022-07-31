import styled from "styled-components"

export default function Teste({children, color}){
    return (
        <ButtonTeste color={color}>{children}</ButtonTeste>
    )
}

const ButtonTeste = styled.div`
width: 100px;
height: 100px;
background-color: ${(props) => props.color};

display:flex;
align-items:center;
justify-content:center;
color: white;
`
