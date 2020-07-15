import React, { Component } from 'react'
import axios from 'axios'
export class Crearreservacion extends Component {
    state = {
        reservaciones: [],
        nombre: ''

    }
    async componentDidMount() {
        const res = await axios.get('http://localhost:4000/api/reservaciones');
        this.setState({ reservaciones: res.data });
        console.log(this.state.reservaciones);

    }
  
    onChangenombre(e)
    {
       this.setState({
           nombre : e.target.value
       })

    }
    onSubmit = async e  =>
    {
        e.preventDefault();
        await axios.post('http://localhost:4000/api/reservaciones',
        {
           nombre : this.state.nombre
        })
        this.setState({nombre: ''});

    }
    render() {
        return (
            <div className="col-md-4 text-center ">
                <div className="card card-body">
               <h3>Crear reservacion</h3> 
               
               <form onSubmit={this.onSubmit}>
                   <div className="form-group">
                       <input 
                       type="text" 
                       name="" 
                       id=""
                       className="form-control"
                       onChange={this.onChangenombre}
                       />
                   </div>
                   <button type="submit" className="btn btn-primary">
                       Reservar

                   </button>
               </form>
               </div>
            </div>
        )
    }
}

export default Crearreservacion
