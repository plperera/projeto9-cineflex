import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
export default function BannerFilme ({array}) {

    return (
            
            array.map((array, indice) => 

                <Link to={`/sessoes/${array.id}`}>
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