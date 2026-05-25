function validarCPF() {
    const input = document.getElementById('cpfInput');
    const resultado = document.getElementById('resultado');
    
    let cpf = input.value.trim();
    
    // Remove tudo que não for número
    cpf = cpf.replace(/\D/g, '');

    // Validações básicas
    if (cpf.length !== 11) {
        exibirResultado('CPF deve conter 11 dígitos!', 'red');
        return;
    }

    // Rejeita CPFs com todos os dígitos iguais
    if (/^(\d)\1{10}$/.test(cpf)) {
        exibirResultado('CPF inválido (todos os dígitos iguais)', 'red');
        return;
    }

    // Converte para array de números
    const digitos = cpf.split('').map(Number);

    // Cálculo do 1º dígito verificador
    let soma = 0;
    for (let i = 0; i < 9; i++) {
        soma += digitos[i] * (10 - i);
    }
    let resto = (soma * 10) % 11;
    const primeiroVerificador = resto === 10 ? 0 : resto;

    // Cálculo do 2º dígito verificador
    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += digitos[i] * (11 - i);
    }
    resto = (soma * 10) % 11;
    const segundoVerificador = resto === 10 ? 0 : resto;

    // Verifica se os dígitos batem
    if (primeiroVerificador === digitos[9] && segundoVerificador === digitos[10]) {
        exibirResultado(' CPF VÁLIDO', 'green');
    } else {
        exibirResultado(' CPF INVÁLIDO', 'red');
    }
}

function exibirResultado(mensagem, cor) {
    const resultado = document.getElementById('resultado');
    resultado.textContent = mensagem;
    resultado.style.color = cor;
    resultado.style.fontSize = '24px';
    resultado.style.fontWeight = 'bold';
    resultado.style.marginTop = '20px';
}