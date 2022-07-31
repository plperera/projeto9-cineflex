import styled from "styled-components"
export default function Footer(){

    return(
        <FooterComponent>
        sou um footer
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

display: flex;
align-items: center;
justify-content: center;

position:fixed;
bottom: 0;

display: none;

`