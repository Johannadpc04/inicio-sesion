const storage = require('./storage');

function insertar_cliente( dato ) {
    return new Promise( (resolve, reject) => {
        if ( !dato.nombre || !dato.apellido || !dato.email || !dato.clave || !dato.fecha_nacimiento ) {
            reject( 'Los datos se encuentran incompletos.' )
        } else {
            resolve( storage.insertar( dato ) )
        }
    } )
}

function iniciar_sesion(dato) {
    return new Promise(async (resolve, reject) => {
        const { email, clave } = dato;

        if (!email || !clave) {
            return reject('El email y la clave son obligatorios.');
        }

        try {
            // Buscar al usuario por email
            const cliente = await storage.buscarPorEmail(email);
            if (!usuario) {
                return reject('Usuario no encontrado.');
            }

            if (cliente.clave !== clave) {
                return reject('Clave incorrecta.');
            }

            resolve({ message: 'Inicio de sesión exitoso.', cliente });
        } catch (error) {
            reject('Error al iniciar sesión.');
        }
    });
}
module.exports = {
    insertar_cliente,
    iniciar_sesion
}