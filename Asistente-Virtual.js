
// RESPUESTAS
const respuestas = [
    { pregunta: "ceviche", respuesta: "Para hacer ceviche necesitas pescado fresco, limón, ají, cebolla y sal. Mezcla y deja reposar unos minutos." },
    { pregunta: "lomo saltado", respuesta: "Saltea carne con cebolla, tomate, sillao y sirve con papas fritas y arroz." },
    { pregunta: "aji de gallina", respuesta: "Hierve pollo, desmenúzalo y mézclalo con crema de ají amarillo, pan y leche." },
    { pregunta: "causa", respuesta: "Haz puré de papa amarilla con limón y ají, luego rellena con pollo o atún." },
    { pregunta: "anticuchos", respuesta: "Marina carne con ají panca y vinagre y ásala en brochetas." },
    { pregunta: "arroz con pollo", respuesta: "Cocina arroz con culantro, pollo, arvejas y zanahoria." },
    { pregunta: "tallarines rojos", respuesta: "Prepara salsa de tomate con carne y mezcla con tallarines." },
    { pregunta: "huancaina", respuesta: "Licúa ají amarillo, queso y leche, sirve sobre papas." },
    { pregunta: "rocoto", respuesta: "Rellena rocoto con carne y hornéalo con queso." },
    { pregunta: "chaufa", respuesta: "Saltea arroz con pollo, huevo, sillao y cebolla china." },
    { pregunta: "sopa criolla", respuesta: "Hierve carne con fideos, leche y huevo." },
    { pregunta: "seco", respuesta: "Cocina pollo con culantro, cerveza y especias." },
    { pregunta: "carapulcra", respuesta: "Cocina papa seca con carne y ají panca." },
    { pregunta: "picarones", respuesta: "Haz masa de zapallo y fríe en forma de aros." },
    { pregunta: "mazamorra", respuesta: "Hierve maíz morado con frutas y espesantes." },
    { pregunta: "arroz con leche", respuesta: "Hierve arroz con leche, azúcar y canela." },
    { pregunta: "suspiro", respuesta: "Prepara manjar y cúbrelo con merengue." },
    { pregunta: "tacu tacu", respuesta: "Mezcla arroz y frejoles y fríelos." },
    { pregunta: "juane", respuesta: "Envuelve arroz con pollo en hojas y hiérvelo." },
    { pregunta: "caldo", respuesta: "Hierve gallina con fideos y verduras." },
    { pregunta: "tiradito", respuesta: "Corta pescado en láminas y agrega salsa picante." },
    { pregunta: "leche de tigre", respuesta: "Licúa jugo de ceviche con pescado." },
    { pregunta: "empanadas", respuesta: "Rellena masa con carne y hornéala." },
    { pregunta: "chicharron", respuesta: "Sirve chicharrón con camote y salsa." },
    { pregunta: "pollo a la brasa", respuesta: "Marina pollo con especias y hornéalo." },
    { pregunta: "hamburguesa", respuesta: "Forma carne molida y cocínala a la plancha." },
    { pregunta: "pizza", respuesta: "Prepara masa, agrega salsa y hornea con queso." },
    { pregunta: "ensalada", respuesta: "Mezcla verduras frescas con aderezo." }
];

// NORMALIZAR TEXTO (clave)
function limpiarTexto(texto){
    return texto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, ""); // quita tildes
}

// BUSCAR RESPUESTA
function obtenerRespuesta(texto){
    let limpio = limpiarTexto(texto);

    if(limpio.includes("hola")){
        return "¡Hola! 👋 ¿Qué receta peruana quieres aprender?";
    }

    for(let item of respuestas){
        if(limpio.includes(item.pregunta)){
            return item.respuesta;
        }
    }

    return "No entendí 🤔. Prueba: 'como hacer ceviche'";
}

// ENVIAR MENSAJE
function enviarMensaje(){

    let input = document.getElementById("userInput");
    let chatBox = document.getElementById("chatBox");

    let texto = input.value.trim();
    if(texto === "") return;

    // mensaje usuario
    chatBox.innerHTML += `<div class="mensaje user">${texto}</div>`;

    // respuesta bot
    let respuesta = obtenerRespuesta(texto);

    setTimeout(() => {
        chatBox.innerHTML += `<div class="mensaje bot">${respuesta}</div>`;
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 400);

    input.value = "";
}

// MENSAJE INICIAL
window.onload = function(){
    let chatBox = document.getElementById("chatBox");
    chatBox.innerHTML += `<div class="mensaje bot">👋 Hola, soy tu asistente. Pregúntame cómo hacer cualquier receta peruana.</div>`;
};