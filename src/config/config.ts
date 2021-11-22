// VARIABLES DE ENTORNO
export default {
    // Servidor Express
    PORT: process.env.PORT || 3000,

    // DataBase
    DB_USER: process.env.DB_USER || 'admin',
    DB_PASSWORD: process.env.DB_PASSWORD || 'admin1234',
    DATABASE: process.env.DATABASE || 'vuelaFacil'
}