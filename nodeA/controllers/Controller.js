// importar el Modelo
import ClienteModel from "../Models/ClienteModel.js";
import LocalidadModel from "../Models/LocalidadModel.js";
import UsuarioModel from "../Models/UsuarioModel.js"
import PrestamoModel from "../Models/PrestamoModel.js"
import PagoModel from "../Models/PagoModel.js"
import FormasPagoModel from "../Models/FormasPagoModel.js";
import TiposPagoModel from "../Models/TiposPagoModel.js";
import HijosModel from "../Models/HijosModel.js";
import db from "../database/db.js";
import { QueryTypes } from "sequelize";
import WappModel from "../Models/WappModel.js";




// metodos para el CRUD

// Clientes

// mostrar todos
// export const prueba = async (req, res) => {
//     try {
//         const projects = await db.query('SELECT * FROM inventarios', {
//             model: InvModel,
//             mapToModel: false // pass true here if you have any mapped fields
//         });
//         res.json(projects)
//         console.log(res)
//         //const resp = await InvModel.sequelize.query('Select * from Inventarios;')
//         //console.log(resp)
//         //  res.resp
//         // console.log(res)
//     } catch (e) {
//         console.log(e)
//     }
// }
export const getClientes = async (req, res) => {
    try {
        const clientes = await ClienteModel.findAll()
        res.json(clientes)
    } catch (error) {
        res.json({ message: error.message })
    }
}

// mostrar un cliente

export const getUnCliente = async (req, res) => {
   // console.log('entro en getblog')
    try {
        const cliente = await ClienteModel.findAll({
            where: {
                id: req.params.id
            }
        })
        res.json(cliente[0])
    } catch (error) {
        res.json({ message: error.message })
    }
}

// crear un cliente

export const createCliente = async (req, res) => {

   // console.log(req.body)
    try {
        await ClienteModel.create(req.body)
        res.json({ "message": 'Registro creado correctamente' })
       // console.log(res.statusMessage)
    } catch (error) {
        res.json({ "message": error.message })
      //  console.log(error)
    }
}

// actualizar un cliente

export const updateCliente = async (req, res) => {
    try {
        await ClienteModel.update(req.body, {
            where: { id: req.params.id }
        })
        res.json({ "message": 'Registro actualizado correctamente' })
    } catch (error) {
        res.json({ message: error.message })
    }
}

// eliminar un cliente

export const deleteCliente = async (req, res) => {
    try {
        await ClienteModel.destroy({
            where: { id: req.params.id }
        })
        res.json({ message: 'Registro eliminado correctamente' })
    } catch (error) {
        res.json({ message: error.message })
    }
}



// Localidad

// mostrar todas las localidades 

export const getLocalidad = async (req, res) => {
    try {
        const localidad = await LocalidadModel.findAll()
        res.json(localidad)
    } catch (error) {
        res.json({ message: error.message })
    }
}



// Prestamo

// obtiene todos los prestamos

export const getPrestamos = async (req, res) => {
    try {
        const prestamos = await PrestamoModel.findAll({
            order: [
                ["createdAt", "DESC"]
            ]
        })
        res.json(prestamos)
    } catch (error) {
        res.json({ message: error.message })
    }
}

// obtiene un prestamo

export const getUnPrestamo = async (req, res) => {
   // console.log('entro en getblog')
    try {
        const prestamo = await PrestamoModel.findAll({
            where: {
                id: req.params.id
            }
        })
        res.json(prestamo[0])
    } catch (error) {
        res.json({ message: error.message })
    }
}
// obtiene un prestamos por cliente

export const getPrestamosCliente = async (req, res) => {
    console.log('ENTRO en getPrestamosCliente')
    try {
        const prestamo = await PrestamoModel.findAll({
            where: {
                id_cliente: req.params.idcliente
            }
        })
        res.json(prestamo)
    } catch (error) {
        res.json({ message: error.message })
    }
}

// crear un prestamo

export const createPrestamo = async (req, res) => {
    try {
        await PrestamoModel.create(req.body)
        res.json({ "message": 'Registro creado correctamente' })
    } catch (error) {
        res.json({ message: error.message })
    }
}

// actualizar un prestamo

export const updatePrestamo = async (req, res) => {
    try {
        await PrestamoModel.update(req.body, {
            where: { id: req.params.id }
        })
        res.json({ "message": 'Registro actualizado correctamente' })
    } catch (error) {
        res.json({ message: error.message })
    }
}

