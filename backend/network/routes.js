const usuario = require('../components/usuario/interface')
const cliente = require('../components/cliente/interface')


const routes = function( server ) {
    server.use('/usuario', usuario)
    server.use('/usuario/estudiantes', usuario)
    server.use('/usuario/updateScore', usuario)
    server.use('/cliente', cliente)
    server.use('/cliente/login', cliente)

}

module.exports = routes