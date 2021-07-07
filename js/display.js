//ubi,dem

const contUbi = document.querySelector("#exCoordenadas");
const contDem = document.querySelector("#exDemanda");

function iniciarDisplay(){
    contenedorUbi();
    contenedorDem();

}

function contenedorUbi(){
    var texto = document.createElement("h4");
    
    texto.innerHTML = `Las ubicaciones son:`; 
    let aux = ubi.t.length;
    
    contUbi.appendChild(texto);

    for(i = 0 ; i < aux ; i++ ){
    var txt = document.createElement("p");
    let t1 = ubi.t[i];
    let t2 = ubi.n[i];
    let t3 = ubi.x[i];
    let t4 = ubi.y[i];
    txt.innerHTML = `${i+1}.${t1}-${t2}, X:${t3} Y:${t4}`;
    contUbi.appendChild(txt);
    }

}

function contenedorDem(){
    var texto = document.createElement("h4");
    
    texto.innerHTML = `Demanda de productos del dia son:`; 
    let aux = dem.c.length;
    
    contDem.appendChild(texto);

    for(i = 0 ; i < aux ; i++ ){
    var txt = document.createElement("p");
    let t1 = dem.c[i];
    let t2 = dem.p[i];
    let t3 = dem.n[i];
    txt.innerHTML = `${i+1}. P-${t2} requiere un cargamento de ${t3}, desde C-${t1}`;
    contDem.appendChild(txt);
    }

}