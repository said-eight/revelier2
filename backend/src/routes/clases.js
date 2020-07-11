const { Router } = require('express');

const router = Router();

const { getClase, getClases, updateClases, deleteClases, createClases }  = require('../controllers/clases.controller');
router.route('/')
         .get(getClases)
         .post(createClases)

router.route('/:id')
        .get(getClase)
        .put(updateClases)
        .delete(deleteClases)

module.exports = router;