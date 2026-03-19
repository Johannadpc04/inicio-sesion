const model = require('./model')

async function insertar_cliente(dato) {
    const resultado = await new model(dato)
    return resultado.save()
}

async function buscarPorEmail(email) {
    return model.findOne({ email });
}
module.exports = {
    insertar:insertar_cliente,
    buscarPorEmail
};