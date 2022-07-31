import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'
import { useState, useEffect } from 'react';
import AssentosIndiv from './AssentosIndiv';


export default function Assentos(){

    const params = useParams();
    const [assentos, setAssentos] = useState(undefined)
    const [selecionados, setSelecionados] = useState([])
    

    useEffect (() =>{

        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${params.sessaoId}/seats`)
        promise.then( request => setAssentos(request.data))

    }, [])

    console.log(assentos) 

    return(
        <Container>     

            <h2>Selecione o(s) assento(s)</h2>
            
            <ContainerAssentos>

                {assentos ? (
                    
                    assentos.seats.map((arr) => <AssentosIndiv 
                            name={arr.name} 
                            isAvailable={arr.isAvailable} 
                            id={arr.id}
                            selecionados={selecionados}
                            setSelecionados={setSelecionados}
                        /> )
                    
                ):(
                    <>Carregando...</>
                )}
                

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
    

`