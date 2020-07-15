import React, { Component } from 'react'
import axios from 'axios'

export class Crearclase extends Component {
    state = {
        clases: [],
        claseyhorario: ''

    }

    componentDidMount() {
        this.getClases();
        console.log(this.state.clases);

    }

    getClases = async () =>
   {
    const res = await axios.get('http://localhost:4000/api/clases');
    this.setState({ clases: res.data });
   }

    onChangeclase = (e) =>
    {
       this.setState({
           claseyhorario : e.target.value
       })

    }

    onSubmit = async e  =>
    {
        e.preventDefault();
        await axios.post('http://localhost:4000/api/clases',
        {
           claseyhorario : this.state.claseyhorario
        })
        this.getClases();
        this.setState({claseyhorario : ''});

    }

    deleteClase = async (id) =>
    {
        await axios.delete('http://localhost:4000/api/clases/' + id);
        this.getClases();

    }
    render() {
        return (
            <div class="row mt-4">
               <div className="col-md-4  ">
                <div className="card card-body">
               <h3>Crear clase</h3> 
               
               <form onSubmit={this.onSubmit}>
                   <div className="form-group">
                       <input 
                       type="text" 
                       name="" 
                       id=""
                       value={this.state.claseyhorario}
                       className="form-control"
                       onChange={this.onChangeclase}
                       />
                   </div>
                   <button type="submit" className="btn btn-primary">
                       Reservar

                   </button>
               </form>
               </div>
            </div>
                <div className="col-md-8">
                   <ul className="list-group">
                    {
                        this.state.clases.map(clase =>
                         <li className="list-group-item " key={clase._id} >{clase.claseyhorario} 
                         <button type="submit" className="btn btn-danger " 
                          onClick={() => this.deleteClase(clase._id)}>
                         eliminar
                          </button> 
                          </li>
                          
                      
                        )
                    }
                    </ul>
                </div>
          
            </div>
        )
    }
}

export default Crearclase
