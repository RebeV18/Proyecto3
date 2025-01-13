document.addEventListener('DOMContentLoaded', () => {
  const contact = document.getElementById('contact');
  const contactos = [];
  const nuevoContacto = document.getElementById('newContact');

  const crearContacto = (evento) => {
    evento.preventDefault();
    const email = nuevoContacto.value.trim();
    if (email === '') {
      alert("Por favor, ingrese un email válido");
      return;
    }
    const existe = contactos.includes(email);
    if (existe) {
      alert("Su email ya está registrado");
    } else {
      contactos.push(email);
      const nuevo = document.createElement('div');
      nuevo.textContent = email; // Añadir el valor del nuevo contacto al div
      alert("Su email fue agregado a nuestra base de datos");
      nuevoContacto.value = ''; // Borrar el contenido del input
      console.log(contactos);
    }
  }

  contact.addEventListener('submit', crearContacto);
});