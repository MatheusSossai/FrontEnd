function calcularTaxas() {
    const bandeiraSelect = document.getElementById('bandeira');
    const valorInput = document.getElementById('valor');
    const parcelasInput = document.getElementById('parcelas');
    const resultado = document.getElementById('resultado');

    const bandeira = bandeiraSelect.value;
    const valor = parseFloat(valorInput.value);
    const parcelas = parseInt(parcelasInput.value);

    // Validação
    if (!bandeira) {
        exibirResultado('Por favor, selecione uma bandeira.', 'red');
        return;
    }
    if (isNaN(valor) || valor <= 0) {
        exibirResultado('Por favor, insira um valor de venda válido.', 'red');
        return;
    }
    if (isNaN(parcelas) || parcelas < 1) {
        exibirResultado('Por favor, insira um número válido de parcelas.', 'red');
        return;
    }

    let taxaBandeiraPercent = 0;
    switch (bandeira) {
        case 'visa':
            taxaBandeiraPercent = 0.02;     // 2%
            break;
        case 'master':
            taxaBandeiraPercent = 0.0185;   // 1.85%
            break;
        case 'elo':
            taxaBandeiraPercent = 0.03;     // 3%
            break;
    }

    const valorTaxa = valor * taxaBandeiraPercent;

//contas
    const jurosPorMes = 0.0035;
    const valorJuros = valor * jurosPorMes * parcelas;

    const valorTotal = valor + valorTaxa + valorJuros;

    const valorParcela = valorTotal / parcelas;

   
    let html = `
        <strong>Resumo da Transação:</strong><br><br>
        Valor da Taxa (Bandeira): R$ ${valorTaxa.toFixed(2)}<br>
        Valor dos Juros: R$ ${valorJuros.toFixed(2)}<br>
        Valor Total: R$ ${valorTotal.toFixed(2)}<br><br>
        <strong>Valor de cada Parcela:</strong> R$ ${valorParcela.toFixed(2)}
    `;

    exibirResultado(html, 'blue');
}

function exibirResultado(mensagem, cor) {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = mensagem;
    resultado.style.color = cor;
    resultado.style.fontSize = '20px';
    resultado.style.fontWeight = 'bold';
    resultado.style.marginTop = '25px';
    resultado.style.lineHeight = '1.6';
}