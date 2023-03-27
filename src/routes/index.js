import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "../pages/home";
import Comentarios from "../pages/comentarios"
import NavBar from "../components/navbar";

import Usuarios from "../pages/usuarios";

export default function ApplicationRoutes(){
    return (
        <BrowserRouter>
        <NavBar />
            <Routes>
                <Route path="/" element={<Home /> } />  
                <Route path="/comentarios" element={<Comentarios /> } />     
                <Route path="/usuarios" element={< Usuarios />} /> 
                <Route path="/detalhes" element={<h2>Detalhes de Usuários</h2>} />                
            </Routes>                    
            
        </BrowserRouter>
    )
}