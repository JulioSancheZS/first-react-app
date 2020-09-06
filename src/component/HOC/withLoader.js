//Componente de Orden superior
import React from 'react'
import Loader from 'react-loader-spinner'

const withLoader = (propValue,WrappedComponent) => {
    return class WithLoader extends React.Component{
        constructor(props){
            super(props)
        }
        
        render(){
            console.log(this.props)
            return this.props[propValue].length === 0
            ?<div className="ed-grid">

                <Loader
                type="Rings"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={3000} //3 secs
                />
            </div> 
            ://si encontro
             <WrappedComponent {...this.props}/>
        }
    }
}

export default withLoader