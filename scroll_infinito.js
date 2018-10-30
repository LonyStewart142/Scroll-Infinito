const contenedor = document.querySelector('.Contenedor_Principal');
let cont = 1;
function CargarElementos() {

    for (let i = 0; i <= 4; i++) {
     
       let caja=
       `
 <div class="caja_nombre">
 <h3>Titulo</h3>
 <div class="imagen"><h5>Imagen ${cont++} </h5></div>
 <div class="comentarios"><h5>Comentarios</h5>
 </div>
 </div>
       `;
       contenedor.innerHTML+=caja;
        
    }
}

document.addEventListener('scroll',function () {
    if(window.scrollY+document.documentElement.clientHeight>= this.body.scrollHeight){
        CargarElementos();
    }
});

CargarElementos();