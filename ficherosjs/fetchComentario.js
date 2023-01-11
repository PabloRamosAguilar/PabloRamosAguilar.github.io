const URL = "https://raw.githubusercontent.com/PabloRamosAguilar/JSON/main/comentarios.JSON";
var divPadre = document.querySelector("#espacioComentarios");

function pintarComentarios(Comentario) {

    Comentario.forEach(objeto => {
        let temporalDiv = document.createElement("DIV");
        let temporalNombre = document.createElement("H3");
        let temporalComentario = document.createElement("P");

        temporalNombre.innerHTML = objeto.nombre;
        temporalComentario.innerHTML = objeto.comentario;

        divPadre.appendChild(temporalDiv);
        temporalDiv.classList.add("row");
        temporalDiv.appendChild(temporalNombre);
        temporalNombre.classList.add("text-center");
        temporalDiv.appendChild(temporalComentario);

    })
}

const consultarAPI = async () => {

    const [respuesta] = await Promise.all([fetch(URL)]);
    const resultado = await respuesta.json();

    pintarComentarios(resultado);

}

consultarAPI();