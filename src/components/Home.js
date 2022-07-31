import { Link } from 'react-router-dom'
import styled from 'styled-components'
export default function Home(){

    const teste = [
        {
            id: 1,
            title: "2067",
            posterURL: "https://image.tmdb.org/t/p/w500/7D430eqZj8y3oVkLFfsWXGRcpEG.jpg",
            overview: "A lowly utility worker is called to the future by a mysterious radio signal, he must leave his dying wife to embark on a journey that will force him to face his deepest fears in an attempt to change the fabric of reality and save humankind from its greatest environmental crisis yet.",
            releaseDate: "2020-10-01T00:00:00.000Z",
        },
    ]

    return(

        <Container>     

            <h2>Selecione o filme</h2>

            <Cards>

                <div>
                    <img src = "https://image.tmdb.org/t/p/w500/7D430eqZj8y3oVkLFfsWXGRcpEG.jpg"/>
                </div>

                <div>
                    <img src = "https://image.tmdb.org/t/p/w500/7D430eqZj8y3oVkLFfsWXGRcpEG.jpg"/>
                </div>

                <div>
                    <img src = "https://image.tmdb.org/t/p/w500/7D430eqZj8y3oVkLFfsWXGRcpEG.jpg"/>
                </div>

                <div>
                    <img src = "https://image.tmdb.org/t/p/w500/7D430eqZj8y3oVkLFfsWXGRcpEG.jpg"/>
                </div>

                <div>
                    <img src = "https://image.tmdb.org/t/p/w500/7D430eqZj8y3oVkLFfsWXGRcpEG.jpg"/>
                </div>

                <div>
                    <img src = "https://image.tmdb.org/t/p/w500/7D430eqZj8y3oVkLFfsWXGRcpEG.jpg"/>
                </div>

            </Cards>
            
        </Container>
    )
}

const Container = styled.div`

    padding-top: 67px;

    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;

h2 {
    font-size: 24px;
    margin: 40px 0;
}

`
const Cards = styled.div`

    display:grid;

    grid-template-columns: 1fr 1fr;
    grid-column-gap: 30px;
    grid-row-gap: 10px;



img {
    width: 129px;
    height: 193px; 
    object-fit: cover;
}
div {
    width: 145px;
    height: 209px;

    background: #FFFFFF;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;

    display:flex;
    align-items:center;
    justify-content:center;
}
`