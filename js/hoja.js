//ubi,dem

//varibles
let cantCamimones = 0;
let carga = [];
let hojas = "";


function iniciarHoja(){
   calcularCamiones(); 
   cargaXcamion();
   generador(cantCamimones);

}

function calcularCamiones(){
   let aux = 0;
   for( i = 0 ;i < dem.n.length ; i++ ){
      aux += dem.n[i];
   }
   cantCamimones = aux/1000;
   if(aux%1000 != 0){
      cantCamimones++;
   }
}

function cargaXcamion(){
   let aux = 0 ;
   for(let i = 0 ; i < dem.n.length; i++){
      aux += dem.n[i];
      if( i== dem.n.length){
         carga.push(aux);   
      }else{
         if( (aux+dem.n[i+1])/1000 != 0 && (aux+dem.n[i+1])%1000 != 0 ){
            carga.push(aux);   
            aux=0;
         }
      }     
   } 
}

function centrosXentrega(){
   

}