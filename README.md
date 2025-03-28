# Proyecto 3
Este proyecto está enfocado en construir una página landing para un negocio.

### Planteamiento y requerimientos
- Realizar un prototipado simple, en papel o utilizando un programa de dibujo, sobre cómo trabajarás tu sitio.
- Muestra de los mensajes de negocio
- Breve catálogo de productos
- Incluir estas secciones en la interfaz:
a. Header Sección que involucra el logo y las áreas principales del sitio.
b. Main Sección de presentación del producto al usuario. Debe de incluir su título, descripción y un elemento para introducir tu correo.
c. Products Sección para mostrar los artículos del sitio web. O en su caso, artículos de catálogo de productos
d. Footer Sección que incluye todas las áreas del sitio, incluyendo redes sociales.
- De manera opcional y recomendada, que la vista se adapte a móviles.



## Prototipado
![Prototipado](https://res.cloudinary.com/ddxlvh0go/image/upload/v1736620318/Landing_Page_LG.drawio_yi6piw.png)


## Header
Se utilizaron la librería de bootstrap para hacer responsiva la landing page y la librería de cloudflare.com para los íconos de las plataformas de música y redes sociales.

Se agregó una barra de navegación que dirige a las diferentes secciones de la página landing: Contacto, Discografía y Plataformas de música donde están disponibles los productos del artista.

Se utilizó la opción de hamburguesa para mejorar la experiencia en dispositivos mobiles y se fijó la barra de navegación en la parte de arriba de la página.

```
<nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top" id="navbar">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">LUIS GERARDO AQUINO</a>
        <button 
          class="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link" href="#socialMedia">Contacto</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#discografia">Discografía</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#plataformas">Plataformas</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
```

## Main

A través de una imagen del último concierto se presenta al artista, como una descripción gráfica.

```
      <div class="portada z-0">
        <img src="https://res.cloudinary.com/ddxlvh0go/image/upload/v1736218921/IMG_2166_dej5fy.jpg" class="imagenx"/>
        <div class="overlay"></div>
        <form id="contact">
          <div>
          <input class="input" type="email" id="newContact" placeholder="Escribe tu email">
          <button class="btn" id="submit">Enviar</button>
        </div>
          <p>Ingrese su correo electrónico para recibir información</p>
        </form>
      </div>
```


Se incluyó un formulario que permite a los usuarios agregar su correo electrónico a la base de datos del artista para futuros contactos o para recibir información. Los correos se almacenan en un arreglo. Para esto vinculamos el archivo main.js con el código para leer el evento submit cuando el usuario da click en Enviar o presiona "Enter".
```
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
```


En esta sección se agregaron los íconos de las plataformas de música donde está disponible la música del artista. Para esto se usó una lista en línea que contiene los elementos de las plataformas.
Cada elemento tiene un ícono con un link que deriva a la página correspondiente en una nueva pestaña para que los usuarios puedan adquirir sus productos. Se le agregó la opción de cambiar de color al pasar el mouse sobre el ícono.

```
          <li class="list-inline-item">
            <a href="https://music.apple.com/us/artist/luis-gerardo-aquino/1488821749"
              class="fa-brands fa-apple"
              style="font-size: 130%; color: rgb(132, 240, 229)"
              onmouseover="this.style.color='azure'"
              onmouseout="this.style.color='rgb(132, 240, 229)'"
              target="_blank"
            ></a>
          </li>
          
```


## Productos
Se divide en 2 tipos de productos:Discografia y Singles.
Para esta parte se utilizó la opción de grid para poder ordenar los diferentes discos del artista en la sección de discografía y posteriormente los Singles.

```
    .discografia{
        display: grid;
        grid-template-columns: repeat(auto-fill, 1fr);
        grid-template-rows: repeat(auto-fill, 1fr);
        gap: 3rem;
        padding-top: 0;
      }

```

Se utiliza la clase "cd" para cada elemento de esta sección para poder darle el formato deseado en css.
Al dar click en la imagen deriba al link de youtube de cada disco o single.

HTML
```
    <h1 id="discografia">Discografía</h1>
      <div class="discografia">
        <div class="cd">
        <h4>Yo miro tu Gloria</h4>
        <p>Lanzamiento: 2024</p>
        <a href="https://www.youtube.com/watch?v=Kl-ayjSD4QY" target="_blank">
          <img
            src="https://res.cloudinary.com/ddxlvh0go/image/upload/v1736226040/YMTG_oekfd1.webp"
            width="65%"
          />
         </a>
        </div>
  
```

CSS
```
    .discografia{
        display: grid;
        grid-template-columns: repeat(auto-fill, 1fr);
        grid-template-rows: repeat(auto-fill, 1fr);
        gap: 3rem;
        padding-top: 0;
      }
      
      .cd h4{
        color: azure;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 1rem;
        text-align: center;
        margin: 0;
      }
      
      .cd p{
        color: azure;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 0.7rem;
        text-align: center;
        margin: 0;
      }
      
      .cd img{
        width: 13rem;
        height: auto;
        cursor: pointer;
        padding-bottom: 0.6rem;
      }
      
      .cd{
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 0.1rem solid azure;
        border-radius: 0.6rem;
        padding-top: 1.3rem;
        margin: 1.3rem;
      }
```

## Redes sociales

De la misma manera que con las plataformas de música se usaron íconos de las redes sociales principales para conocer al artista, organizados en una lista ul.
```
    <h1 id="socialMedia">Síguenos</h1>
      <div class="socialMedia">
          <ul class="rrss">
            <li class="rs">
              <a
                href="https://www.facebook.com/LuisGerardoAquinoSV/?locale=es_LA"
                class="fa-brands fa-facebook"
                style="font-size: 250%; color: rgb(4, 104, 185)"
                onmouseover="this.style.color='azure'"
                onmouseout="this.style.color='rgb(4, 104, 185)'"
                target="_blank"
              ></a>
            </li>

```


## Footer
El Footer consiste en el logo de copyright, el nombre del artista, el teléfono y correo electrónico.
```
    <footer>
      <p>&#169; Luis Gerardo Aquino   ||  contacto: +56 9 1111 1111  ||  luisgerardoaquino@gmail.com</p>
    </footer>
```

## Enlace para volver al inicio
Además se agregó un enlace en forma de botón para poder regresar al inicio de la página landing fácilmente.
```
     <a href="#top" id="back-to-top"
        style="font-size: 24px; color: azure;" 
        onmouseover="this.style.color='rgb(97, 235, 235)'" 
        onmouseout="this.style.color='azure'"
    >↑</a>
```
