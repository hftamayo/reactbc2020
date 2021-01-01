import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Saludo1</Link>
                </li>
                <li>
                    <Link to="/jsx">Saludo3</Link>
                </li>
                <li>
                    <Link to="/buscarusus">Buscar Usuarios</Link>
                </li>                
            </ul>
        </div>
    );
}

export default Menu;
