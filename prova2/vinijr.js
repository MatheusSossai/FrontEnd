function proximo() {
    const conteudo = document.getElementById("conteudo");

    conteudo.innerHTML = `
        <div class="card">
            <h2>Grupo D</h2>
            <ul>
                <li>Estados Unidos</li>
                <li>Paraguai</li>
                <li>Austrália</li>
                <li>Turquia</li>
            </ul>
            <details>
                <summary>Saiba mais</summary>
                <p>EUA jogam em casa. Austrália enfrenta sul-americanos com frequência.</p>
            </details>
        </div>

        <div class="card">
            <h2>Grupo E</h2>
            <ul>
                <li>Alemanha</li>
                <li>Equador</li>
                <li>Costa do Marfim</li>
                <li>Curaçao</li>
            </ul>
            <details>
                <summary>Saiba mais</summary>
                <p>Alemanha costuma dominar grupos. Equador e Costa do Marfim têm estilo físico.</p>
            </details>
        </div>

        <div class="card">
            <h2>Grupo F</h2>
            <ul>
                <li>Holanda</li>
                <li>Japão</li>
                <li>Tunísia</li>
                <li>Suécia</li>
            </ul>
            <details>
                <summary>Saiba mais</summary>
                <p>Grupo com estilos variados e confronto equilibrado.</p>
            </details>
        </div>
    `;
}