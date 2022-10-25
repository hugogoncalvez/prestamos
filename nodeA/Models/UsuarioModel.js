// import la conexion a la base de datos

import db from "../database/db.js";

// importar sequelize

import { DataTypes } from "sequelize";


const UsuarioModel = db.define('usuarios',{
    nombre:{type: DataTypes.STRING},
    apellido:{type: DataTypes.STRING},
    usuario:{type: DataTypes.STRING},
    password:{type: DataTypes.STRING}
})

export default UsuarioModel;