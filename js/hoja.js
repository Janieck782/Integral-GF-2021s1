//ubi,dem

class lugar {
   constructor( c, i) {
       this.c = [];
       this.i = [];
   }
}

let resumen = new lugar;

//varibles
let resultado = []; // --> Crea matriz cuadrada con los resultados
let cd = []//centros de distribucion
let cc = []//carga por centro
let camiXcent = [];//tabla con los camiones por centro


function iniciarHoja(){
   
   calcularCentros();
   console.table(camiXcent);
   iniciarLugar();
   //crearResultados();
}

function cargaXcentro(){
  
  for(let i = 0; i < dem.n.length; i++){
     cc[dem.c[i]] = "";
  }

  for(let i = 0; i < dem.n.length; i++){
   cc[dem.c[i]] += `${dem.n[i]}`;
   if(i+1!=dem.n.length){
      cc[dem.c[i]] +="+";
   }
  }
  console.table(cc)

  cc.forEach(carXcami)
  


}

function carXcami(element, index) {
   let aux = element.split("+");
   let peso=0;
   let camiones=0;
   
   for(let i = 0; i < aux.length; i++){
      peso+=aux[i];
      if(i+1!=aux.length){

         if((peso+aux[i+1])>1000 ){
           camiones++;
           peso=0;
         }
      }else{
         camiones++;
      }
   }
   
   camiXcent[index]=camiones;
   
}

function iniciarLugar(){

   for( let i = 0 ; i < ubi.t.length ; i++ ){
      resumen.c.push(ubi.t[i]+ubi.n[i]);
      resumen.i.push(i)
   }
   console.log(resumen);

}

function crearResultados(){
   
   for(let y=0; y<cantCamimones; y++) {
       resultado[y] = new Array(3);
   }

   console.log(resultado);   
}

//dem
function calcularCentros(){
   //cd
   
   for(let i = 0 ; i < dem.c.length;i++){
      if(cd.includes(dem.c[i])==false){
         cd.push(dem.c[i]);
      }
   }

   cargaXcentro();
}