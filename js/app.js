function abrirArchivo(evento) {
    let archivo = evento.target.files[0];

    if (archivo) {
        let lector = new FileReader();
        lector.onload = function (e) {
            let contenido = e.target.result;
            mostrarContenido(contenido);
        };
        lector.readAsText(archivo);
    } 
}

function abrirArchivo2(evento) {
    let archivo = evento.target.files[0];

    if (archivo) {
        let lector = new FileReader();
        lector.onload = function (e) {
            let contenido = e.target.result;
            mostrarContenidoDemanda(contenido);
        };
        lector.readAsText(archivo);
    } 
}



window.addEventListener('load', () => {
    document.getElementById('ubicaciones').addEventListener('change', abrirArchivo);
    document.getElementById('productos').addEventListener('change', abrirArchivo2);
});



function mostrarContenido(contenido){

       var elemento = document.getElementById('coordenadas');
       elemento.innerHTML = contenido;  

}
function mostrarContenidoDemanda(contenido){

 var elemento = document.getElementById('demanda');
       elemento.innerHTML = contenido;  
}
