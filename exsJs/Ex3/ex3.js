function calcularMedia() {
    const nome = document.getElementById('nome').value.trim();
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const nota3 = parseFloat(document.getElementById('nota3').value);
    const resultado = document.getElementById('resultado');

    // Validação
    if (!nome) {
        exibirResultado('Por favor, digite o nome do aluno.', 'red');
        return;
    }
    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        exibirResultado('Por favor, preencha todas as três notas.', 'red');
        return;
    }

    const media = (nota1 + nota2 + nota3) / 3;

    let mensagem = '';
    let cor = '';

    if (media >= 7.0 && media <= 10.0) {
        mensagem = ` ${nome}, você foi aprovado<br>Média: ${media.toFixed(2)}`;
        cor = 'blue';
    } 
    else if (media >= 4.0 && media < 7.0) {
        const falta = (10 - media).toFixed(2);
        mensagem = ` ${nome}, você está em exame.<br>Média: ${media.toFixed(2)}<br>Faltam ${falta} pontos para aprovação.`;
        cor = 'green';
    } 
    else {
        mensagem = ` ${nome}, você foi reprovado <br>Média: ${media.toFixed(2)}`;
        cor = 'red';
    }

    exibirResultado(mensagem, cor);
}

function exibirResultado(mensagem, cor) {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = mensagem;
    resultado.style.color = cor;
    resultado.style.fontSize = '22px';
    resultado.style.fontWeight = 'bold';
    resultado.style.marginTop = '20px';
}