const cria = document.getElementById("cria");
const btn = document.getElementById("btn");

const estados = {
    normal: "b_n.png",
    puto: "b_p.png",
    morto: "b_d.png",
    comendo: "b_c.png",
    feliz: "b_a.png"
};

let tempoDia = 0;
let contador = 0;
let intervalo = null;
let timeoutClique = null;
let timeoutBack = null;
let vivo = true; 

function controlador() {

    if (intervalo) clearInterval(intervalo);

    intervalo = setInterval(() => {
        contador++;
        tempoDia++; 

        console.log("tempo:", contador);

        
        if (contador == 10) {
            cria.src = estados.puto;
        }

        
        if (contador == 20) {
            cria.src = estados.morto;
            vivo = false;

            
            btn.style.opacity = "0.5";
            btn.style.pointerEvents = "none";
        }

        
        if (tempoDia == 15) {
            document.body.classList.add("noite");
        }

        if (tempoDia == 30) {
            document.body.classList.remove("noite");
            tempoDia = 0;
        }

    }, 1000);
}

controlador();

function alimentar() {

    if (!vivo) {
        alert("A criatura está morta 💀");
        return;
    }

    console.log("Comendo...");

    cria.src = estados.comendo;
    contador = 0;

    if (timeoutClique) clearTimeout(timeoutClique);

    timeoutClique = setTimeout(() => {
        cria.src = estados.feliz;

        timeoutBack = setTimeout(() => {
            cria.src = estados.normal;
        }, 2000);

    }, 1000);
}