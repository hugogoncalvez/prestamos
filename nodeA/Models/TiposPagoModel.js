// import la conexion a la base de datos

import db from "../database/db.js";

// importar sequelize

import { DataTypes } from "sequelize";


const TiposPagoModel = db.define('tipo_pagos',{
    tipo:{type: DataTypes.STRING},
})

export default TiposPagoModel;