// eliminar un prestamo

export const deletePrestamo = async (req, res) => {
    try {
        await PrestamoModel.destroy({
            where: { id: req.params.id }
        })
        res.json({ message: 'Registro eliminado correctamente' })
    } catch (error) {
        res.json({ message: error.message })
    }
}

// PAGOS

// mostrar todos los pagos

export const getPagos = async (req, res) => {
    try {
        const pagos = await PagoModel.findAll({            
            order: [
                ["createdAt", "DESC"]
            ]
        })
        res.json(pagos)
    } catch (error) {
        res.json({ message: error.message })
    }
}

// mostrar un pagos por cliente

export const getPagosCliente = async (req, res) => {
    //console.log('entro en getblog')
    try {
        const pago = await PagoModel.findAll({
            where: {
                id_cliente: req.params.id
            },
            order: [
                ["createdAt", "DESC"]
            ]
        })
        res.json(pago)
    } catch (error) {
        res.json({ message: error.message })
    }
}
// mostrar un pagos por cliente

export const getPago = async (req, res) => {
   // console.log('entro en getblog')
    try {
        const pago = await PagoModel.findAll({
            where: {
                id: req.params.id
            },
        })
        res.json(pago[0])
    } catch (error) {
        res.json({ message: error.message })
    }
}
// crear un Pago

export const createPago = async (req, res) => {

   // console.log(req.body)
    try {
        await PagoModel.create(req.body)
        res.json({ "message": 'Registro creado correctamente' })
       // console.log(res.statusMessage)
    } catch (error) {
        res.json({ "message": error.message })
       // console.log(error)
    }
}

// actualizar un pago

export const updatePago = async (req, res) => {
    try {
        await PagoModel.update(req.body, {
            where: { id: req.params.id }
        })
        res.json({ "message": 'Registro actualizado correctamente' })
    } catch (error) {
        res.json({ message: error.message })
    }
}

// eliminar un Pago

export const deletePago = async (req, res) => {
    try {
        await PagoModel.destroy({
            where: { id: req.params.id }
        })
        res.json({ message: 'Registro eliminado correctamente' })
    } catch (error) {
        res.json({ message: error.message })
    }
}

// FORMASPAGO

// mostrar todos las Formas de Pago

export const getFormasPago = async (req, res) => {
    try {
        const formasPago = await FormasPagoModel.findAll()
        res.json(formasPago)
    } catch (error) {
        res.json({ message: error.message })
    }
}

// TIPOSPAGO

// mostrar todos los Tipos de Pago

export const getTiposPago = async (req, res) => {
   // console.log('entra en get tipos de pago')
    try {
        const tiposPago = await TiposPagoModel.findAll()
        res.json(tiposPago)
        
    } catch (error) {
      // console.log('entra en ERROR')
        res.json({ message: error.message })
    }
}


//  USUARIO
// crear usuario

export const createUsu = async (req, res) => {
    try {

        await UsuarioModel.create(req.body)
        res.json({ "msg": "Usuario creado correctamente", "msgError": "" })

    } catch (err) {

        const errObj = {};
        err.errors.map((e) => {
            errObj['msgError'] = e.message;
            errObj['value'] = e.value;
        })

        res.json({
            "msgError": errObj.msgError,
            "value": errObj.value
        })
    }
}

// login de usuario

export const loginUsu = async (req, res) => {
   // console.log(req.params.usuario + '   entro en login')
    try {
        const login = await UsuarioModel.findAll({
            where: {
                usuario: req.params.usuario,
            }
        });

        if (login.length === 0) {
         //   console.log('NO tiene datos')
            res.json({ ...login, "msgError": "No existe el usuario, debe darse de alta" })
        } else {
           // console.log('tiene datos')
            res.json({ ...login, "msgError": "" })
        }
     //   console.log(res.json(login.msgError) + '   al final')

    } catch (error) {

    }
}

// Clientes
// obntener movimiento de la cuenta corriente del cliente
export const getMovimientosCliente = async (req, res) => {
    
    const id = req.params.id
    
    const mov = await db.query("(SELECT `prestamos`.`capital` AS 'Debe', 0 AS 'Haber', `createdAt` AS 'Fecha' FROM `prestamos` WHERE `prestamos`.`id_cliente` = ?) UNION ALL (SELECT  0 AS 'Debe',`pagos`.`monto` AS 'Haber',`createdAt` AS 'Fecha' FROM `pagos` WHERE `pagos`.`id_cliente`= ?) ORDER BY Fecha;",
        {
            replacements: [id, id],
            type: QueryTypes.SELECT,
            raw: true,
        }
    )
    res.json(mov)
}

