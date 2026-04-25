// Buscar recetas
const buscador = document.getElementById("inputBusqueda");
const cards = document.querySelectorAll(".card");

buscador.addEventListener("keyup", function(){
    let texto = buscador.value.toLowerCase();

    cards.forEach(card => {
        let titulo = card.querySelector("h3").textContent.toLowerCase();

        if(titulo.includes(texto)){
            card.style.display = "block";
        }else{
            card.style.display = "none";
        }
    });
});