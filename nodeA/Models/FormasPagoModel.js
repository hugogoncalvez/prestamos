// import la conexion a la base de datos

import db from "../database/db.js";

// importar sequelize

import { DataTypes } from "sequelize";


const FormasPagoModel = db.define('formapagos',{
    tipo:{type: DataTypes.STRING},
})

export default FormasPagoModel;