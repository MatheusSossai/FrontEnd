function revelar() {
    alert("Função de revelar ativada!");
}

function add() {

    const container = document.getElementById('container-jogadores');


    const novoCard = document.createElement('div');
    novoCard.className = 'card';
    novoCard.style.width = '22rem';


    novoCard.innerHTML = `
        <img src="Paqueta.jpeg" class="card-img-top" alt="Lucas Paquetá">
        <div class="card-body"> 
            <h5 class="card-title">
                Lucas Tolentino Coelho de Lima
                <span class="badge bg-success">8,8</span>
            </h5>
            <p class="card-text">
                <strong>Data de Nascimento:</strong> 27/08/1997 (28 anos)<br>
                <strong>Altura:</strong> 1,80 m<br>
                <strong>Posição:</strong> Meio-campista
            </p>
        </div>
    `;

    container.appendChild(novoCard);
}