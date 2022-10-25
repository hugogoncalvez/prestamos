import express from "express";
import {
    createCliente, deleteCliente, getClientes, getUnCliente, updateCliente, loginUsu, getLocalidad, getPrestamos, getUnPrestamo, getPrestamosCliente,
    createPrestamo, updatePrestamo, deletePrestamo, getPagos, getPago, getPagosCliente, createPago, updatePago, deletePago, getFormasPago, getMovimientosCliente,
    getTiposPago, getClientesCC, getClientesSaldo, createHijo, deleteHijo, getHijos, updateHijo, getHijosTotal, createUsu, getMsg, updateMsg
} from "../controllers/Controller.js";



const router = express.Router();

router.get('/clientes', getClientes)
router.get('/clientes/:id', getUnCliente)
router.post('/clientes/create', createCliente)
router.put('/clientes/:id', updateCliente)
router.delete('/clientes/:id', deleteCliente)
router.get('/clientesmov/:id', getMovimientosCliente)
router.get('/clientescc', getClientesCC)
router.get('/clientessaldo/:id', getClientesSaldo)

router.get('/localidad', getLocalidad)

router.get('/prestamos', getPrestamos)
router.get('/prestamos/:id', getUnPrestamo)
router.get('/prestamos/cliente/:idcliente', getPrestamosCliente)
router.post('/prestamos/create', createPrestamo)
router.put('/prestamos/:id', updatePrestamo)
router.delete('/prestamos/:id', deletePrestamo)

router.get('/pagos', getPagos)
router.get('/pagos/:id', getPagosCliente)
router.get('/pago/:id', getPago)
router.post('/pagos/create', createPago)
router.put('/pagos/:id', updatePago)
router.delete('/pagos/:id', deletePago)

router.get('/formaspago', getFormasPago)
router.get('/tipospago', getTiposPago)


router.post('/hijos/create', createHijo)
router.get('/hijos/:id', getHijos)
router.get('/hijos', getHijosTotal)
router.put('/hijos/:id', updateHijo)
router.delete('/hijos/:id', deleteHijo)

router.post('/register', createUsu)
router.get('/login/:usuario', loginUsu)

router.get('/mensajes', getMsg)
router.put('/mensajes/:id', updateMsg)

export default router