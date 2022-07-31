import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'

import InfoHorario from './InfoHorario'
import { useState, useEffect } from 'react';

export default function Horario(){

    const params = useParams();
    const [horarios, setHorarios] = useState(undefined);


    useEffect(() => {

        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/movies/${params.filmeId}/showtimes`)
        promise.then( (promise) => {        
               
            setHorarios (promise.data)
        } )

    }, [])

    console.log(horarios)       

    return(
        <Container>     

            <h2>Selecione o horário</h2>
            
            {horarios ?(
                <InfoHorario obj = {horarios}/>
            ):(
                <div>Carregando...</div>
            )}
            
            
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