import { Link } from 'react-router-dom'
import styled from 'styled-components'

import InfoHorario from './InfoHorario'

export default function Horario(){

    return(
        <Container>     

            <h2>Selecione o horário</h2>

            <InfoHorario/>
            <InfoHorario/>
            
        </Container>
    )
}
const Container = styled.div`

    padding-top: 67px;

    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;

    h2 {
    font-size: 24px;
    margin: 40px 0;
    color: #293845;
}

`