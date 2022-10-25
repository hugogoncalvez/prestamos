import db from "../database/db.js";

import { DataTypes } from "sequelize";

 const ClienteModel = db.define('clientes', {
    nombre: { type: DataTypes.STRING },
    apellido: { type: DataTypes.STRING },
    num_dni: { type: DataTypes.STRING },
    fecha_nac: { type: DataTypes.STRING },
    cel_1: { type : DataTypes.STRING},
    cel_2: { type : DataTypes.STRING},
    email: { type : DataTypes.STRING},
    localidad: { type : DataTypes.STRING},
    calle: { type : DataTypes.STRING},
    num_calle: { type : DataTypes.STRING},
    depto_casa: { type : DataTypes.STRING},
    piso: { type : DataTypes.STRING},
    mz: { type : DataTypes.STRING},
    referencia: { type : DataTypes.STRING}
})


export default ClienteModel