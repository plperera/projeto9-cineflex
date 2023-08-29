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
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    padding: 10vh 5vw;
    row-gap: 4vh;
    h2 {
        width: 100%;
        font-size: 32px;
        font-weight: 600;
        border-left: 8px solid #B91A1A; 
        padding: 6px 0;
        padding-left: 10px;
    }
    @media (max-width: 1280px) {
        padding: 12vh 5vw;
    }
    @media (max-width: 850px) {
        h2 {
            font-size: 22px;
        }
    }
`