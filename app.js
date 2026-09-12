const chat = document.getElementById("chat");

const formulario = document.getElementById("chatForm");

const input = document.getElementById("pregunta");

formulario.addEventListener("submit", async (e)=>{

    e.preventDefault();

    const pregunta = input.value.trim();

    if(pregunta=="") return;

    agregarMensaje("usuario",pregunta);

    input.value="";

    agregarMensaje("bot","⏳ Pensando...","cargando");

    const respuesta = await obtenerRespuesta(pregunta);

    document.querySelector(".cargando").remove();

    agregarMensaje("bot",respuesta);

});

function agregarMensaje(tipo,texto,claseExtra=""){

    const div=document.createElement("div");

    div.className=`mensaje ${tipo} ${claseExtra}`;

    div.innerHTML=texto;

    chat.appendChild(div);

    chat.scrollTop=chat.scrollHeight;

}



    async function obtenerRespuesta(pregunta){

    const response = await fetch(
        "https://hook.us2.make.com/kps8hwp6hqrfiovn5827yxn9optk3886",
        {

            method:"POST",

            headers:{
                "Content-Type":"application/json"
            },

            body:JSON.stringify({
                pregunta:pregunta
            })

        });

    const datos = await response.json();

    return datos.respuesta;

}



function esperar(ms){

    return new Promise(resolve=>{

        setTimeout(resolve,ms);

    });

}