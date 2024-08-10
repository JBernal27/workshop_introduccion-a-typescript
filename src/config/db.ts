
import { Medicine, Patient, Prescription } from '../models';
import { Sequelize } from 'sequelize-typescript';

const sequelize: Sequelize = new Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: '1022003230',
    database: 'Pharmaceutical',
    models: [Medicine, Patient, Prescription],
    define: {
        underscored: true
    }
});

export default sequelize;