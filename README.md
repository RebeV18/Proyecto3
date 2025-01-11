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
        <a class="navbar-brand" href="#">Aquino</a>
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

En esta sección se agregaron los íconos de las plataformas de música donde está disponible la música del artista.
Para esto se usó una lista en línea que contiene los elementos de las plataformas.
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
        gap: 50px;
        padding-top: 0;
    }

```

Se utiliza la clase "cd" para cada elemento de esta sección para poder darle el formato deseado en css.
Al dar click en la imagen deriba al link de youtube de cada disco o single.

HTML
```
    <div class="cd">
        <p>Yo miro tu Gloria</p>
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
    .cd{
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 2px solid azure;
        border-radius: 10px;
        padding-top: 20px;
        margin: 20px;
        }
```

## Redes sociales

De la misma manera que con las plataformas de música se usaron íconos de las redes sociales principales para conocer al artista, organizados en una lista ul.
```
    <li class="rs">
        <a
            href="https://luisgerardoaquino.bandzoogle.com/inicio"
            class="fa-solid fa-circle-info"
            style="font-size: 250%; color: rgb(228, 245, 133)"
            onmouseover="this.style.color='azure'"
            onmouseout="this.style.color='rgb(252, 208, 63)'"
            target="_blank"
        ></a>
    </li>

```


## Footer
El Footer consiste en el logo de copyright, el nombre del artista, el teléfono y correo electrónico.
```
    <footer>
      <p>&#169; LUIS GERARDO AQUINO  ||  contacto: +56 9 1111 1111  ||  luisgerardoaquino@gmail.com</p>
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
