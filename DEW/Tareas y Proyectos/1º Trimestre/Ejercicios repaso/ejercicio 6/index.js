document.getElementById("image").addEventListener('mouseover', () => {
    document.getElementById("image").style.display = 'none';
    cambiarImagen();
});

function cambiarImagen(){
    const imagen = "./laser.png" ;
    const contenedor = document.getElementById("div");
    contenedor.insertAdjacentHTML(
      "beforeend",
      `<img src=${imagen} id=${imagen}>`
    );   
};
    
