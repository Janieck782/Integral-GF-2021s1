class ubicacion {
    constructor(t, n, x, y) {
        this.t = []; //p o c 
        this.n = []; //id identificador
        this.x = [];
        this.y = [];
    }
}

class demanda {
    constructor( c, p, n) {
        this.c = [];
        this.p = [];
        this.n = [];
    }
}

//clases
let ubi = new ubicacion;
let dem = new demanda;

//variables 
let auxUbi;
let auxDem;

//distancia
let matrizDist;
let matrizOrigen;

function origen(){
    ubi.t.push("E");
    ubi.n.push("D");
    ubi.x.push(0);
    ubi.y.push(0);
}


function guardar(enlace){
    let aus = document.getElementById("demanda").value;
    if(aus==""){
    alert("No se ha cargado el archivo")
    }else{
    enlace.disabled = 'disabled';
    console.log("El archivo se ha cargado con exito")
    origen();
    guardarUbicaciones()
    guardarDemanda();

    iniciarDisplay();//display.js
    iniciarHoja();//hoja.js funciones de ruta

    }

}


function guardarUbicaciones() {
    auxUbi = document.getElementById("coordenadas").value;
    registrarUbicaiones(auxUbi);
}

function registrarUbicaiones(aux) {

    let txx = aux.split('\n');
    let num = txx.length;
    let txs = [];
    let txt = [];
    let bep = [];

    for (let i = 0; i < num; i++) {
        txs.push(txx[i]);
    }

    for (let j = 0; j < txs.length; j++) {
        bep.push(txs[j].replace(',', ';'));
        txt.push(bep[j].split(';'))
    }

    for (let m = 0; m < txs.length; m++) {
        ubi.t.push(txt[m][0]);
        ubi.n.push(txt[m][1]);
        ubi.x.push(Number.parseInt(txt[m][2]));
        ubi.y.push(Number.parseInt(txt[m][3]));
    }

    Distancias();
}

function guardarDemanda() {
    auxDem = document.getElementById("demanda").value;
    
    registrarDemanda(auxDem);
}

function registrarDemanda(aux) {
    let txx = aux.split('\n');
    let num = txx.length;
    let txs = [];
    let txt = [];

    for (let i = 0; i < num; i++) {
        
        txs.push(txx[i]);
    }

    for (let j = 0; j < txs.length; j++) {
        txt.push(txx[j].split(';'))
    }

    for (let m = 0; m < txs.length; m++) {
        dem.c.push(txt[m][0]);
        dem.p.push(txt[m][1]);
        dem.n.push(Number.parseInt(txt[m][2]));
    }

    console.log(ubi);
    console.log(dem);
}
//distancia

function crearDistancia(aux) {
    var distance = new Array(aux.length);

    for(let i = 0; i < distance.length; i++) {
        distance[i] = new Array(distance.length);
    }

    var cont = 0;

    while(cont < distance.length) {
        for(let a = 0; a < aux.length; a++) {
            for(let b = 0; b < aux.length; b++) {
                if(aux[a] != aux[b]) {
                    distance[cont][b] = aux[b] - aux[a];
                } else {
                    distance[cont][b] = 0;
                }
            }
            cont++;
        }
    }

    return distance;
}

function resHipo(X, Y) {
    var aux = [];
    let i, j;

    for(i  = 0; i < X.length; i++) {
        aux[i] = new Array(X.length);
    }

    for(i = 0; i < X.length; i++) {
        for(j = 0; j < X.length; j++) {
            aux[i][j] = Math.hypot(X[i][j], Y[i][j]);
        }
    }
    return aux;
}

function Distancias() {
    var distX = crearDistancia(ubi.x);
    var distY = crearDistancia(ubi.y);

    // console.log("Matriz distancia X");
    // console.table(distX);
    // console.log("Matriz distancia Y");
    // console.table(distY);

    matrizDist = JSON.parse( JSON.stringify( resHipo(distX, distY) ) );
    console.table(matrizDist);

    console.table(ubi);
}