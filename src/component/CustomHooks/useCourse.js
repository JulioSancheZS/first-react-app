import { useState, useEffect } from 'react';
import axios from 'axios';

const useCourse = id => { 
    //esta estado, en este caso devuelve un arreglo
    const [estado, setState] = useState({
        //este es mi estado 
    })
    
    useEffect(() => {
        axios.get(`http://my-json-server.typicode.com/JulioSancheZS/dbjson/cursos/${id}`)
            .then(resp => setState(resp.data))
    }, []);
    
    return estado;
}

export default useCourse