import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components"

export default function Footer({allData}){

    const [locationPath, setLocationPath] = useState(undefined)
    const location = useLocation();

    useEffect(() => { 
        setLocationPath(location?.pathname?.split("/")[1] || undefined)
    }, [location.pathname])

    return(
        <AlignContainer>
            <FooterComponent display={locationPath === 'sessoes' || locationPath === 'filme' || locationPath === 'assentos' ? ('flex'):('none')}>
                <ImagemContainer><img src={allData?.selected?.sessionImageUrl} alt=''/></ImagemContainer> 
                <div>
                    <p>{allData?.selected?.movieName}</p>
                    {allData?.selected?.sessionTime ? (<p>{allData?.selected?.sessionWeekday} - {allData?.selected?.sessionTime}</p>):(<></>)}
                </div>
                
            </FooterComponent>
        </AlignContainer>  
    )
}
const AlignContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const FooterComponent = styled.div`
    font-size: 26px;
    width: auto;
    height: auto;
    padding: 1vh .6vw;
    border-radius: 10px;
    display: ${(props) => props.display} !important;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position:fixed;
    bottom: 1vh;
    background-image: radial-gradient( circle farthest-corner at 10% 20%,  #130647 0%, #1306472F 60% );
    transition: background-position 0.3s;
    background-size: 200% 200%;
    background-position: right bottom;
    backdrop-filter: blur(15px);
    :hover {
        background-position: left top;
    }
    p {
        height: 50px;
        font-size: 17px;
        font-weight: 600;
        text-align: left;
        margin-left: 14px;
        width: auto;
        display: flex;
        align-items: center;
        justify-content: left;
    }
    @media (max-width: 850px) {
        padding: 1.5vh 3vw;
        width: 90%;
    }
`
const ImagemContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    width: calc(48px * 1.4);
    height: calc(72px * 1.4); 
    img {
        max-width: calc(48px * 1.4);
        max-height: calc(72px * 1.4); 
        border-radius: 5px;
        object-fit: cover;
    }
`