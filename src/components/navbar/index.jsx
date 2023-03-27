import React from "react";
import "./style.css";
import {Link} from "react-router-dom";



export default function NavBar() {

    return (
    <nav className="navbar">
       <div>      
        <Link className="logo" to="/">
        <h1>Meu Blog</h1> 
        
        </Link>

        
       </div>
       
       <div>
       
        <Link className="nav-link" to="/">
            Posts
        </Link>
        <Link className="nav-link" to="/comentarios">
            Comentários
            </Link>
        <Link className="nav-link" to="/usuarios">
            Usuários
            </Link>
        <Link className="nav-link" to="/detalhes">
            Detalhes de Usuários
            </Link>
       </div>
    </nav>
    );
}