import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

export default function Sucesso({allData, setAllData}){

    const navigate = useNavigate()

    function reset (){  
        setAllData({})
        navigate("/")
    }
   
    return(
        <Container>     

            <h2>Pedido feito com sucesso!</h2>

            <SessionDataContainer>

                <ImageContainer>
                    <img  src={allData?.selected?.sessionImageUrl} alt='' /> 
                </ImageContainer>

                <RightSideContainer>
                    <SessionDataCard>
                        <h3>Filme e sessão</h3>
                        <p>{allData?.selected?.movieName}</p>
                        <p>{allData?.selected?.sessionDate} {allData?.selected?.sessionTime}</p>
                    </SessionDataCard>

                    <SessionDataCard>
                        <h3>Ingressos</h3>
                        {allData?.selected?.sessionSeats?.map((arr) => (
                            <p>Assento {arr?.name}</p>
                        ))}
                    </SessionDataCard>

                    <SessionDataCard>
                        <h3>Comprador</h3>
                        <p>Nome: {allData?.buyer?.name}</p>
                        <p>CPF: {allData?.buyer?.cpf}</p>
                    </SessionDataCard>
                </RightSideContainer>
                
            </SessionDataContainer>

            <ContainerButton>
                <button onClick={() => reset()}>Voltar pra Home</button>
            </ContainerButton>
        </Container>
    )
}

const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction: column;
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
        padding-bottom: 5vh;
    }
`
const SessionDataContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: left;
    width: 100%;
    column-gap: 3vw;
    flex-wrap: wrap;
`
const ImageContainer = styled.div`  
    width: auto;
    height: auto;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    display:flex;
    align-items:center;
    justify-content:center;
    margin-bottom: 1vh;
    img {
        max-width: calc(129px * 3);
        max-height: calc(193px * 3);
        object-fit: cover;
        border-radius: 10px;
    }    
    @media (max-width: 1280px) {
       width: 95%;
       img {
            max-width: 95%;
       }
    }
`
const RightSideContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 50%;
    height: calc(193px * 3);
    @media (max-width: 850px) {
        width: 95%;
        height: auto;
        row-gap: 5vh;
    }
`
const SessionDataCard = styled.div`
    margin-top: 20px;
    width: 100%;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: left;
    row-gap: 1vh;
    h3 {
        width: 100%;
        font-size: 24px;
        font-weight: 700;
    }
    p {
        width: 100%;
        font-weight: 400;
        font-size: 22px;
        line-height: 26px;
        margin-top: 5px;
    } 
    @media (max-width: 850px) {
        margin-top: 20px;
        row-gap: 1.5vh;
        h3 {
            font-size: 28px;
        }
    }
`
const ContainerButton = styled.div`
    margin-top: 30px;
    display:flex;
    justify-content:center;
    align-items:center;
    width: 100%;
    button {
        color: #ffffff;
        padding: 14px 16px;
        font-size: 25px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        outline: none; 
        transform: translateZ(0);
        width: 30%;
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
    @media (max-width: 850px) {
        button{
            width: 100%;
        }
    }
`
