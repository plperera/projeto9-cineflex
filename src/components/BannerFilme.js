import { Link } from 'react-router-dom'
export default function BannerFilme ({array, allData, setAllData}) {

    function handleSelected(movie){
        const { selected } = allData
        
        setAllData({...allData, selected: {
            ...selected, 
            movieName: movie?.title,
            sessionOverview: movie?.overview,
            sessionImageUrl: movie?.posterURL,
            sessionId: movie?.id
        }})
    }

    return (
            
            array.map((e) => 

                <Link to={`/sessoes/${e.id}`} onClick={() => handleSelected(e)} >
                    <div>
                        <img src={e?.posterURL} key={e.id} alt=''/>                       
                    </div>
                </Link>

            )
    )
}