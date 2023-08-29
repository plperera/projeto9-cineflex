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
    font-size: 11px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    width: 26px;
    height: 26px; 
    border-radius: 12px;
    background-color: ${(props) => props.isAvailable ? (props.isSelected ? ("#8DD7CF"):("#C3CFD9")):("#FBE192")};
    border: 1px solid;
    border-color: ${(props) => props.isAvailable ? (props.isSelected ? ("#1AAE9E"):("#7B8B99")):("#F7C52B")};
    box-sizing: border-box;
    cursor: pointer;
`