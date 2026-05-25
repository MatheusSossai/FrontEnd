function calcularOrcamento() {
    const pacoteSelect = document.getElementById('pacote');
    const quantidadeInput = document.getElementById('quantidade');
    const resultado = document.getElementById('resultado');

    const valorPorPessoa = parseFloat(pacoteSelect.value);
    const quantidade = parseInt(quantidadeInput.value);

    // Validação
    if (!valorPorPessoa) {
        exibirResultado('Por favor, selecione um pacote.', 'red');
        return;
    }
    if (isNaN(quantidade) || quantidade < 1) {
        exibirResultado('Por favor, insira uma quantidade válida de pessoas.', 'red');
        return;
    }

    // Cálculo Base
    const custoBase = valorPorPessoa * quantidade;

   
    const taxaServico = custoBase * 0.10;

  
    let totalComTaxa = custoBase + taxaServico;

  
    let desconto = 0;
    if (quantidade > 100) {
        desconto = totalComTaxa * 0.05;
        totalComTaxa -= desconto;
    }

    // Exibir resultado
    let html = `
        <strong>Resumo do Orçamento:</strong><br><br>
        Custo Bruto: R$ ${custoBase.toFixed(2)}<br>
        Taxa de Serviço (10%): R$ ${taxaServico.toFixed(2)}<br>
    `;

    if (desconto > 0) {
        html += `Desconto Fidelidade (5%): - R$ ${desconto.toFixed(2)}<br>`;
    }

    html += `<br><strong>Valor Total Final: R$ ${totalComTaxa.toFixed(2)}</strong>`;

    exibirResultado(html, 'blue');
}

function exibirResultado(mensagem, cor) {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = mensagem;
    resultado.style.color = cor;
    resultado.style.fontSize = '20px';
    resultado.style.fontWeight = 'bold';
    resultado.style.marginTop = '25px';
    resultado.style.lineHeight = '1.8';
}