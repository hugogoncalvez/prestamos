import { Sequelize } from "sequelize";

const db = new Sequelize('sistema_prestamos', 'root','Abigail12',{
    host:'localhost',
    dialect:'mysql'
})

export default db;