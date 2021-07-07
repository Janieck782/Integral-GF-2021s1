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


}

function guardarDemanda() {
    auxDem = document.getElementById("demanda").value;
    
    registrarDemanda(auxDem)
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



  