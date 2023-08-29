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
        <FooterComponent display={locationPath === 'sessoes' || locationPath === 'filme' ? ('flex'):('none')}>
            <Imagem><img src={allData?.selected?.imageUrl} alt=''/></Imagem> 
            <div>
                <p>{allData?.selected?.movieName}</p>
                {allData?.selected?.sessionTime ? (<p>{allData?.selected?.day} - {allData?.selected?.sessionTime}</p>):(<></>)}
            </div>
            
        </FooterComponent>
    )
}
const FooterComponent = styled.div`

    background-color: #DFE6ED;
    color: #293845;
    font-size: 26px;
    border: 1px solid #9EADBA;

    width: 100%;
    height: 117px;

    display: ${(props) => props.display} !important;
    flex-direction:row;
    align-items: center;
    justify-content: left;

    position:fixed;
    bottom: 0;

    
    p {
        height: 40px;
        font-size: 26px;
        color: #293845;
        margin-left: 14px;
    }
`
const Imagem = styled.div`

    display:flex;
    align-items:center;
    justify-content:center;

    width: 64px;
    height: 89px;

    background-color: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 2px;

    margin-left: 10px;

    img {
        width: 48px;
        height: 72px;
        
    }
`