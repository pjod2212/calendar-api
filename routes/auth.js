/*
    Rutas de Usuarios /Auth
    host /api/auth
    username mongo : podonati
    password : JGuUXwGMPVttMx0J
*/

const { Router } = require('express');
const { check } = require('express-validator');
const router = Router();
const { crearUsuario, login, revalidarToken } = require('../controllers/auth');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');

router.post(
    '/new',
    [
        //Middlewares
        check('name','El nombre es obligatorio').not().isEmpty(),
        check('email','El email es obligatorio').isEmail(),
        check('password','El password debe de ser de 6 caracteres').isLength({ min: 6 }),
        validarCampos
    ],
    crearUsuario );

router.post('/',[
    //Middlewares
    check('email','El email es obligatorio').isEmail(),
    check('password','El password debe de ser de 6 caracteres').isLength({ min: 6 }),
    validarCampos
    ]
    , login );

router.get('/renew', validarJWT, revalidarToken);

module.exports = router;