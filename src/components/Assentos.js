import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'
import { useState, useEffect } from 'react';
import AssentosIndiv from './AssentosIndiv';


export default function Assentos({footer2, setFooter2, info, setInfo, info2, setInfo2}){

    const params = useParams();
    const [assentos, setAssentos] = useState(undefined)
    const [selecionados, setSelecionados] = useState([])
    const [name, setName] = useState([])
    const [cpf, setCpf] = useState([])

    useEffect (() =>{

        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${params.sessaoId}/seats`)
        promise.then( request => setAssentos(request.data))

        setFooter2(!footer2)

    }, [])

    console.log(assentos) 

    function handleForm(e) {

        e.preventDefault();
        if (selecionados.length > 0){
        const body = {
            name,
            cpf,
            selecionados
        }
        console.log(body)
        setName ("")
        setCpf ("")
        } else alert("Acho que você esqueceu de selecionar um assento")

    }

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
            
            <Formulario onSubmit={ handleForm }>
                
                <div>
                    <p>Nome do comprador:</p>
                    <input onChange={(e) => setName(e.target.value)} value = {name} required></input>
                </div>

                <div>
                    <p>CPF do comprador:</p>
                    <input onChange={(e) => setCpf(e.target.value)} value = {cpf} required></input>
                </div>

                <ContainerButton>

                    <button type='submit'>Clica clica</button>

                </ContainerButton>
            </Formulario>

            
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
const Formulario = styled.form`

    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;

    margin-top: 50px;

    width: 100%;

    p {
        font-size: 18px;
        color: #293845;  
    }
    input {   
        box-sizing: border-box; 
        width: 85%;
        height: 51px;

        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 3px;
    }
    div {
        width:100%;
        margin-left: 24px;
    }


`
const ContainerButton = styled.div`

    margin-top:57px;

    display:flex;
    justify-content:center;
    align-items:center;

    button {
        width: 225px;
        height: 42px;

        background: #E8833A;
        border-radius: 3px;

        font-size: 18px;
        color: #FFFFFF;
    }
`