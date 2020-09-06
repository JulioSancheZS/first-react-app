import React from 'react';
import axios from 'axios'
import CourseGrid from '../Organisms/CourseGrid';


class Courses extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            cursos: []
        }

    }
    
    componentDidMount(){
        axios.get('http://my-json-server.typicode.com/JulioSancheZS/dbjson/cursos')
        .then(resp => this.setState({
            //objeto
            cursos: resp.data
        }))
    }

    render(){
        
        const {cursos} = this.state

        return(

            <CourseGrid cursos={cursos}/>
        )
    }
}

export default Courses