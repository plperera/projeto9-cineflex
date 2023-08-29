import styled from 'styled-components'

export default function AssentosIndiv({seatData, setForm, form}){

    function handleClick() {
        const { seats = [] } = form || {};
 
        let updatedSeats;

        const seatsWithoutCurrent = seats.filter(e => e.name !== seatData?.name);
    
        if (seatsWithoutCurrent.length !== seats.length) {
            updatedSeats = seatsWithoutCurrent;
        } else {
            updatedSeats = [...seats, { id: seatData?.id, name: seatData?.name }];
        }
    
        setForm(prevForm => ({
            ...prevForm,
            seats: updatedSeats
        }));
    }
    
    return(                  
        <Card 
            isAvailable={seatData?.isAvailable}
            isSelected={form?.seats?.some( e => e?.name === seatData?.name) && seatData?.isAvailable}
            onClick={ () => handleClick()}                    
        >
            {seatData?.name}
        </Card>         
    )
}

const Card = styled.div`
    font-size: 13px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    width: 40px;
    height: 40px; 
    border-radius: 5px;
    background-color: ${(props) => props.isAvailable ? (props.isSelected ? ("#CE8210"):("#C9C9C983")):("#2B2B2B83")};
    border: 3px solid;
    border-color: ${(props) => props.isAvailable ? (props.isSelected ? ("#BE6512"):("#C9C9C983")):("#2B2B2B83")};
    box-sizing: border-box;
    cursor: pointer;
    user-select: none;
    @media (max-width: 850px) {
        width: 55px;
        height: 55px; 
        font-size: 16px;
    }
`