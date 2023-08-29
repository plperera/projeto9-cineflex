import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'
import { useState, useEffect } from 'react';
import AssentosIndiv from './AssentosIndiv';


export default function Assentos({allData, setAllData}){

    const params = useParams();
    const [form, setForm] = useState(undefined)
    const [ sessionData, setSessionData] = useState(undefined)

    function CustomHandleForm ({target: {value, name}}) {
        setForm({...form, [name]: value})
    }

    useEffect(() => {
        console.log("form", form)
    }, [form])

    const navigate = useNavigate()

    useEffect (() =>{
        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${params.sessaoId}/seats`)
        promise.then( request => setSessionData(request.data))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function handleForm(e) {
        e.preventDefault();
        if (form?.seats?.length > 0){
            const body = {
                ids: form?.seats?.map( e => e.id),
                name: form?.name,
                cpf: form?.cpf
            }
            console.log(body)

            const request = axios.post("https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many", body)

            request.then(() => {
                const { selected } = allData
                setAllData({...allData, 
                    selected: {
                    ...selected,
                    sessionSeats: form?.seats
                    },
                    buyer: {
                        name: form?.name,
                        cpf: form?.cpf
                    }
                })

                navigate("/sucesso")
            })
        } else alert("Acho que você esqueceu de selecionar um assento")

    }

    return(
        <Container>     

            <h2>Selecione o(s) assento(s)</h2>
            
            <ContainerAssentos>

                {sessionData ? (
                    
                    sessionData.seats.map((e) => 
                        <AssentosIndiv 
                            seatData={e} 
                            setForm={setForm}
                            form={form}
                            key={e?.id}
                        />
                    )
                    
                ):(<>Carregando...</>)}
                
            </ContainerAssentos> 

            <ExemploContainer>
                <ExampleCard>
                    <SeatCard isAvailable={true} isSelected={true} />
                    <h5>Selecionado</h5>
                </ExampleCard>

                <ExampleCard>
                    <SeatCard isAvailable={true} isSelected={false} />
                    <h5>Disponível</h5>
                </ExampleCard>

                <ExampleCard>
                    <SeatCard isAvailable={false} isSelected={false} />
                    <h5>Indisponível</h5>
                </ExampleCard>
            </ExemploContainer>
            
            <Formulario onSubmit={ handleForm }>
                
                <div>
                    <label>Nome do comprador:</label>
                    <input onChange={CustomHandleForm} value={form?.name} name={'name'} required ></input>
                </div>

                <div>
                    <label>CPF do comprador:</label>
                    <input onChange={CustomHandleForm} value={form?.cpf} name={'cpf'} required ></input>
                </div>

                <ContainerButton>
                    <button type='submit'>Reservar assento(s)</button>
                </ContainerButton>
            </Formulario>
 
        </Container>
    )
}
const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    padding: 10vh 5vw;
    row-gap: 5vh;
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
        padding-bottom: 18vh;
    }
`
const ContainerAssentos = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 50%;  
    row-gap: 1vh;
    column-gap: 1vw;
    @media (max-width: 850px) {
        width: 95%;
        row-gap: 1.5vh;
        column-gap: 3vw;
    }
`
const ExemploContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    width: 50%;
    @media (max-width: 850px) {
        width: 95%;
    }
`
const ExampleCard = styled.div`
    width: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    row-gap: 1vh;
    h5{
        font-size: 13px;
        color: #9E9E9E;
    }
`
const SeatCard = styled.div`
    font-size: 13px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    width: 40px;
    height: 40px; 
    border-radius: 5px;
    box-sizing: border-box;
    border: 3px solid;
    background-color: ${(props) => props.isAvailable ? (props.isSelected ? ("#CE8210"):("#C9C9C983")):("#2B2B2B83")};
    border-color: ${(props) => props.isAvailable ? (props.isSelected ? ("#BE6512"):("#C9C9C983")):("#2B2B2B83")}; 
`
const Formulario = styled.form`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    width: 50%;
    label {
        width: 100%;
        height: 100%;
        pointer-events: none;
        font-size: 21px;
        color: rgb(255, 255, 255);
        padding-left: 16px; 
    }
    input {   
        width: 100%;
        height: 100%;
        border: none;
        outline: none;
        background: none;
        border: 1px solid #FFFFFF;
        color: #FFFFFF;
        font-size: 19px;
        padding: 16px 16px;
        border-radius: 4px;
        margin-top: 8px;
        margin-bottom: 23px;
    }
    div {
        width:100%;
        margin-left: 24px;
    }
    @media (max-width: 850px) {
        width: 95%;
        div {
            margin-left: 0;
        }
    }
`
const ContainerButton = styled.div`
    margin-top: 30px;
    display:flex;
    justify-content:center;
    align-items:center;
    button {
        color: #ffffff;
        padding: 14px 16px;
        font-size: 25px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        outline: none; 
        transform: translateZ(0);
        width: 100%;
        font-weight: 700;
        background-image: radial-gradient( circle farthest-corner at 10% 20%,  #DA680B 0%, #FF9215 100% );
        transition: background-position 0.3s;
        background-size: 200% 200%;
        background-position: right bottom;
        :hover {
            background-position: left top;
            transform: translateY(-.2vh);
        }
    }
`