import React from 'react';
// import logo from './logo.svg';
import { BrowserRouter as Router , Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// import './App.css';

import Navegacion from './components/Navegacion';
import Reservaciones from './components/Reservaciones';
import Crearclase from './components/Crearclase';
import Crearreservacion from './components/Crearreservacion';

function App() {
  return (
    <div className="container p-2">
      <Router>
       <Navegacion/>
      <Route  path='/' exact component={Crearreservacion}/>
      <Route path='/Reservaciones' component={Reservaciones}/>
      <Route path='/Clases' component={Crearclase}/>
      </Router>
</div>
  );
}

export default App;
