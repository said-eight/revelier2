const clasesCtrl = {}

const Clase = require('../models/Clase');

clasesCtrl.getClases = async (req, res) => {
 
        const clases = await Clase.find();
        res.json(clases);
  
}

clasesCtrl.createClases = async (req, res) => {
     
    const { claseyhorario } = req.body;
    console.log(claseyhorario);
  
    const newClase = new Clase({
        claseyhorario : claseyhorario
    
    });
    console.log(newClase)
    await newClase.save();
    res.json({message: 'saved'});

}

clasesCtrl.updateClases = async (req, res) => {
   
   await Clase.findByIdAndUpdate(req.params.id, 
        {
         claseyhorario
        });
    res.json({message: 'update'})
   
}

clasesCtrl.deleteClases = async (req, res) =>{
  
    await Clase.findByIdAndDelete(req.params.id);
    res.json({message: 'DELETE'})
 

}

clasesCtrl.getClase = async (req, res) => {
   
     const clase1 = await Clase.findById(req.params.id);
    res.json(clase1)
 
}


module.exports =  clasesCtrl