// import la conexion a la base de datos

import db from "../database/db.js";

// importar sequelize

import { DataTypes } from "sequelize";

const PrestamoModel = db.define('prestamos', {
    id_cliente:{ type: DataTypes.INTEGER},
    capital:{ type: DataTypes.DECIMAL},
    tipo_pago:{ type: DataTypes.STRING},
    user:{type: DataTypes.STRING}
})

export default PrestamoModel;