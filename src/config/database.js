module.exports = {
    host: process.env.HOST,
    dialect: process.env.DB_DIALECT,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB,
    define: {
        timestamps: true,
        underscored: true,
    },
}