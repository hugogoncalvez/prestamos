// import la conexion a la base de datos

import db from "../database/db.js";

// importar sequelize

import { DataTypes } from "sequelize";


const WappModel = db.define('wapps',{
    tipo:{type: DataTypes.STRING},
    msg:{type: DataTypes.STRING},
})

export default WappModel;