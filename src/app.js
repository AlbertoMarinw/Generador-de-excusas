/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector("#EXCUSA").innerHTML = generarexcusa();
};
function generarexcusa() {
  let pronombre = ["un", "el"];
  let sujeto = ["perro", "gato", "vecino", "profesor"];
  let verbo = ["comio", "destruyo", "mordio"];
  let objeto = ["mi tarea", "mi proyecto", "mi lectura"];
  let indicePronombre = Math.floor(Math.random() * pronombre.length);
  let indiceSujeto = Math.floor(Math.random() * sujeto.length);
  let indiceVerbo = Math.floor(Math.random() * verbo.length);
  let indiceObjeto = Math.floor(Math.random() * objeto.length);
  return (
    pronombre[indicePronombre] +
    " " +
    sujeto[indiceSujeto] +
    " " +
    verbo[indiceVerbo] +
    " " +
    objeto[indiceObjeto]
  );
}
