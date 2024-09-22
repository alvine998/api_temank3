require('dotenv').config()

module.exports = {
    HOST: "202.52.146.203",
    USER: "stokinve_root",
    PASSWORD: "stokinventory.com",
    DB: "stokinve_temank3",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};