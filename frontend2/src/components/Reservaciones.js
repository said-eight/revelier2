import React, { Component } from 'react'
import axios from 'axios'
export class Reservaciones extends Component {
    state = {
        reservaciones: []

    }
    async componentDidMount() {
        const res = await axios.get('http://localhost:4000/api/reservaciones');
        this.setState({ reservaciones: res.data });
        console.log(this.state.reservaciones);

    }
    render() {
        return (
            <div className="container" >

                <div className="col-md-4">

                    {
                        this.state.reservaciones.map(reservacion =>
                            <div className="card text-white bg-primary mb-3" style="max-width: 18rem;">
                                <div className="card-header">{ reservacion.clase} </div>
                                <div className="card-body">
                                    <h5 className="card-title">{ reservacion.fecha }</h5>
                                    <p className="card-text">{ reservacion.nombre }</p>
                                </div>
                            </div>
                      
                        )
                    }
                </div>
            </div>
        )
    }
}

export default Reservaciones
