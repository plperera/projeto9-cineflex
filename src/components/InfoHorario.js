import styled from 'styled-components'
export default function InfoHorario(){

    return(

        <Container>

            <h3>Quinta-feira - 24/06/2021</h3>

            <div>
                <ButtonTime>
                    15:00 
                </ButtonTime>

                <ButtonTime>
                    15:00
                </ButtonTime>
            </div>

        </Container>

    )
}
const Container = styled.div`

    display:flex;
    flex-direction:column;
    align-items:left;
    justify-content:center;

    margin-left: 24px;

    width:100%;

    h3{

        font-size: 20px;
        color: #293845;

    }

    div {
        display:grid;
        grid-template-columns: 1fr 1fr 4fr;
        grid-column-gap: 12px;

        margin: 22px 0;
    }

`
const ButtonTime = styled.div`

    width: 82px;
    height: 43px;

    background: #E8833A;
    border-radius: 3px;

    font-size: 18px;
    color: #FFFFFF;

    display: flex !important;
    align-items: center;
    justify-content:center;
    
`