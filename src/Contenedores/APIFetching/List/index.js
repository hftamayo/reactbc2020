import axios from 'axios';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import Fila from './Fila';

function List() {
    {/*deprecado por agregacion usuarios const [usuarios, setUsuarios] = useState([]);*/}
    const [usuarios, setUsuarios] = useState([]);
    const [pagina, setPagina] = useState(68);

    const fetchUsuarios = useCallback(
        async () => {
            const { data } = 
            await 
            axios.get(`https://gorest.co.in/public-api/users?page=${pagina}`
            );
            console.log({ data });
            setUsuarios(data.data);
        },
        [pagina]
    );

    useEffect(() => {
        fetchUsuarios();
    }, [fetchUsuarios]);

    return (
        <div className="frmbox">
            <input type="number" value={pagina} onChange={(event) => 
                setPagina(event.target.value)} />
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Correo</th>
                        <th>Genero</th>
                        <th>Status</th>                                                                                                
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map((usuario) => {
                        return <Fila usuario={usuario} 
                        key={usuario.id.toString()} />
                    })}
                    
                </tbody>
            </table>
            
        </div>
    )
}

export default List
