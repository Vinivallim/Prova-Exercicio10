const db = require("./banco")

const contas = db.sequelize.define('contas',{
    nome:{
        type: db.Sequelize.STRING
    },
    senha:{
        type: db.Sequelize.STRING},
    })

    contas.sync({force:true})
    
    module.exports = contas