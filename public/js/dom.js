import { servicios } from './datos.js';
import { crearCard, cambiarTitulo } from './funciones.js';

// Detectar en qué página estamos
const ruta = window.location.pathname;

if (ruta.includes("index.html") || ruta.endsWith("/")) {
  cambiarTitulo("Inicio | Luz de Hada");
}
if (ruta.includes("servicios.html")) {
  cambiarTitulo("Servicios | Luz de Hada");
}
if (ruta.includes("nosotros.html")) {
  cambiarTitulo("Nosotros | Luz de Hada");
}
if (ruta.includes("contacto.html")) {
  cambiarTitulo("Contacto | Luz de Hada");
}

// --- Pintar servicios ---
const contenedor = document.getElementById('servicios-container');
if (contenedor) {
  contenedor.innerHTML = servicios.map(servicio => crearCard(servicio)).join('');
}

// --- Validación de formulario ---
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = form.querySelector('[name="nombre"]').value;
    const email = form.querySelector('[name="email"]').value;
    const mensaje = form.querySelector('[name="mensaje"]').value;

    if (nombre.length < 3) {
      alert('El nombre debe tener al menos 3 caracteres');
      return;
    }
    if (!email.includes("@")) {
      alert('Por favor ingresa un correo válido');
      return;
    }
    if (mensaje.length < 10) {
      alert('El mensaje debe tener al menos 10 caracteres');
      return;
    }

    alert('Formulario enviado correctamente. ¡Gracias!');
    form.reset();
  });
}

// --- Botón de tema ---
const btnTema = document.getElementById('btn-tema');
if (btnTema) {
  btnTema.addEventListener('click', () => {
    document.body.classList.toggle('oscuro');
    btnTema.textContent = document.body.classList.contains('oscuro')
      ? "Modo Claro"
      : "Modo Oscuro";
  });
}
const themeToggleBtn = document.getElementById('theme-toggle');

if(themeToggleBtn) {
  themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');

    if(document.body.classList.contains('dark')) {
      themeToggleBtn.textContent = '☀️ Cambiar tema';
    } else {
      themeToggleBtn.textContent = '🌙 Cambiar tema';
    }
  });
}