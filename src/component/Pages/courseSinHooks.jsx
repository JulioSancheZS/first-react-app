import React from 'react'
import axios from 'axios'

//Sin hooks
class Course extends React.Component {

    constructor(props){
        super(props)

        this.state={
            cursoActual: {}
        }
    }

    componentDidMount(){
        axios.get(`http://my-json-server.typicode.com/JulioSancheZS/dbjson/cursos/${this.props.match.params.id}`)
        .then(resp => this.setState({
            //objeto
            cursoActual: resp.data
        }))
    }

  //const cursoActual = cursos.filter(c => c.id === parseInt(match.params.id))[0];
    //Buscamos el id

   render() {
        return (
            <div className="ed-grid m-grid-3">
                {
                    this.state.cursoActual ? (
                        <>
                            <h1>{this.state.cursoActual.title}</h1>
                            <img className="m-cols-1" src={this.state.cursoActual.image} alt={this.state.cursoActual.title} />
                            <p className="m-cols-2">{`${this.state.cursoActual.nombre} ${this.state.cursoActual.apellido}`}</p>
                        </>
                    ) : <h1>NO se encuentra ese campion</h1>
                }
            </div>
        )
   }
}


export default Course