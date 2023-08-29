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

            <BannersContainer>
                {movies?.length > 0 ? (

                    <BannerFilme array={movies} allData={allData} setAllData={setAllData} />

                ):(<> Carregando...</>)}
            </BannersContainer>
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
        padding: 12vh 5vw;
        h2 {
            font-size: 22px;
        }
    }
`
const BannersContainer = styled.div`
    display:flex;
    flex-wrap: wrap;
    justify-content: space-between;
    row-gap: 6vh;
    img {
        max-width: calc(129px * 2.2);
        max-height: calc(193px * 2.2);
        object-fit: cover;
        border-radius: 10px;
    }
    div {
        width: calc(129px * 2.2);
        height: calc(193px * 2.2);
        background-color: #150650;
        box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
        display:flex;
        align-items:center;
        justify-content:center;
        :hover {
          transform: translateY(-.8vh)  
        }
    }
    @media (max-width: 1280px) {
        img {
            max-width: calc(129px * 2);
            max-height: calc(193px * 2);
        }
        div {
            width: calc(129px * 2);
            height: calc(193px * 2);
        }
    }
    @media (max-width: 850px) {
        align-items: center;
        justify-content: center;
        img {
            width: 100%;
        }
        div {
            width: 100%;
        }
    }
`