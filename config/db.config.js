require('dotenv').config()

module.exports = {
    HOST: "154.26.137.37",
    USER: "root",
    PASSWORD: "root1234",
    DB: "temank3",
    dialect: "mysql",
    dialectOptions: {
    connectTimeout: 60000, // Increase timeout (default is 10s)
  },
    pool: {
        max: 5,
        min: 0,
        acquire: 60000,
        idle: 10000
    }
};
