document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('userForm');
    const datosGuardados = document.getElementById('datosGuardados');

    // Mostrar datos guardados al cargar la página
    mostrarDatos();

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const edad = document.getElementById('edad').value;
        const direccion = document.getElementById('direccion').value;

        const datos = { nombre, apellido, edad, direccion };
        localStorage.setItem('usuario', JSON.stringify(datos));
        mostrarDatos();
        form.reset();
    });

    function mostrarDatos() {
        const datos = localStorage.getItem('usuario');
        if (datos) {
            const usuario = JSON.parse(datos);
            datosGuardados.innerHTML = `
                <h3>Datos guardados:</h3>
                <p><strong>Nombre:</strong> ${usuario.nombre}</p>
                <p><strong>Apellido:</strong> ${usuario.apellido}</p>
                <p><strong>Edad:</strong> ${usuario.edad}</p>
                <p><strong>Dirección:</strong> ${usuario.direccion}</p>
            `;
        } else {
            datosGuardados.innerHTML = '';
        }
    }
}
);