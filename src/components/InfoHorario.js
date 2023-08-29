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