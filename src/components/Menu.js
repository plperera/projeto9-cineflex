import styled from "styled-components"

export default function Menu () {
    return(
        <MenuComponent>
            <span>CINEFLEX</span>
        </MenuComponent>
    )
}

const MenuComponent = styled.div`

background-color: #C3CFD9;
color: #E8833A;
font-size: 34px;

width: 100%;
height: 67px;

display: flex;
align-items: center;
justify-content: center;

position:fixed;

`