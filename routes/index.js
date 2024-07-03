var express = require('express');
const { index, servicios, obrasRealizadas, presupuestos, contactos } = require('../controllers/indexController');
var router = express.Router();

/* GET home page. */
router.get('/', index);
router.get('/servicios', servicios);
router.get('/obraRealizadas', obrasRealizadas);
module.exports = router;
