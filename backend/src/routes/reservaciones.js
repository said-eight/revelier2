const { Router } = require('express');

const router = Router();

const { getReservaciones, createReservacion, updateReservacion, getReservacion, deleteReservacion }  = require('../controllers/reservacion.controller');
router.route('/')
         .get(getReservaciones)
         .post(createReservacion)

router.route('/:id')
        .get(getReservacion)
        .put(updateReservacion)
        .delete(deleteReservacion)

module.exports = router;