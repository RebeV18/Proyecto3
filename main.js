const cuerpo = document.getElementById("body");

const appleMusic = document.getElementsByClassName("apple");
const spoti = document.getElementsByClassName("spotify");
const youtu = document.getElementsByClassName("youtube");
const amz = document.getElementsByClassName("amazon");
const dez = document.getElementsByClassName("dezeer");
const sound = document.getElementsByClassName("soundcloud");
const face = document.getElementsByClassName("facebook");
const insta = document.getElementsByClassName("instagram");

elementos = [appleMusic, spoti, youtu, amz, dez, sound, face, insta];

elementos.forEach((elemento) => {
  const boton = document.createElement("button");
  boton.dataset.elemento = elemento;
  cuerpo.appendChild(boton);
});

cuerpo.addEventListener("click", (evento) => {
    const botonPresionado = evento.target;
    botonPresionado.dataset.elemento = ;
}