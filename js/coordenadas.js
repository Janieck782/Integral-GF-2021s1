class ubicacion {
    constructor(t, n, x, y) {
        this.t = []; //p o c 
        this.n = []; //id identificador
        this.x = [];
        this.y = [];
    }
}

class demanda {
    constructor(t, n, x, y) {
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

function guardar(enlace){
    let aus = document.getElementById("demanda").value;
    if(aus==""){
    alert("No se ha cargado el archivo")
    }else{
    enlace.disabled = 'disabled';
    console.log("El archivo se ha cargado con exito")
    guardarUbicaciones();
    guardarDemanda();
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
    let bep = [];

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
    matrizDist = new Array(aux.length);

    for(let i = 0; i < matrizDist.length; i++) {
        matrizDist[i] = new Array(matrizDist.length);
    }

    var cont = 0;

    while(cont < matrizDist.length) {
        for(let a = 0; a < aux.length; a++) {
            for(let b = 0; b < aux.length; b++) {
                if(aux[a] != aux[b]) {
                    matrizDist[cont][b] = aux[b] - aux[a];
                } else {
                    matrizDist[cont][b] = 0;
                }
            }
            cont++;
        }
    }

    return matrizDist;
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

    console.log("Matriz distancia X");
    console.table(distX);
    console.log("Matriz distancia Y");
    console.table(distY);

    matrizDist = resHipo(distX, distY);
    console.table(matrizDist);
}
  