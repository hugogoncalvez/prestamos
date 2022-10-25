// import la conexion a la base de datos

import db from "../database/db.js";

// importar sequelize

import { DataTypes } from "sequelize";


const PagoModel = db.define('pagos',{
    id_cliente:{type: DataTypes.INTEGER},
    monto:{type: DataTypes.DECIMAL},
    forma_pago:{type: DataTypes.STRING},
    obs:{type: DataTypes.STRING},
    user:{type: DataTypes.STRING}
})


export default PagoModel;