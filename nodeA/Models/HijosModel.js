import db from "../database/db.js";

import { DataTypes } from "sequelize";

 const HijosModel = db.define('hijos', {
    id_cliente: { type: DataTypes.STRING },
    nombre: { type: DataTypes.STRING },
    apellido: { type: DataTypes.STRING },
    fecha_nac: { type: DataTypes.STRING }
})


export default HijosModel