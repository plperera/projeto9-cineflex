import styled from 'styled-components'
import { useEffect, useState } from 'react'
import axios from 'axios'

import BannerFilme from './BannerFilme'

export default function Home({allData, setAllData}){

    const [movies, setMovies] = useState(undefined)
 
    useEffect (() =>{

        const promise = axios.get("https://mock-api.driven.com.br/api/v7/cineflex/movies")
        promise.then( request => setMovies(request?.data) )        

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return(
        <Container>   

            <h2>Selecione o filme</h2>

            <Cards>
                {movies?.length > 0 ? (

                    <BannerFilme array={movies} allData={allData} setAllData={setAllData} />

                ):(<div> Carregando...</div>)}
            </Cards>
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
}

`
const Cards = styled.div`

    display:grid;

    grid-template-columns: 1fr 1fr;
    grid-column-gap: 30px;
    grid-row-gap: 10px;

img {
    width: 129px;
    height: 193px; 
    object-fit: cover;
}
div {
    width: 145px;
    height: 209px;

    background: #FFFFFF;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;

    display:flex;
    align-items:center;
    justify-content:center;
}
`