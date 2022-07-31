import Home from "./Home"
import Menu from "./Menu"
import Footer from "./Footer"
import Horario from "./Horario"

import { BrowserRouter, Routes, Route } from "react-router-dom"

export default function App () {

    return (
        <>
        <BrowserRouter>

            <Menu /> 

            <Routes>

                <Route path="/" element={<Home />}/>

                <Route path="/horario/:filmeId" element={<Horario />}/>
                
            </Routes>
            

            <Footer />

        </BrowserRouter>
        </>
    )
}