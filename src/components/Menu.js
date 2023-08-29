import styled from "styled-components"

export default function Menu () {
    return(
        <MenuComponent>
            <span>CINEFLEX</span>
        </MenuComponent>
    )
}

const MenuComponent = styled.div`
    background-color: #B91A1A;
    font-size: 34px;
    font-weight: 700;
    width: 100%;
    height: 67px;
    letter-spacing: 9px;
    display: flex;
    align-items: center;
    justify-content: center;
    position:fixed;
    z-index: 1;
`