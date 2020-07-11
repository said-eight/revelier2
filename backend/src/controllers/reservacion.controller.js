const reservacionCtrl = {}

const Reservacion = require('../models/Reservacion');

reservacionCtrl.getReservaciones = async (req, res) => {
    try
    {
        const reservaciones = await Reservacion.find();
    res.json(reservaciones);

    }
    catch (err) {
        next(err);
      }
}

reservacionCtrl.createReservacion = async (req, res) => {
    try
    {
      console.log(req.body)

    const { nombre, apellidos, correo, clase, fecha} = req.body;
    const newReservacion = new Reservacion({
        nombre,
        apellidos,
        correo,
        clase,
        fecha
    });
    await newReservacion.save();
    res.json({message: 'saved'});
    }
    catch (err) {
        next(err);
      }
}

reservacionCtrl.updateReservacion = async (req, res) => {
    try
    {
   await Reservacion.findByIdAndUpdate(req.params.id, 
        {
        nombre,
        apellidos,
        correo,
        clase,
        fecha

        });
    res.json({message: 'update'})
    }
    catch (err) {
        next(err);
      }
}

reservacionCtrl.deleteReservacion = async (req, res) =>{
    try
    {
    await Reservacion.findByIdAndDelete(req.params.id);
    res.json({message: 'DELETE'})
    }
    catch (err) {
        next(err);
      }

}

reservacionCtrl.getReservacion = async (req, res) => {
    try
    {
    await Reservacion.findById(req.params.id);
    res.json(Reservacion)
    } catch (err) {
        next(err);
      }
}



module.exports =  reservacionCtrl