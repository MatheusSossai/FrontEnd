function analisarCartao() {
    const input = document.getElementById('numeroCartao');
    const resultado = document.getElementById('resultado');

    let numero = input.value.trim().replace(/\D/g, ''); // Remove tudo que não for número

    if (numero.length < 13 || numero.length > 16) {
        exibirResultado('O número do cartão deve ter entre 13 e 16 dígitos.', 'red');
        return;
    }

    // Algoritmo de Luhn
    const valido = validarLuhn(numero);

    // Detectar bandeira
    const bandeira = detectarBandeira(numero);

    if (valido) {
        let html = `
            <strong>✅ CARTÃO VÁLIDO</strong><br><br>
            Bandeira: <strong>${bandeira}</strong><br>
            Número: ${numero}<br>
            Status: <span style="color:green">Aprovado pela validação matemática (Luhn)</span>
        `;
        exibirResultado(html, 'green');
    } else {
        let html = `
            <strong>❌ CARTÃO INVÁLIDO</strong><br><br>
            Bandeira: ${bandeira}<br>
            Número: ${numero}<br>
            Status: Falha na validação matemática (Luhn)
        `;
        exibirResultado(html, 'red');
    }
}

function validarLuhn(numero) {
    let soma = 0;
    let inverter = true; // Começa do final (direita)

    for (let i = numero.length - 1; i >= 0; i--) {
        let digito = parseInt(numero[i]);

        if (inverter) {
            digito *= 2;
            if (digito > 9) digito -= 9;
        }

        soma += digito;
        inverter = !inverter;
    }

    return soma % 10 === 0;
}

function detectarBandeira(numero) {
    if (numero.startsWith('4')) return 'Visa';
    if (/^5[1-5]/.test(numero) || /^2[2-7]/.test(numero)) return 'Mastercard';
    if (numero.startsWith('34') || numero.startsWith('37')) return 'American Express';
    if (/^6(?:011|5)/.test(numero)) return 'Discover';
    if (/^3(?:0[0-5]|[68])/.test(numero)) return 'Diners Club';
    if (numero.startsWith('50') || /^5[6-9]/.test(numero) || /^6[0-9]/.test(numero)) return 'Elo';
    
    return 'Desconhecida';
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