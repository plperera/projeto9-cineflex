import Home from "./Home"
import Menu from "./Menu"
import Footer from "./Footer"
import Horario from "./Horario"
import Assentos from "./Assentos"
import Sucesso from "./Sucesso"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState, useEffect } from 'react'


export default function App () {

    const [footer, setFooter] = useState(false)
    const [footer2, setFooter2] = useState(false)
    const [info, setInfo] = useState([])
    const [info2, setInfo2] = useState([])

    console.log(info2)
    return (
        <>
        <BrowserRouter>

            <Menu /> 

            <Routes>

                <Route path="/" element={<Home footer={footer} setFooter={setFooter} />}/>

                <Route path="/sessoes/:filmeId" element={<Horario 
                                                            footer={footer} 
                                                            setFooter={setFooter} 
                                                            info={info} 
                                                            info2={info2} 
                                                            setInfo={setInfo}
                                                            setInfo2={setInfo2}/>}/>

                <Route path="/assentos/:sessaoId" element={<Assentos 
                                                            fotter2={footer2} 
                                                            setFooter2={setFooter2}
                                                            info={info} 
                                                            setInfo={setInfo}/>}
                                                            info2={info2}
                                                            setInfo2={setInfo2}/>

                <Route path="/sucesso" element={<Sucesso />}/>
                
            </Routes>
            

            <Footer 
            footer={footer} 
            setFooter={setFooter}
            footer2={footer2} 
            setFooter2={setFooter2}
            info={info} 
            setInfo={setInfo}
            info2={info2} 
            setInfo2={setInfo2}
            />

        </BrowserRouter>
        </>
    )
}