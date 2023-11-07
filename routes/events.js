/*
    Rutas de Eventos /events
    host /api/events
    username mongo : podonati
    password : JGuUXwGMPVttMx0J
*/

const { Router } = require('express');
const router = Router();
const { check } = require('express-validator')
const { validarJWT } = require('../middlewares/validar-jwt');
const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/events');
const { validarCampos } = require('../middlewares/validar-campos');
const { isDate } = require('../helpers/isDate');


//Todas las url tienen que pasar por validarjwT
router.use( validarJWT );

router.get('/', getEventos );

router.post('/', 
    [
        check('title','El titulo es obligatorio').not().isEmpty(),
        check('start','Fecha de inicio es obligatoria').custom( isDate ),
        check('end','Fecha de finalizacion es obligatoria').custom( isDate ),
        validarCampos

    ],
    crearEvento );

router.put('/:id', actualizarEvento );

router.delete('/:id', eliminarEvento );

module.exports = router;