let convidados = [];

const lista = document.getElementById('listaConvidados');

function adicionarConvidado() {
    const input = document.getElementById('nomeConvidado');
    const nome = input.value.trim();

    if (nome === '') {
        alert('Por favor, digite um nome válido.');
        return;
    }

    convidados.push({ nome: nome, concluido: false });
    input.value = '';
    renderizarLista();
}

function renderizarLista() {
    lista.innerHTML = '';

    convidados.forEach((convidado, index) => {
        const li = document.createElement('li');
        li.style.marginBottom = '12px';
        li.style.padding = '10px';
        li.style.border = '1px solid #ccc';
        li.style.borderRadius = '6px';
        li.style.listStyle = 'none';

        const span = document.createElement('span');
        span.textContent = convidado.nome;
        span.style.fontSize = '18px';
        if (convidado.concluido) {
            span.style.textDecoration = 'line-through';
            span.style.color = 'gray';
        }

        // Botão Concluir
        const btnConcluir = document.createElement('button');
        btnConcluir.textContent = 'Concluir';
        btnConcluir.style.marginLeft = '10px';
        btnConcluir.onclick = () => concluirConvidado(index);

        // Botão Editar
        const btnEditar = document.createElement('button');
        btnEditar.textContent = 'Editar';
        btnEditar.style.marginLeft = '8px';
        btnEditar.onclick = () => editarConvidado(index);

        // Botão Excluir
        const btnExcluir = document.createElement('button');
        btnExcluir.textContent = 'Excluir';
        btnExcluir.style.marginLeft = '8px';
        btnExcluir.style.color = 'red';
        btnExcluir.onclick = () => excluirConvidado(index);

        li.appendChild(span);
        li.appendChild(btnConcluir);
        li.appendChild(btnEditar);
        li.appendChild(btnExcluir);

        lista.appendChild(li);
    });
}

function concluirConvidado(index) {
    convidados[index].concluido = !convidados[index].concluido;
    renderizarLista();
}

function editarConvidado(index) {
    const novoNome = prompt('Editar nome do convidado:', convidados[index].nome);
    if (novoNome !== null && novoNome.trim() !== '') {
        convidados[index].nome = novoNome.trim();
        renderizarLista();
    }
}

function excluirConvidado(index) {
    if (confirm(`Deseja realmente excluir ${convidados[index].nome}?`)) {
        convidados.splice(index, 1);
        renderizarLista();
    }
}

// Permitir adicionar com Enter
document.getElementById('nomeConvidado').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        adicionarConvidado();
    }
});