require('dotenv').config()

module.exports = {
    HOST: "127.0.0.1",
    USER: "root",
    PASSWORD: "Tokotitoh@2024!",
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
