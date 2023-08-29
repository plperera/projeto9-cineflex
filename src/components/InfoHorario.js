import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function InfoHorario({allSessionData, allData, setAllData}){ 
    
    function handleSelected({sessionData, sessionSelected}){
        const { selected } = allData
        setAllData({...allData, selected: {
            ...selected, 
            sessionWeekday: sessionData?.weekday,
            sessionDate: sessionData?.date,
            sessionTime: sessionSelected?.name,
            sessionTimeId: sessionSelected?.id
        }})
    }

    return(
        allSessionData.days.map((sessionData, indice) => 
            <Container key={indice}>
                <h3>{sessionData?.weekday} - {sessionData?.date}</h3>

                <div>
                    {sessionData.showtimes.map((e) => 
                    
                        <StyledLink to={`/assentos/${e.id}`} onClick={() => handleSelected({sessionData, sessionSelected: e})}>

                            <ButtonTime key={e.id}>
                                {e.name}
                            </ButtonTime>

                        </StyledLink>

                    )}
                </div>
            </Container>
        ) 
    )
}
const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:left;
    justify-content:center;
    margin-left: 24px;
    width:100%;
    row-gap: 2vh;
    padding-bottom: 4vh;
    h3{
        font-size: 22px;
    }
    > div {
        display: flex;
        align-items: center;
        justify-content: left;
        column-gap: 3vw;
        row-gap: 2vh;
        flex-wrap: wrap;
    }
`
const ButtonTime = styled.div`
    width: 120px;
    height: 50px;
    border-radius: 3px;
    font-size: 20px;
    font-weight: 700;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: radial-gradient( circle farthest-corner at 10% 20%,  #DA680B 0%, #FF9215 100% );
    transition: background-position 0.3s;
    background-size: 200% 200%;
    background-position: right bottom;
    :hover {
        background-position: left top;
    }
    @media (max-width: 1280px) {
        width: 100px;
        height: 40px;
        font-size: 18px;
    }
`
const StyledLink = styled(Link)`
    text-decoration: none;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`