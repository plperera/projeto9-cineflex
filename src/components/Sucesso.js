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

            <div>
                <h3>Filme e sessão</h3>
                <p>{allData?.selected?.movieName}</p>
                <p>{allData?.selected?.sessionDate} {allData?.selected?.sessionTime}</p>
            </div>

            <div>
                <h3>Ingressos</h3>
                {allData?.selected?.sessionSeats?.map((arr) => (
                    <p>Assento {arr?.name}</p>
                ))}
            </div>

            <div>
                <h3>Comprador</h3>
                <p>Nome: {allData?.buyer?.name}</p>
                <p>CPF: {allData?.buyer?.cpf}</p>
            </div>

            <ContainerButton>

            <button onClick={() => reset()}>Voltar pra Home</button>

            </ContainerButton>
           

        </Container>
    )
}

const Container = styled.div`

    padding-top: 67px;

    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;

h2{
    font-size: 24px;
    font-weight:700;
    line-height: 28px;
    width:150px;
    text-align:center;
    margin: 40px 0;
    color: #247A6B;
}
h3{
    margin-left:29px;
    font-size: 24px;
    font-weight: 700;
    color: #293845;
}
p{
    margin-left:29px;
    font-weight: 400;
    font-size: 22px;
    line-height: 26px;
    color: #293845;

}
div{
    margin-top:41px;
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:left;
    justify-content:left;
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
