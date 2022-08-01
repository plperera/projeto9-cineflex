import styled from 'styled-components'

import BannerFilme from './BannerFilme'

export default function Sucesso(){

   
    return(

        <Container>     

            <h2>Pedido feito com sucesso!</h2>

            <div>
                <h3>Filme e sessão</h3>
                <p>Nome do filme</p>
                <p>Data e hora</p>
            </div>

            <div>
                <h3>Ingressos</h3>
                <p>Assentos X</p>
                <p>Assentos Y</p>
            </div>

            <div>
                <h3>Comprador</h3>
                <p>Nome: Nome do Comprador</p>
                <p>CPF: 111.222.333-44</p>
            </div>
           

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

}
p{

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
