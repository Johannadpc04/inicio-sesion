async function guardarDatos() {
    const titulo = document.getElementById('inputTarea').value;
    const feedback = document.getElementById('feedback');

    try {
        const respuesta = await fetch('http://localhost:3000/api/tareas', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ titulo: titulo, completada: false })
        });

        if (respuesta.ok) {
            feedback.innerText = "¡Guardado con éxito!";
            document.getElementById('inputTarea').value = ""; // Limpiar input
        }
    } catch (error) {
        feedback.innerText = "Error al guardar.";
    }
}