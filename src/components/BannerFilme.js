import { Link } from 'react-router-dom'
export default function BannerFilme ({array}) {

    const referencia = [{
        "id":1,
        "title":"Zack Snyder Justice League",
        "posterURL":"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg",
        "overview":"Determined to ensure Superman ultimate sacrifice was not in vain, Bruce Wayne aligns forces with Diana Prince with plans to recruit a team of metahumans to protect the world from an approaching threat of catastrophic proportions.","releaseDate":"2021-03-18T00:00:00.000Z"}]
    
    return (
            
            array.map((array, indice) => 

                <Link to={`/horario/${array.id}`}>
                    <div>
                        <img 
                        src = {array.posterURL} 
                        key={array.id} 
                        />                       
                    </div>
                </Link>

            )
    )
}