class ubicacion{
    constructor(t,n,x,y){
        this.t = [];//p o c 
        this.n = [];//id identificador
        this.x = [];
        this.y = [];
    }
}

class demanda{
    constructor(t,n,x,y){
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

function guardarUbicaciones(){
    auxUbi = document.getElementById("coordenadas").value;
    console.log(auxUbi);
    //verificarUbicaiones(auxUbi);
    
}

function verificarUbicaiones(aux){
    let txx = aux.split('\n');
    let txs = [];
    let txt = [];
    let bep = [];


    for(let i = 0 ; i < txx.lenght ; i++){
        txs.push(txx[i]);
    }

    for(let j = 0 ; j < txs.length; j++){
        bep.push(txs[j].replace(',',';'));
    
    }


    

}

function guardarDemanda(){
    auxDem = document.getElementById("demanda").value;
    console.log(auxDem);
    //verificarDemanda(auxDem)
}

function verificarDemanda(aux){
// if ubi.c == auxDem
}

