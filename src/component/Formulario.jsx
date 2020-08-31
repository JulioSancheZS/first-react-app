import React, { Component } from 'react';

//Clase
class Formulario extends Component {

    constructor(props) {
        super(props)
        //objeto
        this.state = {
            nombre: "",
            correo: ""
        }
        this.cambiarNombre = this.cambiarNombre.bind(this)
        this.cambiarCorreo = this.cambiarCorreo.bind(this)
    }
    //bind es enlacer el metodo this 
    //Método
    cambiarNombre(e){
        this.setState({
            nombre: e.target.value  
        }) 
    }

    cambiarCorreo(e){
        this.setState({
            correo: e.target.value
        })
    }



    // this.setState({objeto})

    render() {
        //Render retorna el contenido del componente
        return (
            //Aqui se escribe JSX
            <div className="ed-grid">
                <h1>Formulario</h1>
                <form id={this.props.name}>
                    <div className="ed-grid m-grid-2">
                        <div className="form__item">
                            <label>Nombre Completo</label>

                            <input 
                            type="text" 
                            onChange={this.cambiarNombre}
                            />
                        </div>
                        <div className="form__item">
                            <label>Correo Electrónico</label>

                            <input type="email" 
                            onChange={this.cambiarCorreo}

                            />
                        </div>          
                    </div>
                </form>
                <div>
                    <h2>{`Hola ${this.state.nombre}`}</h2>
                    <span>{`Tu correo es: ${this.state.correo}`}</span>
                </div>
            </div>
        )
    }

    componentDidMount(){
        let elemento = document.getElementById("elemento");
        console.log(elemento);
    }

}

export default Formulario