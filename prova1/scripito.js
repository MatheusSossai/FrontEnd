function revelar() {
  
    const imagem = document.getElementById("imagem");
    imagem.src = "vinicraque.png";

    const nome = document.getElementById("nome");
    const data = document.getElementById("data");
    const altura = document.getElementById("altura");
    const posicao = document.getElementById("posicao");
    const rank = document.getElementById("rank");


    nome.textContent = "Vinícius José Paixão de Oliveira Júnior";
    data.textContent = "12/07/2000 (25 anos)";
    altura.textContent = "1,76 m";
    posicao.textContent = "Ponta-esquerda / Atacante";
    rank.textContent = "9,5";

 
    const elementos = [nome, data, altura, posicao, rank];

    elementos.forEach(el => {
        el.classList.remove("placeholder");
        el.classList.add("card-text");
    });
}