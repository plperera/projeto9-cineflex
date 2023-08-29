import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'

import InfoHorario from './InfoHorario'
import { useState, useEffect } from 'react';

export default function Horario({allData, setAllData}){

    const params = useParams();
    const [allSessionData, setAllSessionData] = useState(undefined);

    useEffect(() => {

        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/movies/${params.filmeId}/showtimes`)
        promise.then( (promise) => {         
            setAllSessionData(promise.data)
        })

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])   

    return(
        <Container>     
            <h2>Selecione o horário</h2>
            
            {allSessionData ?(

                <InfoHorario allSessionData={allSessionData} allData={allData} setAllData={setAllData}/>
            
            ):(<div>Carregando...</div>)}
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