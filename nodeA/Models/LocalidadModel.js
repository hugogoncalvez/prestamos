// import la conexion a la base de datos

import db from "../database/db.js";

// importar sequelize

import { DataTypes } from "sequelize";


const LocalidadModel = db.define('localidades',{
    descripcion:{type: DataTypes.STRING}
})

export default LocalidadModel;