import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'
import { useState, useEffect } from 'react';

export default function Assentos(){

    const params = useParams();
    const [assentos, setAssentos] = useState(undefined)

    useEffect (() =>{

        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${params.sessaoId}/seats`)
        promise.then( request => setAssentos(request.data))

    }, [])

    console.log(assentos) 

    return(
        <Container>     

            <h2>Selecione o(s) assento(s)</h2>
            
            <ContainerAssentos>

                {assentos.seats.map((arr) => (
                    <div>{arr.name}</div>
                ))}

            </ContainerAssentos>
            
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
const ContainerAssentos = styled.div`

    display: grid;

    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-column-gap: 7px;
    grid-row-gap: 15px;
    
    div {

        font-size: 11px;

        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;

        width: 26px;
        height: 26px; 
        border-radius: 12px;

        background-color: #C3CFD9;
        border: 1px solid #808F9D;

    }

`