import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useEffect } from 'react';
export default function InfoHorario({obj, info, setInfo,info2, setInfo2}){

    useEffect (() => {

        setInfo([...info, obj.title, obj.posterURL])

    }, [obj])
    

    return(

        obj.days.map((array, indice) => 
            <Container key={indice}>

                <h3>{array.weekday} - {array.date}</h3>

                <div>
                    {
                    array.showtimes.map((arr)=> 
                    
                    <StyledLink to={`/assentos/${arr.id}`} onClick={() => setInfo2([...info2, array.weekday, array.date, arr.id, arr.name])}>

                        <ButtonTime key={arr.id}> {arr.name} </ButtonTime>

                    </StyledLink>

                    )}
                </div>

            </Container>
        )


                // <ButtonTime>
                //     15:00
                // </ButtonTime>


        
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

        margin: 6px 0 12px 0;
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
const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
}
`