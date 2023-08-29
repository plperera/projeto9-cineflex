import Home from "./Home"
import Menu from "./Menu"
import Footer from "./Footer"
import Horario from "./Horario"
import Assentos from "./Assentos"
import Sucesso from "./Sucesso"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState, useEffect } from 'react'

export default function App () {

    const [allData, setAllData] = useState({})

    useEffect(() => {
        console.log("allData", allData)
    }, [allData])

    return (
        <>
            <BrowserRouter>

                <Menu /> 

                <Routes>
                    <Route path="/" element={<Home setAllData={setAllData} allData={allData}/>}/>
                    <Route path="/sessoes/:filmeId" element={<Horario setAllData={setAllData} allData={allData}/>}/>
                    <Route path="/assentos/:sessaoId" element={<Assentos setAllData={setAllData} allData={allData} />}/>
                    <Route path="/sucesso" element={<Sucesso setAllData={setAllData} allData={allData} />}/>                
                </Routes>

                <Footer allData={allData}/>
                
            </BrowserRouter>
        </>
    )
}