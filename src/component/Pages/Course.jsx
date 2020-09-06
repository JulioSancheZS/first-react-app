import React, {useState, useEffect} from 'react'
import axios from 'axios'
import useCourse from '../CustomHooks/useCourse'

const Course = ({ match }) => {

    //esta estado, en este caso devuelve un arreglo

   /*const [estado, setState] = useState({
        //este es mi estado 
    })*/
    const estado = useCourse(match.params.id);

    const [comment, setComment] = useState("Sin comentarios")

    //actualiza el estado
  /*  useEffect(() => { 
        axios.get(`http://my-json-server.typicode.com/JulioSancheZS/dbjson/cursos/${match.params.id}`)
        .then(resp => setState(resp.data))
    }, []);*/
    
   /* const changeTitle = (text, img) => {
        setState({
            ...estado,
            title: text,
            image: img
        })
    }*/
    const myComment = e =>{
        setComment(e.target.value)
    }
    //Buscamos el id
    //const cursoActual = cursos.filter(c => c.id === parseInt(match.params.id))[0];
   // console.log(estado);
    return (
        <div className="ed-grid m-grid-3">
            {
                estado ? (
                    <>
                    <div className="l-block">
                        <h1 className="m-cols-3">{estado.title}</h1>
                        <img className="m-cols-1" src={estado.image} alt={estado.title} />
                        <p className="m-cols-2">{`${estado.nombre} ${estado.apellido}`}</p>                     
                    </div>
                    <div>
                        <h2>Escribe un comentario</h2>
                        <input type="text" placeholder="Escribe... " onChange={myComment.bind(this)}/>
                        <p>{comment}</p>
                    </div>
                    </>
                ) : <h1>NO se encuentra ese campion</h1>
            }
        </div>
    )
}

export default Course