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

            <Exemplo>
                <Selecionado>
                    <div></div>
                    <h5>Selecionado</h5>
                </Selecionado>

                <Disponivel>
                    <div></div>
                    <h5>Disponível</h5>
                </Disponivel>

                <Indisponivel>
                    <div></div>
                    <h5>Indisponível</h5>
                </Indisponivel>
            </Exemplo>
            
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
const Selecionado = styled.div`
    background: #8DD7CF;
    border: 1px solid #1AAE9E;
    display:flex;
    align-items:center;
    justify-content:space-evenly;
`
const Disponivel = styled.div`
    background: #C3CFD9;
    border: 1px solid #7B8B99;
    display:flex;
    align-items:center;
    justify-content:space-evenly;
`
const Indisponivel = styled.div`
    background: #FBE192;
    border: 1px solid #F7C52B;
    display:flex;
    align-items:center;
    justify-content:space-evenly;
`
const Exemplo = styled.div`

    display:flex;
    align-items:center;
    justify-content:space-evenly;

    width:100%;
    margin-top:25px;

    h5{
        font-size: 13px;
        color: #4E5A65;
        margin-top: 60px;
    }

    div{
        box-sizing: border-box;
        border-radius: 17px;

        width: 24px;
        height: 24px;
    }

`