// obtiene id de los clientes con Cta Cte (prestamo)

export const getClientesCC = async (req, res) => {
    
    
    
    const cc = await db.query("SELECT DISTINCT `id_cliente` FROM `prestamos`;",
        {
            type: QueryTypes.SELECT,
            raw: true,
        }
    )
    res.json(cc)
}

// obtiene el total de CC y Pagos, y el saldo de la cuenta

export const getClientesSaldo = async (req, res) => {
    
    const id = req.params.id
    
    const cc = await db.query("SELECT (SELECT `nombre` FROM `clientes` WHERE `id` = ?) AS 'nombre',(SELECT `apellido` FROM `clientes` WHERE `id` = ?) AS 'apellido',(SELECT `num_dni` FROM `clientes` WHERE `id` = ?) AS 'dni',(SELECT SUM(`capital`) FROM `prestamos` WHERE `id_cliente` = ?) AS 'totalC/C',(SELECT SUM(`monto`)  FROM `pagos` WHERE `id_cliente` = ?) AS 'totalPagos',(SELECT MAX(`createdAt`) FROM `pagos` WHERE `id_cliente` = ?) AS 'fecha',(SELECT `tipo_pago` FROM `prestamos` WHERE `id_cliente` = ? ORDER BY `id` DESC LIMIT 1) AS 'tipo',((SELECT SUM(`capital`) FROM `prestamos` WHERE `id_cliente` = ?) - (SELECT SUM(`monto`) FROM `pagos` WHERE `id_cliente` = ?)) AS 'saldo';",
        {
            replacements: [id, id, id, id, id, id, id, id, id],
            type: QueryTypes.SELECT,
            raw: true,
        }
    )
    res.json(cc)
}

// HIJOS
// Crear un hijo

export const createHijo = async (req, res) => {
    try {
       // console.log(req.body)
        await HijosModel.create(req.body)
        res.json({ "msg": "hijo creado correctamente", "msgError": "" })

    } catch (err) {
       // console.log(err)
        const errObj = {};
        err.errors.map((e) => {
            errObj['msgError'] = e.message;
            errObj['value'] = e.value;
        })

        res.json({
            "msgError": errObj.msgError,
            "value": errObj.value
        })
    }
}

// eliminar un hijo

export const deleteHijo = async (req, res) => {
    try {
        await HijosModel.destroy({
            where: { id: req.params.id }
        })
        res.json({ message: 'Registro eliminado correctamente' })
    } catch (error) {
        res.json({ message: error.message })
    }
}

// traer un Hijo

export const getHijos = async (req, res) => {
   // console.log('ENTRA EN GETHIJOS')
    try {
        const hijo = await HijosModel.findAll({
            where: {
                id_cliente: req.params.id
            }
        })
        res.json(hijo)
    } catch (error) {
        res.json({ message: error.message })
    }
}

// actualizar un hijo

export const updateHijo = async (req, res) => {
    try {
        await HijosModel.update(req.body, {
            where: { id: req.params.id }
        })
        res.json({ "message": 'Registro actualizado correctamente' })
    } catch (error) {
        res.json({ message: error.message })
    }
}

// obtener todos los hijos

export const getHijosTotal = async (req, res) => {
    
    
    
    const cc = await db.query("SELECT `clientes`.`nombre` AS 'nomCliente', `clientes`.`apellido` AS 'apeCliente', `clientes`.`cel_1`, `clientes`.`cel_2`,`clientes`.`email`, `hijos`.`nombre` AS 'nomHijo',`hijos`.`apellido` AS 'apeHijo',`hijos`.`fecha_nac` FROM `hijos` INNER JOIN `clientes` ON `clientes`.`id` = `hijos`.`id_cliente`;",
        {
            type: QueryTypes.SELECT,
            raw: true,
        }
    )
    res.json(cc)
}

// mostrar todos los wapp

export const getMsg = async (req, res) => {
    console.log('ENTRA EN GETMSG')
    try {
        const wapp = await WappModel.findAll()
        res.json(wapp)
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const updateMsg = async (req, res) => {
    try {
        await WappModel.update(req.body, {
            where: { id: req.params.id }
        })
        res.json({ "message": 'Registro actualizado correctamente' })
    } catch (error) {
        res.json({ message: error.message })
    }
}