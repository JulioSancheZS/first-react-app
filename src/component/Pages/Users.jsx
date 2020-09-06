import React from 'react';
import axios from 'axios'; //axios libreria
import UsersGrid from '../Organisms/UsersGrid';

//Componente de clase
class Users extends React.Component{
    constructor(props){
        super(props)
        //Estados del componente
        this.state={
            users:[]
        }
    }
    //cuando el componente se haya montado
    //Peticiones con fetch javascript
    /*
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users', {method: 'GET'})
        .then(response => response.json())
        .then(json => {
            //actualiza el estado con setStates
            this.setState({
                users: json
            })
        })
        
    }
       */

       //Petición con axios
       componentDidMount(){
           axios.get('https://jsonplaceholder.typicode.com/users')
           .then(resp => {
               this.setState({
                   users: resp.data
               })
           })
       }

    render(){

        const {users} = this.state;

        return(
           <UsersGrid users={users}/>
        )
    }
}
export default Users